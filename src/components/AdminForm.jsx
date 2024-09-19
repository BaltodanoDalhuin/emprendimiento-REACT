import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  useEffect(() => {
    fetchProducts();
  }, []);
  
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  
  const addProduct = async (product) => {
    try {
      const response = await axios.post('http://localhost:3001/products', product);
      setProducts([...products, response.data]);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
  
  const updateProduct = async (product) => {
    try {
      const response = await axios.put(`http://localhost:3001/products/${product.id}`, product);
      setProducts(products.map((prod) => (prod.id === product.id ? response.data : prod)));
      setSelectedProduct(null);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };
  
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/products/${id}`);
      setProducts(products.filter((prod) => prod.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  
  return (
    <Container>
      <h1>Admin Page</h1>
      <ProductForm 
        addProduct={addProduct}
        updateProduct={updateProduct}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.imagen} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>{product.price}</Card.Text>
                <Button onClick={() => setSelectedProduct(product)}>Edit</Button>
                <Button variant="danger" onClick={() => deleteProduct(product.id)}>Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AdminPage;
