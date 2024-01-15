import { useState } from "react";
import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Output from "./Output";
import Reset from "./Reset";

export default function TipCalculateur() {
  const [bill, setBill] = useState(0);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);
  function handelReset() {
    setBill(0);
    setTip1(0);
    setTip2(0);
  }
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage bill={bill} tip1={tip1} onSetTip={setTip1}>
        How Did You Like The Service ?
      </SelectPercentage>
      <SelectPercentage bill={bill} tip2={tip2} onSetTip={setTip2}>
        How Did Your Friend Like The Service ?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip2={tip2} tip1={tip1} />
          <Reset onReset={handelReset} />
        </>
      )}
    </div>
  );
}
