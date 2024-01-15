export default function Output({ bill, tip1, tip2 }) {
  const fullBill = +bill + (tip1 + tip2);
  return (
    <h3>
      You Pay {fullBill} (${bill} + ${tip1 + tip2})
    </h3>
  );
}
