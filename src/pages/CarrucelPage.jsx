import CarrucelForm from '../components/CarrucelForm';

const CarrucelPage = () => {
  const handleCarrucel = (credentials) => {
    console.log('Carrucel credentials:', credentials);
    // Aquí puedes añadir la lógica para autenticar al usuario
  };

  return (
    <div>
 
      <CarrucelForm onCarrucel={handleCarrucel} />
    </div>
  );
};

export default CarrucelPage;