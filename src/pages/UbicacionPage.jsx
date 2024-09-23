import UbicacionForm from "../components/UbicacionForm";



const UbicacionPage = () => {
  const handleUbicacion = (credentials) => {
    console.log('Ubicacion credentials:', credentials);
  };

  return (
    <div>
 
      < UbicacionForm/>
    </div>
  );
};

export default UbicacionPage;
