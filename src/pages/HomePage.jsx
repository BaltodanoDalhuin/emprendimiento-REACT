import HomeForm from '../components/HomeForm';

const HomePage = () => {
  const handleHome = (credentials) => {
    console.log('Home credentials:', credentials);

  };

  return (
    <div>
 
      <HomeForm onHome={handleHome} />
    </div>
  );
};

export default HomePage;
