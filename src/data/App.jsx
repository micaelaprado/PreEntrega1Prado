import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget'; 

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Te damos la bienvenida a Glad!" />
      <CartWidget />
    </div>
  );
}

export default App;