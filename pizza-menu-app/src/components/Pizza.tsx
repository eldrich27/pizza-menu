interface PizzaProps {
    name: string;
    ingredients: string;
    price: number;
}

export default function Pizza({ name, ingredients, price }: PizzaProps) {
  return (
    <div>
        <img src="/pizzas/spinaci.jpg" alt="Spinaci Pizza" />
        <h3>Pizza : {name}</h3>
        <p>{ingredients}</p>
        <p>Price: ${price.toFixed(2)}</p>
    </div>
  );
}