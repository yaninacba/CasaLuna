import React from 'react';
import { Link } from 'react-router-dom';
import "./Listado.css";


const listado = [{ id: 1, descripcion: 'Jabon Blanco', categoria: 'Limpieza', precio: 599.99 },
{ id: 2, descripcion: 'Vaso de vidrio', categoria: 'Bazar', precio: 399.99 },
{ id: 3, descripcion: 'Trapo de piso blanco', categoria: 'Limpieza', precio: 899.99 },
{ id: 4, descripcion: 'Regilla', categoria: 'Limpieza', precio: 199.99 },
{ id: 5, descripcion: 'Desodorante Rexona', categoria: 'Perfumeria', precio: 99.99 },
{ id: 6, descripcion: 'Paño multiuso', categoria: 'Limpieza', precio: 49.99 },
{ id: 7, descripcion: 'Tostador', categoria: 'Bazar', precio: 599.99 },
{ id: 8, descripcion: 'Trapo de piso', categoria: 'Limpieza', precio: 349.99 },
{ id: 9, descripcion: 'Perfume para ropa', categoria: 'Perfumeria', precio: 69.99 },
{ id: 10, descripcion: 'Jabon tocador x 3', categoria: 'Limpieza', precio: 899.99 },
{ id: 11, descripcion: 'Jabon Tocador Lux ', categoria: 'Limpieza', precio: 499.99 },
{ id: 12, descripcion: 'Balde 10 lts', categoria: 'Bazar', precio: 179.99 },
{ id: 13, descripcion: 'Jabon en polvo', categoria: 'Limpieza', precio: 129.99 },
{ id: 14, descripcion: 'Taza', categoria: 'Bazar', precio: 599.99 },
{ id: 15, descripcion: 'Perfume para Bebe', categoria: 'Perfumeria', precio: 349.99 },
{ id: 16, descripcion: 'Jabon liquido ariel', categoria: 'Limpieza', precio: 24.99 },
{ id: 17, descripcion: 'Colonia 2', categoria: 'Perfumeria', precio: 299.99 },
{ id: 18, descripcion: 'Colonia 1', categoria: 'Perfumeria', precio: 399.99 },
{ id: 19, descripcion: 'Escobillon ', categoria: 'Limpieza', precio: 34.99 },];

export default function Listado() {
  return (
    <div>
      <h2>Listado de productos</h2>
      <ul>
        {listado.map(producto => (
          <li key={producto.id.toString()}>
            <Link to={`/producto/${producto.id}`}>{producto.descripcion}</Link>
          </li>
        ))}
      </ul>
     <div id="agregar">
      <button >Agregar Producto</button>
      </div>  
    </div>
    
  );
}
