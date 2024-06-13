import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItemById = (id) => {
      return products.find(item => item.id === id);
    };
    const fetchedItem = fetchItemById(id);
    setItem(fetchedItem);
  }, [id]);

  return (
    <div className="item-detail-container">
      {item ? (
        <ItemDetail item={item} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;