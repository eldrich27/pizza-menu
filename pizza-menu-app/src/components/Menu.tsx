import Pizza from "./Pizza";

export function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>Check out our delicious pizzas!</p>
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}