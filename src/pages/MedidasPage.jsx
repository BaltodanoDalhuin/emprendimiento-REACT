import MedidasForm from '../components/MedidasForm';
import NavBar from "../components/NavBar";
import FooterForm from "../components/FooterForm"

const MedidasPage = () => {
  const handleMedidas = (credentials) => {
    console.log('Medidas credentials:', credentials);
    // Aquí puedes añadir la lógica para autenticar al usuario
  };

  return (
    <div>
       <NavBar onHome={() => alert("")} />
      <MedidasForm onMedidas={handleMedidas} />
      <FooterForm onHome={()  => alert("")} />
    </div>
  );
};

export default MedidasPage;
