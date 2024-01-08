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
  const [count, setCount] = useState(step);
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center gap-4 m-1">
          <button className="btn btn-primary m-3">-</button>
          <h3 className="m-3">Step : {step}</h3>
          <button className="btn btn-primary m-3">+</button>
        </div>
        <div className="d-flex justify-content-center gap-4 m-1">
          <button className="btn btn-primary m-3">-</button>
          <h3 className="m-3">Count : {count}</h3>
          <button className="btn btn-primary m-3">+</button>
        </div>
        <h2></h2>
      </div>
    </>
  );
}
