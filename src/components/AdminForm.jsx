import { Button, Table, Container, Row, Col, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import { PostProducto, GetProductos, PutProducto, DeleteProducto } from '../services/ProductServices';

const AdminForm = () => {
  // estado para almacenar la lista de productos obtenidos de la base de datos
  const [productos, setProductos] = useState([]);
  // estados para controlar los valores del formulario
  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState('');
  // estado para saber si estamos editando un producto (almacena el índice del producto en edición)
  const [editingIndex, setEditingIndex] = useState(null);

  // maneja la carga del archivo de imagen y lo convierte en base64
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      // cuando se termina de leer el archivo, se guarda la imagen en el estado
      reader.onloadend = () => {
        setImagen(reader.result);
      };
      reader.readAsDataURL(file); // lee el archivo como una url en base64
    }
  };

  // maneja el envío del formulario para agregar o editar productos
  const handleSubmit = async (event) => {
    event.preventDefault();
    // crea un objeto con los datos del formulario
    const nuevoProducto = { nombre, marca, categoria, precio, imagen };

    if (editingIndex !== null) {
      // si estamos editando un producto existente
      await PutProducto(productos[editingIndex].id, nuevoProducto);
      setEditingIndex(null); // resetea el índice de edición
    } else {
      // si estamos agregando un nuevo producto
      await PostProducto(nuevoProducto);
    }

    resetForm(); // resetea el formulario
    fetchProductos(); // refresca la lista de productos
  };

  // función para obtener los productos de la base de datos
  const fetchProductos = async () => {
    const data = await GetProductos();
    setProductos(data); // actualiza el estado con los productos obtenidos
  };

  // maneja la edición de un producto, llenando el formulario con los datos del producto seleccionado
  const handleEdit = (index) => {
    const producto = productos[index];
    setNombre(producto.nombre);
    setMarca(producto.marca);
    setCategoria(producto.categoria);
    setPrecio(producto.precio);
    setImagen(producto.imagen);
    setEditingIndex(index); // establece el índice del producto que se está editando
  };

  // maneja la eliminación de un producto
  const handleDelete = async (id) => {
    await DeleteProducto(id); // elimina el producto por su id
    fetchProductos(); // refresca la lista de productos
  };

  // resetea los valores del formulario
  const resetForm = () => {
    setNombre('');
    setMarca('');
    setCategoria('');
    setPrecio('');
    setImagen('');
  };

  // carga la lista de productos cuando el componente se monta
  useEffect(() => {
    fetchProductos(); // obtiene los productos al cargar el componente
  }, []);

  return (
    <Container>
      <h1 className="text-center my-4">Products</h1>

      {/* formulario para agregar o editar productos */}
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
            {/* el botón cambia su texto dependiendo de si estamos agregando o editando */}
            <Button type="submit" variant="primary">
              {editingIndex !== null ? 'Actualizar Producto' : 'Agregar Producto'}
            </Button>
          </Col>
        </Row>
      </Form>

      {/* tabla para mostrar los productos */}
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
          {/* recorre la lista de productos y los muestra en filas */}
          {productos.map((producto, index) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.marca}</td>
              <td>{producto.categoria}</td>
              <td>{producto.precio}$</td>
              <td>
                {/* muestra la imagen del producto */}
                <img src={producto.imagen} alt={producto.nombre} width="50" />
              </td>
              <td>
                {/* botón para editar, que carga los datos en el formulario */}
                <Button variant="primary" size="sm" className="me-2" onClick={() => handleEdit(index)}>Edit</Button>
                {/* botón para eliminar el producto */}
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
