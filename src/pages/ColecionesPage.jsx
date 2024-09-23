import ColecionesForm from '../components/ColecionesForm';

const ColecionesPage = () => {
  const handleColeciones = (credentials) => {
    console.log('Medidas credentials:', credentials);
  };

  return (
    <div>
      <ColecionesForm onColecciones={handleColeciones} />
    </div>
  );
};

export default ColecionesPage;
