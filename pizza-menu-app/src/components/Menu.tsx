import Pizza from "./Pizza";
import pizzaData from "../data";

export function Menu() {
//   const pizzas= pizzaData;
  const pizzas:any = [];
  const numPizzas: number = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>Check out our delicious pizzas!</p>
      {
        numPizzas > 0 && (
          <ul className="pizzas">
            {pizzas.map((pizza) => (
            <Pizza key={pizza.name} pizza={pizza} />
            ))}
          </ul>
        )
      };
    </main>
  );
}