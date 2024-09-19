import MedidasForm from '../components/MedidasForm';

const MedidasPage = () => {
  const handleMedidas = (credentials) => {
    console.log('Medidas credentials:', credentials);
    // Aquí puedes añadir la lógica para autenticar al usuario
  };

  return (
    <div>
 
      <MedidasForm onMedidas={handleMedidas} />
    </div>
  );
};

export default MedidasPage;
