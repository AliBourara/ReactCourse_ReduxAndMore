import Order from "../../components/order";

export const CLOSE_HOUR = 22;
export const OPEN_HOUR = 12;

export default function Footer() {
  const hour = new Date().getHours();

  const isOpen = hour >= OPEN_HOUR && hour <= CLOSE_HOUR;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We'are Currently open!")
  // else alert("Sorry ! We'are closed !");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order />
      ) : (
        <p>
          We're happy to welcome you between {OPEN_HOUR}:00 and {CLOSE_HOUR}:00.
        </p>
      )}
    </footer>
  );
  // return React.createElement('footer', null, "We're Currently Open")
}
