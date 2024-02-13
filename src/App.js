import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import { useState } from "react";

const  App = () => {
  const [cart, setCart] = useState(10)
  return (
    <div className="container">
            <Header cart={cart} setCart={setCart}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart setCart={setCart}/>} />
      </Routes>

    </div>
  );
}

export default App;
