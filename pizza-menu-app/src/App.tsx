import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";


export default function App() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <Header />
      <h1>Welcome to Pizza Paradise!</h1>
      <Menu />
      <Footer />
    </main>
  );
}