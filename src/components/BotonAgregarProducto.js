import React from 'react';

function BotonAgregarProducto({ onBotonPresionado }) {
  return (
    <button onClick={onBotonPresionado}>Agregar Producto</button>
  );
}

export default BotonAgregarProducto;
