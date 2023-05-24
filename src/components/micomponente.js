import React from 'react';
import BotonAgregarProducto from './BotonAgregarProducto';

function MyComponent() {
  const handleBotonPresionado = () => {
    // Lógica para manejar el evento del botón presionado
    // ...
  };

  return (
    <div>
      <BotonAgregarProducto onBotonPresionado={handleBotonPresionado} />
    </div>
  );
}

export default MyComponent;
