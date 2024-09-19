import React from 'react';
import '../styles/MedidasStyles.css';
import img1 from '../assets/anillomedidas.jpg'; // Asegúrate de que la ruta y el nombre del archivo sean correctos

const MedidasPage = () => {
  return (
    <div className="container">
      <div className="image">
        <img
          src={img1}
          alt="A close-up of hands measuring a finger with a ring sizer"
          width="400"
          height="400"
        />
      </div>
      <div className="content">
        <p>
          La talla de anillo adecuada es imprescindible para el momento más especial. 
          El anillo debe estar lo suficientemente ajustado para que no se caiga, pero 
          también debe estar lo suficientemente flojo para deslizarse sobre el nudillo. 
          La hora del día y también el clima afectan la medición. Porque temprano en la 
          mañana o cuando hace frío, los dedos son más pequeños y cuando hace demasiado 
          calor, los dedos son más grandes. La noche es el mejor momento para medir el 
          tamaño de sus dedos mientras están calientes. Si dudas entre dos tallas, opta 
          siempre por la más grande. Si su nudillo es más grande que la base de su dedo, 
          mida tanto su nudillo como la base de su dedo y seleccione un tamaño entre los dos.
        </p>
      </div>
    </div>
  );
};

export default MedidasPage;
