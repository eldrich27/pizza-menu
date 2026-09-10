type PizzaItem = {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
};

interface PizzaProps {
  pizza: PizzaItem;
}

export default function Pizza({ pizza }: PizzaProps) {
  const { name, ingredients, price, photoName, soldOut } = pizza;

  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={`/${photoName}`} alt={name} />

      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "Sold out" : `$${price.toFixed(2)}`}</span>
      </div>
    </li>
  );
}