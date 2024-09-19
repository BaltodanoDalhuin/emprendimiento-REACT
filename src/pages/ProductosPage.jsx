import ProductosForm from '../components/ProductosForm';

const ProductosPage = () => {
  const handleProductos = (credentials) => {
    console.log('Productos credentials:', credentials);

  };

  return (
    <div>
 
      <ProductosForm onProductos={handleProductos} />
    </div>
  );
};

export default ProductosPage;
