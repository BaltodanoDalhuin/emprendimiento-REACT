import React from 'react';
import "../styles/Ubicacion.css";
import img1 from '../assets/alenafoto.jpg'
import img2 from '../assets/primerlogo.jpg'

const UbicacionForm = () => {
  return (
    <div className="about-location-container">
      <div className="about-us-container">
        <h2>Sobre Nosotros</h2>
        <div className="about-section">
          <div className="about-text">
            <h3>
            ¿Quienes somos? 
            </h3>
            <p>
            Un día decidí que no podía guardarme las ideas y las ganas de que cualquier persona portara consigo piezas únicas que lo diferenciaban del resto. Y ese es otro de los motivos por los que hoy somos By Sof
            <p>
            Trabajamos fuerte por mejorar y siempre queremos que vivas una agradable experiencia. 
            Si tienes recomendaciones, quejas o consultas no dudes en escribirnos, trabajamos todos los días por mejorar.
            </p>
        
            </p>
          </div>
          <div className="about-image-container">
        <div className="image">
          <img src={img1} alt="Preview" />,
        </div>
          </div>
        </div>
      </div>
      <div className="about-us-container">
        <div className="about-section">
          <div className="about-text">
            <h3>Inicios</h3>
            <p>
             Está fue nuestra primera cara, quizás algunos me conocieron así. Seguimos llenando los accesorios de color pero ahora buscamos proyectar una imagen más elegante.
             Nuestro aniversario es el próximo 11 de octubre. Cumplimos 4 años
            </p>
          </div>
          <div className="about-image-container">
          <div className="image">
          <img src={img2} alt="Preview" />,
        </div>
          </div>
        </div>
      </div>

      {/* Sección de Ubicación */}
      <div className="mapaCont">
        <h2>Ubicación</h2>
        <iframe
          src="https://www.google.com/maps/embed/v1/place?q=heredia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Mapa de ubicación"
        ></iframe>
      </div>
    </div>
  );
};

export default UbicacionForm;
