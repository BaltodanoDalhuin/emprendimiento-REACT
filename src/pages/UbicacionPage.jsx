import UbicacionForm from "../components/UbicacionForm";
import NavBar from "../components/NavBar";
import FooterForm from "../components/FooterForm"



const UbicacionPage = () => {
  const handleUbicacion = (credentials) => {
    console.log('Ubicacion credentials:', credentials);
  };

  return (
    <div>
        <NavBar onHome={() => alert("")} />
        < UbicacionForm/>
      <FooterForm onHome={()  => alert("")} />
    </div>
  );
};

export default UbicacionPage;
