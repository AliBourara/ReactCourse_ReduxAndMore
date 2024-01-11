export interface PizzaProps {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
}

function Pizza({ name, ingredients, price, photoName, soldOut }: PizzaProps) {
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}

export default Pizza;
