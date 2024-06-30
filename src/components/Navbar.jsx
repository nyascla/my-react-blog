import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/my-react-blog">Inicio</Link>
      <Link to="/my-react-blog/category1">Categoría 1</Link>
      <Link to="/my-react-blog/category2">Categoría 2</Link>
      <Link to="/my-react-blog/category3">Categoría 3</Link>
    </nav>
  );
}

export default Navbar;
