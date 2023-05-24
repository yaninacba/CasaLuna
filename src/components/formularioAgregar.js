import React, { useState } from 'react';

function AgregarProductoForm({ agregarProducto }) {
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crea el objeto de producto con los valores ingresados por el usuario
    const nuevoProducto = {
      id: Math.random(), // Genera un ID único (puedes utilizar una mejor lógica aquí)
      descripcion,
      categoria,
      precio: parseFloat(precio)
    };

    // Llama a la función para agregar el nuevo producto
    agregarProducto(nuevoProducto);

    // Reinicia los campos del formulario
    setDescripcion('');
    setCategoria('');
    setPrecio('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Descripción:
        <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
      </label>
      <br />
      <label>
        Categoría:
        <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
      </label>
      <br />
      <label>
        Precio:
        <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} />
      </label>
      <br />
      <button type="submit">Agregar Producto</button>
    </form>
  );
}

export default AgregarProductoForm;
