interface PizzaProps {
  name: string;
  ingredients: string;
  price: number;
  image: string;
  soldOut?: boolean;
}

export default function Pizza({ image, name, ingredients, price, soldOut = false }: PizzaProps) {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={image} alt={name} />

      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "Sold out" : `$${price.toFixed(2)}`}</span>
      </div>
    </li>
  );
}