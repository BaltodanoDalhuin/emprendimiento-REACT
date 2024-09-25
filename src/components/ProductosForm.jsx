import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { GetProductos } from '../services/ProductServices'; // Servicio para obtener productos
import '../styles/ProductosStyles.css';
import img1 from '../assets/anillorojo.jpg';
import img2 from '../assets/anilloazul.jpg';
import img3 from '../assets/aretestejidos.jpg';
import img4 from '../assets/aretestejidoscolores.jpg'; 
import img5 from '../assets/setanillos.jpg'; 
import img6 from '../assets/cadenainicial.jpg';   
import img7 from '../assets/cadenapersonalizada.jpg'; 
import img8 from '../assets/setpareja.jpg'; 
import img9 from '../assets/pulserascompartidas.jpg';   

export default function ProductosPage() {
  // Productos iniciales predefinidos
  const initialProducts = [
    { id: 1, imagen: img1, producto: 'Anillo De Rubi', descripcion: 'Color Dorado & Plateaado', precio: '₡476 605,00' },
    { id: 2, imagen: img2, producto: 'Anillo De Zafiro', descripcion: 'Color Dorado & Plateaado', precio: '₡366 702,00' },
    { id: 3, imagen: img3, producto: 'Aretes Negros & Blancos', descripcion: 'Aretes Tejidos', precio: '₡393 986,00' },
    { id: 4, imagen: img4, producto: 'Aretes Rosa & Azul', descripcion: 'Aretes Tejidos', precio: '₡328 971,00' },
    { id: 5, imagen: img5, producto: 'Set De Anillos Dorados', descripcion: 'Color Dorado & Plateaado', precio: '₡328 971,00' },
    { id: 6, imagen: img6, producto: 'Cadena Personalizada', descripcion: 'Color Dorado & Plateaado', precio: '₡638 465,00' },
    { id: 7, imagen: img7, producto: 'Aretes Rosa & Azul', descripcion: 'Aretes Tejidos', precio: '₡328 971,00' },
    { id: 8, imagen: img8, producto: 'Set De Anillos Dorados', descripcion: 'Color Dorado & Plateaado', precio: '₡328 971,00' },
    { id: 9, imagen: img9, producto: 'Cadena Personalizada', descripcion: 'Color Dorado & Plateaado', precio: '₡638 465,00' },
  ];

  const [products, setProducts] = useState(initialProducts); // Estado para productos
  const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda
  const [loading, setLoading] = useState(true); // Estado de carga

  // Obtener productos desde la API (db.json)
  useEffect(() => {
    GetProductos()
      .then((newProducts) => {
        // Combinar productos iniciales y nuevos, eliminando duplicados
        const allProducts = [...initialProducts, ...newProducts];
        const uniqueProducts = allProducts.reduce((acc, current) => {
          const x = acc.find(item => item.id === current.id);
          if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        }, []);

        setProducts(uniqueProducts); // Establecer productos únicos
        setLoading(false); // Cambiar el estado de carga a false
      })
      .catch((error) => {
        console.error("Error al obtener productos desde db.json:", error);
        setLoading(false); // Aún si hay error, quitamos el estado de carga
      });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
  };

  // Filtrar productos según el término de búsqueda
  const filteredProducts = searchTerm
    ? products.filter((product) =>
        product.producto.toLowerCase().includes(searchTerm)
      )
    : products;

  const handleAdd = (product) => {
    alert(`Producto añadido: ${product.producto}`);
  };

  console.log("Productos",products);
  

  return (
    <div className="App">
      <main className="main">
        <h1>Productos</h1>
        <div>
          {/* Campo de búsqueda */}
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={handleSearch}
            className="mb-4"
          />

          {loading ? (
            <p>Cargando productos...</p> // Mostrar un mensaje mientras se cargan los productos
          ) : (
            <Row>
              {/* Mostrar productos */}
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
                          onClick={() => handleAdd(product)}
                        >
                          Añadir
                        </Button>
                      </Card.Footer>
                    </Card>
                  </Col>
                ))
              ) : (
                searchTerm && <p>No se encontraron productos.</p> // Mensaje si no hay productos filtrados
              )}
            </Row>
          )}
        </div>
      </main>
    </div>
  );
}
