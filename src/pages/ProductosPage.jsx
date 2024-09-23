import ProductosForm from '../components/ProductosForm';
import NavBar from "../components/NavBar";
import FooterForm from "../components/FooterForm"


const ProductosPage = () => {
  const handleProductos = (credentials) => {
    console.log('Productos credentials:', credentials);

  };

  return (
    <div>
        <NavBar onHome={() => alert("")} />
      <ProductosForm onProductos={handleProductos} />
      <FooterForm onHome={()  => alert("")} />
    </div>
  );
};

export default ProductosPage;
