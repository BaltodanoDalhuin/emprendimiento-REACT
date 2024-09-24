import ColecionesForm from '../components/ColecionesForm';
import NavBar from "../components/NavBar";
import FooterForm from "../components/FooterForm"


const ColecionesPage = () => {
  const handleColeciones = (credentials) => {
    console.log('Medidas credentials:', credentials);
  };

  return (
    <div>
           <NavBar onHome={() => alert("")} />
      <ColecionesForm onColecciones={handleColeciones} />
      <FooterForm onHome={()  => alert("")} />
    </div>
  );
};

export default ColecionesPage;
