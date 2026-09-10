import React from "react";
import Pizza from "./Pizza";
import pizzaData from "../data";

export function Menu() {
  const pizzas= pizzaData;
//   const pizzas:any = [];
  const numPizzas: number = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      
      {
        numPizzas > 0 ? (
          <React.Fragment>
            <p>Check out our delicious pizzas!</p>
            <ul className="pizzas">
              {pizzas.map((pizza) => (
              <Pizza key={pizza.name} pizza={pizza} />
              ))}
            </ul>
          </React.Fragment>
        ) : (
          <span>We're still working on our menu. Please check back later!</span>
        )};
    </main>
  );
}