import FooterForm from '../components/FooterForm';

const FooterPage = () => {
  const handleFooter = (credentials) => {
    console.log('Footer credentials:', credentials);
    // Aquí puedes añadir la lógica para autenticar al usuario
  };

  return (
    <div>
 
      <FooterForm onFooter={handleFooter} />
    </div>
  );
};

export default FooterPage;
