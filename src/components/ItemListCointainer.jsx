import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>{greeting}</h2>
          <p>Bienvenido a Glad! Explora nuestra gama de productos para el cuidado de la piel y logra una piel radiante y saludable.</p>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;