import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const { id: categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItemsByCategory = (categoryId) => {
      if (categoryId) {
        return products.filter(item => item.category === categoryId);
      }
      return products;
    };
    const fetchedItems = fetchItemsByCategory(categoryId);
    setItems(fetchedItems);
  }, [categoryId]);

  return (
    <div className="item-list-container third-color">
      <p>{greeting}</p>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;