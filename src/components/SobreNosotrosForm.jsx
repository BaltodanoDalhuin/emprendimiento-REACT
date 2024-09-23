import '../styles/SobreNosotros.css'
import img1 from '../assets/presentacion.jpg'



const SobreNosotrosForm = () => {
  return (
    <>
    <br />
    <br />
      <div className="container" >
        <div className="text">
          <p>
            A día de hoy By Sof tiene un estilo y una cara un poco más marcado,
            hay infinidad de productos que he agregado a la lista,
            considero que nuestro estilo es muy personal pero nunca me olvido de que soy una marca que te ayuda a materializar los accesorios que tenes en mente,
            eso me pone orgullosa porque siempre que alguien lleve un accesorio By Sof diseñado por ellos mismo,
            va llevar un pedacito de felicidad.
          </p>
        </div>

        <div className="image">
          <img src={img1} alt="Preview" />,
        </div>
      </div>
      <br />
      <br />
    </>
  );
};


export default SobreNosotrosForm;
