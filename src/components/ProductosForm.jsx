import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import '../styles/ProductosStyles.css';
import img1 from '../assets/cadenainicial.jpg';


function ProductosPage( ) {
  const products = [
    { imagen: <img src={img1} alt="Preview" className="card-img-top" />, name: 'BY | SOF ' , description: '14k Oro Blanco & Diamante Azul', price: '₡476 605,00', details: '₡156 339 - ₡1 766 923' },
    { imagen: <img src={img1} alt="Preview" className="card-img-top" />, name: 'BY | SOF ', description: '14k Oro Rosa & Diamante Negro', price: '₡366 702,00', details: '₡164 178 - ₡1 909 270' },
    { imagen:<img src={img1} alt="Preview" className="card-img-top" />, name: 'BY | SOF ', description: '14k Oro Rosa & Moissanita', price: '₡393 986,00', details: '₡207 898 - ₡2 349 235' },
    { imagen:<img src={img1} alt="Preview" className="card-img-top" />, name: 'BY | SOF ', description: '14k Oro Blanco & Granate Rhodolite', price: '₡328 971,00', details: '₡177 091 - ₡1 988 594' },
    { imagen:<img src={img1} alt="Preview" className="card-img-top" />, name: 'BY | SOF', description: '14k Oro Blanco & Diamante & Perla blanca', price: '₡638 465,00', details: '₡308 558 - ₡3 621 162' },
    { imagen:<img src={img1} alt="Preview" className="card-img-top" />, name: 'BY | SOF Anillo Ablatifa', description: '14k Oro Blanco & Diamante', price: '₡639 695,00', details: '₡192 144 - ₡3 919 139' },
    { imagen:<img src={img1} alt="Preview" className="card-img-top" />, name: 'BY | SOF Anillo Pericolo', description: '14k Oro Amarillo & Diamante', price: '₡1 327 908,00', details: '₡208 968 - ₡23 919 139' }
  ];

  return (
    <div className="App">
      <header className="header">
        <div className="logo">BY | SOF </div>

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
        <h1>Los recién llegados</h1>
        <Container>
          <Row>
            {products.map((product, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card>
                  {product.imagen && (
                    <Card.Img variant="top" src={img1} alt={product.name} />
                  )}
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text className="text-muted">{product.price}</Card.Text>
                    <Card.Text>
                      <small>{product.details}</small>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <i className="far fa-heart"></i>
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
