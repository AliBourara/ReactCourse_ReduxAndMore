import { useEffect, useState } from "react";

function App() {
  const [amount, setAmount] = useState<number>(1);
  const [from, setFrom] = useState<string>("EUR");
  const [target, setTarget] = useState<string>("USD");
  const [converted, setConverted] = useState<number>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      // const controller = new AbortController();
      async function convert() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${target}`
          // { signal: controller.signal }
        );
        const data = await res.json();
        setConverted(data.rates[target]);
        setIsLoading(false);
      }
      if (from === target) return setConverted(amount);
      convert();
    },
    [amount, from, target]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {converted} {target}
      </p>
    </div>
  );
}

export default App;
