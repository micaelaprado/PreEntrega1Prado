import React from 'react';
import { products } from '../data'; 

const ItemList = () => {
  return (
    <ul className="item-list">
      {products.map(product => (
        <li key={product.id} className="item">
          <div className="image-container">
            <img src={product.image} alt={product.name} />
          </div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price.toFixed(2)}</p>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;