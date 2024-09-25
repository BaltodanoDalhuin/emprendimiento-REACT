// productServices.js
const API_URL = 'http://localhost:3001/productos';

export const GetProductos = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

export const PostProducto = async (producto) => {
  await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(producto),
  });
};

export const PutProducto = async (id, producto) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(producto),
  });
};

export const DeleteProducto = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};
