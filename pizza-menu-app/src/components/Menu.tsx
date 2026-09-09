import Pizza from "./Pizza";
import "../data.js";

export function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>Check out our delicious pizzas!</p>
      <Pizza image="/pizzas/spinaci.jpg" name="Spinaci" ingredients="Tomato, mozarella, spinach, and ricotta cheese" price={12.99} />
      <Pizza image="/pizzas/margherita.jpg" name="Margherita" ingredients="Tomato, mozarella, and basil" price={10.99} />
      <Pizza image="/pizzas/focaccia.jpg" name="Focaccia" ingredients="Tomato, mozarella, and herbs" price={11.99} />
    </main>
  );
}