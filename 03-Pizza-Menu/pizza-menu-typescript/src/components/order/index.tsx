import { OPEN_HOUR, CLOSE_HOUR } from "../../containers/footer";

function Order() {
  return (
    <div className="order">
      <p>
        We're Open from {OPEN_HOUR} until {CLOSE_HOUR}:00. Come vist us or order
        online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default Order;
