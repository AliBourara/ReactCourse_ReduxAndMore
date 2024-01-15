export default function SelectPercentage({ children, bill, onSetTip }) {
  return (
    <div>
      <label>{children}</label>
      <select onChange={(e) => onSetTip(Number((e.target.value * bill) / 100))}>
        <option value={0} selected>
          Dissatisfied (0%)
        </option>
        <option value={5}>It Was Okey (5%)</option>
        <option value={10}>it Was Good (10%)</option>
        <option value={20}>Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
}
