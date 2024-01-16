import { Header } from "./components/Header";
import Main from "./components/Main";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
