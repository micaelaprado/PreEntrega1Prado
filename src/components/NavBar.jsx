import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <Link to="/" className="brand">Glad</Link>
      <ul className="categories">
        <li><Link to="/category/productos">Productos</Link></li>
        <li><Link to="/category/nuestra-marca">Nuestra Marca</Link></li>
        <li><Link to="/category/contacto">Contacto</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;