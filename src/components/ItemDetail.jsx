import React from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <ItemQuantitySelector />
      <AddItemButton item={item} />
    </div>
  );
};

export default ItemDetail;