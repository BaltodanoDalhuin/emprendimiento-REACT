import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/ProductosStyles.css';
import img1 from '../assets/anillorojo.jpg';
import img2 from '../assets/anilloazul.jpg';
import img3 from '../assets/aretestejidos.jpg';
import img4 from '../assets/aretestejidoscolores.jpg'; 
import img5 from '../assets/setanillos.jpg'; 
import img6 from '../assets/cadenapersonalizada.jpg';   

function ProductosPage() {
  const products = [
    { id: 1, imagen: img1, name: 'Anillo De Rubi', description: 'Color Dorado & Plateaado', price: '₡476 605,00' },
    { id: 2, imagen: img2, name: 'Anillo De Zafiro', description: 'Color Dorado & Plateaado', price: '₡366 702,00' },
    { id: 3, imagen: img3, name: 'Aretes Negros & Blancos', description: 'Aretes Tejidos', price: '₡393 986,00' },
    { id: 4, imagen: img4, name: 'Aretes Rosa & Azul', description: 'Aretes Tejidos', price: '₡328 971,00' },
    { id: 5, imagen: img5, name: 'Set De Anillos Dorados', description: 'Color Dorado & Plateaado', price: '₡328 971,00' },
    { id: 6, imagen: img6, name: 'Cadena Personalizada', description: 'Color Dorado & Plateaado', price: '₡638 465,00' },
  ];

  const handleAdd = (product) => {
    // Lógica para añadir el producto
    alert(`Producto añadido: ${product.name}`);
  };

  const handleDelete = (productId) => {
    // Lógica para eliminar el producto
    alert(`Producto eliminado con ID: ${productId}`);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo">BY | SOF</div>
        <div className="search">
          <input placeholder="BUSQUEDA" type="text" />
          <div className="icons">
            <a href="#"><i className="fas fa-search"></i></a>
            <a href="#"><i className="fas fa-user"></i></a>
            <a href="#"><i className="fas fa-heart"></i></a>
          </div>
        </div>
      </header>

      <main className="main">
        <h1>Productos</h1>
        <Container>
          <Row>
            {products.map((product) => (
              <Col key={product.id} md={4} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={product.imagen} alt={product.name} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text className="text-muted">{product.price}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-between">
                    <Button 
                      variant="success" 
                      onClick={() => handleAdd(product)}
                    >
                      Añadir
                    </Button>
                    <Button 
                      variant="danger" 
                      onClick={() => handleDelete(product.id)}
                    >
                      Eliminar
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default ProductosPage;
