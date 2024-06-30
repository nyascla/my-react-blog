import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/my-react-blog">Inicio</Link>
      <Link to="/my-react-blog/proyectos">Proyectos</Link>
      <Link to="/my-react-blog/sobremi">Sobre mi</Link>
      <Link to="/my-react-blog/contacto">Contacto</Link>
    </nav>
  );
}

export default Navbar;
