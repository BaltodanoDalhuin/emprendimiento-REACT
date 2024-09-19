import React from "react";
import '../styles/FooterStyles.css'
import { FaStar, FaStarHalfAlt, FaFacebookF, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <a>Anillos de compromiso</a>
        <a>Anillos</a>
        <a>Collares</a>
        <a>Pendientes</a>
        <a>Pulseras</a>
        <a>Anillos de boda</a>
        <a>Hombres</a>
        <a>Niños</a>
        <a>Más joyas</a>
        <a>Colecciones</a>
      </div>

      <div className="payment-logos">
        <div className="payment-placeholder">DHL</div>
        <div className="payment-placeholder">Mastercard</div>
        <div className="payment-placeholder">VISA</div>
        <div className="payment-placeholder">American Express</div>
        <div className="payment-placeholder">Diners Club</div>
        <div className="payment-placeholder">JCB</div>
      </div>

      <div className="footer">
        <div className="logo">GLAMIRA</div>

        <div className="reviews">
          <span>Reseñas</span>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          <span>4.84</span>
          <a>Ver Todas Las Valoraciones</a>
        </div>

        <div className="social-icons">
          <a><FaFacebookF /></a>
          <a><FaInstagram /></a>
          <a><FaPinterest /></a>
          <a><FaYoutube /></a>
        </div>

        <div className="links">
          <div>
            <a>Sobre nosotros</a>
            <a>Póngase en contacto con nosotros</a>
          </div>
          <div>
            <a>Devoluciones</a>
            <a>Planes de garantía y protección</a>
          </div>
          <div>
            <a>Beneficios</a>
            <a>Guías y Educación</a>
          </div>
          <div>
            <a>Ayuda y preguntas frecuentes</a>
          </div>
        </div>

        <div className="trustpilot">
          <span>Great</span>
          <div className="trustpilot-placeholder">Trustpilot Logo</div>
          <span>40,958 reviews on</span>
        </div>

        <div className="bottom-bar">
          <div>
            <a>Seleccione su país</a>
          </div>
          <div>
            <span>© GLAMIRA 2008 - 2024</span>
          </div>
          <div>
            <a>Términos y condiciones</a>
            <a>Política de privacidad</a>
            <a>Ley</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
