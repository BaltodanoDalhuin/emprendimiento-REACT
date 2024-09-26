import SobreNosotrosForm from '../components/SobreNosotrosForm';

const SobreNosotrosPage = () => {
  const handleSobreNosotros = (credentials) => {
    console.log('SobreNosotros credentials:', credentials);

  };

  return (
    <div>
 
      <SobreNosotrosForm onSobreNosotros={handleSobreNosotros} />
    </div>
  );
};

export default SobreNosotrosPage;
