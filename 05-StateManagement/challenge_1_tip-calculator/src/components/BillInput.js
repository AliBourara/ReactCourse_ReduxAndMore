export default function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How Much Was The Bill ?</label>
      <input
        type="number"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
