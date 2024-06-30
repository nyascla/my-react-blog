import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/category1">Categoría 1</Link>
      <Link to="/category2">Categoría 2</Link>
      <Link to="/category3">Categoría 3</Link>
    </nav>
  );
}

export default Navbar;
