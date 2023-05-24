import React from 'react';
import './inicio.css';
import logo from "../imagenes/logo.jpg";

export default function Inicio() {
  return (
    <div>
      <h2>Casa Luna Tienda Online</h2>
      <h3>Tiendas de Limpieza, Perfumeria y Bazar </h3>
      <img id="logo" src={logo} alt="mi logo"/>
      <footer>Cordoba-Argentina</footer>
    </div>
    
  );
}
