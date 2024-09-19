import PoliticaForm from '../components/PoliticaForm';

const PoliticaPage = () => {
  const handlePolitica = (credentials) => {
    console.log('Politica credentials:', credentials);
    // Aquí puedes añadir la lógica para autenticar al usuario
  };

  return (
    <div>
 
      <PoliticaForm onMedidas={handlePolitica} />
    </div>
  );
};

export default PoliticaPage;
