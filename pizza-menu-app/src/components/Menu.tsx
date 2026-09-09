import Pizza from "./Pizza";
import pizzaData from "../data.ts";

export function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>Check out our delicious pizzas!</p>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            key={pizza.name}
            image={`/${pizza.photoName}`}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            soldOut={pizza.soldOut}
          />
        ))}
      </ul>
    </main>
  );
}