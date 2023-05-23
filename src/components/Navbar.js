import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link> | <Link to="/listado">Ingresar a la Tienda</Link>
    </nav>
  );
}
