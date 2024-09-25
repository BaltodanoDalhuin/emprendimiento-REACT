import { Button, Table, Container, Row, Col, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PostProducto, GetProductos, PutProducto, DeleteProducto } from '../services/ProductServices';

const AdminForm = () => {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState('');
  const [editingIndex, setEditingIndex] = useState(null); // Índice del producto en edición

  // Maneja la carga del archivo de imagen
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagen(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Maneja el envío del formulario para agregar o editar productos
  const handleSubmit = async (event) => {
    event.preventDefault();
    const nuevoProducto = { nombre, marca, categoria, precio, imagen };
    
    if (editingIndex !== null) {
      // Si estamos editando un producto
      await PutProducto(productos[editingIndex].id, nuevoProducto);
      console.log(editingIndex);
      
      setEditingIndex(null); // Resetear el índice
    } else {
      // Agregar un nuevo producto
      await PostProducto(nuevoProducto);
    }

    resetForm(); // Resetear el formulario
    fetchProductos(); // Refrescar la lista de productos
  };

  // Función para obtener productos
  const fetchProductos = async () => {
    const data = await GetProductos();
    setProductos(data);
  };

  // Maneja la edición de un producto
  const handleEdit = (index) => {
    const producto = productos[index];
    setNombre(producto.nombre);
    setMarca(producto.marca);
    setCategoria(producto.categoria);
    setPrecio(producto.precio);
    setImagen(producto.imagen);
    setEditingIndex(index); // Establecer el índice para editar
  };

  // Maneja la eliminación de un producto
  const handleDelete = async (id) => {
    await DeleteProducto(id);
    fetchProductos(); // Refrescar la lista de productos
  };

  // Resetea el formulario
  const resetForm = () => {
    setNombre('');
    setMarca('');
    setCategoria('');
    setPrecio('');
    setImagen('');
  };

  // Efecto para cargar productos al inicio
  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <Container>
      <h1 className="text-center my-4">Products</h1>

      {/* Formulario para agregar/editar productos */}
      <Form onSubmit={handleSubmit} className="mb-4">
        <Row>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Nombre" 
              value={nombre} 
              onChange={(e) => setNombre(e.target.value)} 
              required 
            />
          </Col>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Marca" 
              value={marca} 
              onChange={(e) => setMarca(e.target.value)} 
              required 
            />
          </Col>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Categoría" 
              value={categoria} 
              onChange={(e) => setCategoria(e.target.value)} 
              required 
            />
          </Col>
          <Col>
            <Form.Control 
              type="number" 
              placeholder="Precio" 
              value={precio} 
              onChange={(e) => setPrecio(e.target.value)} 
              required 
            />
          </Col>
          <Col>
            <Form.Control 
              type="file" 
              accept="image/*" 
              onChange={handleFileChange} 
              required 
            />
          </Col>
          <Col>
            <Button type="submit" variant="primary">
              {editingIndex !== null ? 'Actualizar Producto' : 'Agregar Producto'}
            </Button>
          </Col>
        </Row>
      </Form>

      {/* Tabla de Productos */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.marca}</td>
              <td>{producto.categoria}</td>
              <td>{producto.precio}$</td>
              <td>
                <img src={producto.imagen} alt={producto.nombre} width="50" />
              </td>
              <td>
                <Button variant="primary" size="sm" className="me-2" onClick={() => handleEdit(index)}>Edit</Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(producto.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminForm;
