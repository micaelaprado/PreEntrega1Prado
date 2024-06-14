import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";   
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Checkout from "./components/Checkout";
import { CartProvider } from "./context/CartContext"; 

function App() {
  return (
    <Router>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Glad!" />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;