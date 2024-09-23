import CarruselForm from "../components/CarrucelForm";
import HomeForm from "../components/HomeForm";
import SobreNosotrosForm from "../components/SobreNosotrosForm";
import NavBar from "../components/NavBar";
import FooterForm from "../components/FooterForm"

const HomePage = () => {
  const handleHome = (credentials) => {
    console.log("Home credentials:", credentials);
  };

  return (
    <div>
      <NavBar onHome={() => alert("")} />
      <HomeForm onHome={handleHome} />
      <CarruselForm onHome={() => alert("")} />
      <SobreNosotrosForm onHome={() => alert("")} />
      <FooterForm onHome={()  => alert("")} />

    </div>
  );
};

export default HomePage;
