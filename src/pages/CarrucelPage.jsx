import CarrucelForm from '../components/CarrucelForm';

const CarrucelPage = () => {
  const handleCarrucel = (credentials) => {
    console.log('Carrucel credentials:', credentials);
  
  };

  return (
    <div>
 
      <CarrucelForm onCarrucel={handleCarrucel} />
    </div>
  );
};

export default CarrucelPage;