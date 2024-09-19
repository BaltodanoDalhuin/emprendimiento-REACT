import SobreNosotrosForm from '../components/SobreNosotrosForm';

const SobreNosotrosPage = () => {
  const handleSobreNosotros = (credentials) => {
    console.log('SobreNosotros credentials:', credentials);
    // Aquí puedes añadir la lógica para autenticar al usuario
  };

  return (
    <div>
 
      <SobreNosotrosForm onSobreNosotros={handleSobreNosotros} />
    </div>
  );
};

export default SobreNosotrosPage;
