import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const AddItemButton = ({ item }) => {
  const { addItem } = useContext(CartContext);

  const handleAdd = () => {
    addItem(item);
  };

  return <button onClick={handleAdd}>Agregar al Carrito</button>;
};

export default AddItemButton;