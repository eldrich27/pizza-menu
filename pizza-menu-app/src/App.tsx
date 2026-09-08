import Pizza from "./components/Pizza";


export default function App() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Hello, World!</h1>
      <p>Clean setup running from scratch.</p>
      <Pizza />
      <Pizza />
    </main>
  );
}