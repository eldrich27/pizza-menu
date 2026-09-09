import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";

import "./index.css";

export default function App() {
  return (
    <div className="container">
      <Header />
      <h1>Welcome to Pizza Paradise!</h1>
      <Menu />
      <Footer />
    </div>
  );
}