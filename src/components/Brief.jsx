import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Brief = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>Resumen de compra</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>{item.name} - {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default Brief;