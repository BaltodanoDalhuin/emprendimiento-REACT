import FooterForm from '../components/FooterForm';

const FooterPage = () => {
  const handleFooter = (credentials) => {
    console.log('Footer credentials:', credentials);

  };

  return (
    <div>
 
      <FooterForm onFooter={handleFooter} />
    </div>
  );
};

export default FooterPage;
