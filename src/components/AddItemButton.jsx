import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const AddItemButton = ({ item }) => {
  const { addItem } = useContext(CartContext);

  const handleClick = () => {
    addItem(item);
  };

  return (
    <button onClick={handleClick}>Agregar al carrito</button>
  );
};

export default AddItemButton;