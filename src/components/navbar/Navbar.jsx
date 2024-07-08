import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Proyectos</Link>
      <Link to="/sobremi">Sobre mi</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
}

export default Navbar;
