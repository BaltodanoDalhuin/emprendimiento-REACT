import React from 'react';
import '../styles/HomeStyles.css'
import img1 from '../assets/presentacion2.jpg';

const HomeForm = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">BY | SOF </div>
        <nav className="nav">
          <a href="#">Productos</a>
          <a href="#">Medidas</a>
          <a href="#">Colecciones</a>
          <a href="#">Sobre Nosotros</a>
          <a href="#">Ubicacion</a>
        </nav>
        <div className="search">
          <input placeholder="BUSQUEDA" type="text" />
          <div className="icons">
            <a href="#"><i className="fas fa-search"></i></a>
            <a href="#"><i className="fas fa-user"></i></a>
            <a href="#"><i className="fas fa-heart"></i></a>
          </div>
        </div>
      </header>

      <div className="content">
        <div className="text">
          <h1></h1>
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
