import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { GetProductos } from '../services/ProductServices'; // servicio para obtener productos desde una fuente externa
import '../styles/ProductosStyles.css'; // estilos para la pagina de productos
import img1 from '../assets/anillorojo.jpg';
import img2 from '../assets/anilloazul.jpg';
import img3 from '../assets/aretestejidos.jpg';
import img4 from '../assets/aretestejidoscolores.jpg';
import img5 from '../assets/setanillos.jpg';
import img6 from '../assets/cadenainicial.jpg';
import img7 from '../assets/cadenapersonalizada.jpg';
import img8 from '../assets/setpareja.jpg';
import img9 from '../assets/pulserascompartidas.jpg';

// componente principal que representa la pagina de productos
export default function ProductosPage() {
  // productos iniciales que se muestran antes de obtener los productos de la base de datos
  const initialProducts = [
    { id: 1, imagen: img1, producto: 'Anillo De Rubi', descripcion: 'Color Dorado & Plateado', precio: '₡476 605,00' },
    { id: 2, imagen: img2, producto: 'Anillo De Zafiro', descripcion: 'Color Dorado & Plateado', precio: '₡366 702,00' },
    { id: 3, imagen: img3, producto: 'Aretes Negros & Blancos', descripcion: 'Aretes Tejidos', precio: '₡393 986,00' },
    { id: 4, imagen: img4, producto: 'Aretes Rosa & Azul', descripcion: 'Aretes Tejidos', precio: '₡328 971,00' },
    { id: 5, imagen: img5, producto: 'Set De Anillos Dorados', descripcion: 'Color Dorado & Plateado', precio: '₡328 971,00' },
    { id: 6, imagen: img6, producto: 'Cadena Personalizada', descripcion: 'Color Dorado & Plateado', precio: '₡638 465,00' },
    { id: 7, imagen: img7, producto: 'Aretes Rosa & Azul', descripcion: 'Aretes Tejidos', precio: '₡328 971,00' },
    { id: 8, imagen: img8, producto: 'Set De Anillos Dorados', descripcion: 'Color Dorado & Plateado', precio: '₡328 971,00' },
    { id: 9, imagen: img9, producto: 'Cadena Personalizada', descripcion: 'Color Dorado & Plateado', precio: '₡638 465,00' },
  ];

  // estado para almacenar los productos que se van a mostrar
  const [products, setProducts] = useState(initialProducts); 
  // estado para almacenar el termino de busqueda
  const [searchTerm, setSearchTerm] = useState(""); 
  // estado para controlar si los productos estan cargandose
  const [loading, setLoading] = useState(true); 

  // useEffect para obtener productos desde la API (db.json) al montar el componente
  useEffect(() => {
    GetProductos()
      .then((newProducts) => {
        // combinar los productos predefinidos con los obtenidos desde la API, eliminando duplicados
        const allProducts = [...initialProducts, ...newProducts];
        const uniqueProducts = allProducts.reduce((acc, current) => {
          const x = acc.find(item => item.id === current.id);
          if (!x) {
            return acc.concat([current]); // si el producto no existe en el acumulador, se añade
          } else {
            return acc; // si ya existe, no se añade para evitar duplicados
          }
        }, []);

        // actualizar el estado con los productos unicos y quitar el estado de carga
        setProducts(uniqueProducts); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error al obtener productos desde db.json:", error);
        setLoading(false); // si ocurre un error, detener la carga igualmente
      });
  }, []);

  // funcion para manejar la busqueda, actualiza el estado con el valor del input
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase(); // convierte el valor a minusculas para mejorar el filtrado
    setSearchTerm(value);
  };

  // filtrar productos en base al termino de busqueda, si hay algun valor en searchTerm
  const filteredProducts = searchTerm
    ? products.filter((product) =>
        product.producto.toLowerCase().includes(searchTerm) // filtrar productos cuyo nombre contenga el termino de busqueda
      )
    : products;

  // funcion para manejar el evento de "añadir" producto
  const handleAdd = (product) => {
    alert(`Producto añadido: ${product.producto}`); // muestra una alerta cuando se añade un producto
  };

  console.log("Productos", products); // muestra los productos en la consola para revisar

  return (
    <div className="App">
      <main className="main">
        <h1>Productos</h1>
        <div>
          {/* campo de busqueda */}
          <input
            type="text"
            placeholder="Buscar productos..." // texto que aparece como sugerencia dentro del input
            value={searchTerm}
            onChange={handleSearch} // llama a handleSearch cuando el usuario escribe algo
            className="mb-4"
          />

          {loading ? (
            <p>Cargando productos...</p> // mostrar un mensaje mientras los productos se estan cargando
          ) : (
            <Row>
              {/* mostrar productos filtrados */}
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Col key={product.id} md={4} className="mb-4">
                    <Card>
                      <Card.Img variant="top" src={product.imagen} alt={product.producto} />
                      <Card.Body>
                        <Card.Title>{product.producto}</Card.Title>
                        <Card.Text>{product.descripcion}</Card.Text>
                        <Card.Text className="text-muted">{product.precio}</Card.Text>
                      </Card.Body>
                      <Card.Footer className="d-flex justify-content-between">
                        <Button 
                          variant="success" 
                          onClick={() => handleAdd(product)} // llama a handleAdd cuando se hace clic en el boton "añadir"
                        >
                          Añadir
                        </Button>
                      </Card.Footer>
                    </Card>
                  </Col>
                ))
              ) : (
                searchTerm && <p>No se encontraron productos.</p> // si no se encuentran productos filtrados, mostrar este mensaje
              )}
            </Row>
          )}
        </div>
      </main>
    </div>
  );
}
