import Pizza from "./Pizza";
import "../data.js";

export function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>Check out our delicious pizzas!</p>
      <Pizza name="Spinaci" ingredients="Tomato, mozarella, spinach, and ricotta cheese" price={12.99} />
      <Pizza name="Margherita" ingredients="Tomato, mozarella, and basil" price={10.99} />
      <Pizza name="Pepperoni" ingredients="Tomato, mozarella, and pepperoni" price={13.99} />
    </main>
  );
}