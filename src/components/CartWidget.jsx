import React from 'react';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <i className="bi bi-cart"></i>
      <span className="badge bg-primary">3</span> {/* Número hardcodeado (fijo) */}
    </div>
  );
}

export default CartWidget;