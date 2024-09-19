import CarruselForm from '../components/CarrucelForm';
import HomeForm from '../components/HomeForm';
import SobreNosotrosForm from '../components/SobreNosotrosForm';

const HomePage = () => {
  const handleHome = (credentials) => {
    console.log('Home credentials:', credentials);

  };

  return (
    <div>
 
      <HomeForm onHome={handleHome} />
      <CarruselForm onHome={()=> alert("")} />
      <SobreNosotrosForm onHome={()=> alert("")}/>
    </div>
  );
};

export default HomePage;
