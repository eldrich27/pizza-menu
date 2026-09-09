interface PizzaProps {
    name: string;
    ingredients: string;
    price: number;
    image: string; // Optional image prop
}

export default function Pizza({image, name, ingredients, price }: PizzaProps) {
  return (
    <div>
        <img src={image} alt={name} />
        <h3>Pizza : {name}</h3>
        <p>{ingredients}</p>
        <p>Price: ${price.toFixed(2)}</p>
    </div>
  );
}