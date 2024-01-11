import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handelCountPlus() {
    setCount((c) => c + step);
  }
  function handelCountMinus() {
    setCount((c) => c - step);
  }
  function reset(e) {
    setStep(1);
    setCount(0);
  }

  return (
    <>
      {/* <div>
      <button onclick={() => setStep ((c) => c − 1)}>-</button>
      <span>Step: {step}</span>
      <button onclick={() => setStep ((c) => c + 1)}>+</button>
      </div>
      <div>
      <button onclick={() => setCount((c) => c - 1)}> </button>
      <span>Count: {count}</span>
      <button onclick={() => setCount((c) => c + 1)}>+</button>
      </div>  */}
      <div className="container">
        <div className="d-flex justify-content-center gap-4 m-1">
          <input
            type="range"
            min={0}
            max={10}
            value={step}
            onChange={(e) => setStep(+e.target.value)}
            style={{ width: "13rem" }}
          />
          <span className="h2">Step : {step}</span>
        </div>
        <div className="d-flex justify-content-center m-1">
          <button className="btn btn-primary m-3" onClick={handelCountMinus}>
            -
          </button>
          <div className="form-group d-flex justify-content-center py-3">
            <input
              className="form-control"
              value={count}
              onChange={(e) => {
                setCount(Number(e.target.value));
              }}
              placeholder={count}
            />
          </div>
          <button className="btn btn-primary m-3" onClick={handelCountPlus}>
            +
          </button>
        </div>
        <h2 className="d-flex justify-content-center gap-4 m-1">
          <span>
            {count === 0
              ? "Today is"
              : count > 0
              ? `${count} days from today`
              : `${Math.abs(count)} days ago was`}
          </span>
          {date.toDateString()}
        </h2>
      </div>
      {count !== 0 || step !== 1 ? (
        <form
          className="d-flex justify-content-center gap-4 m-1"
          onSubmit={reset}
        >
          <button type="submit" class="btn btn-outline-secondary">
            Reset
          </button>
        </form>
      ) : (
        ""
      )}
    </>
  );
}
