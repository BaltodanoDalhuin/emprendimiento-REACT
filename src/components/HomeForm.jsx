import React from 'react';
import '../styles/HomeStyles.css'
import img1 from '../assets/presentacion2.jpg';

const HomeForm = () => {
  return (
    <div>
      <div className="content">
        <div className="text">
          <p>
          By Sof inicio en el 2020 cuando yo, Alena Sofía tenía 15, empecé a publicar scrunchies porque estaban full en tendencia y recién compraba y a aprendía a usar mi máquina de coser. 
          No pasaron ni 2 días y ya había colocado mi primera venta, lo que hizo que siguiera trabajando full motivada. 
          Siempre he sido una persona creativa y con un gusto por la moda y las tendencias, así que sabía que no podía quedarme solo con ese accesorio por lo que empecé a publicar algunos otros, como collares y pulseras. 
          El público lo aceptó perfecto e incluso empezaron a pedirme sus accesorios personalizados
          </p>
        </div>

        <div className="image">
        <img src={img1} alt="Preview"/>,
        </div>
      </div>
    </div>
  );
};

export default HomeForm;
