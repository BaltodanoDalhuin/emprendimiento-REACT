import React from 'react';
import "../styles/NavBar.css";
import logo from "../assets/bylogo.png";
import { Link } from 'react-router-dom';

// Importar íconos de react-icons
import { FaSearch, FaUser, FaHeart } from 'react-icons/fa';

const NavBar = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" style={{ width: '130px', height: 'auto' }} />
      </div>
      <nav className="nav">
        <Link to="/HomePage">Home</Link>
        <Link to="/MedidasPage">Medidas</Link>
        <Link to="/ColecionesPage">Colecciones</Link>
        <Link to="/ProductosPage">Productos</Link>
        <a href="#">Sobre Nosotros</a>
        <Link to="/UbicacionPage">Ubicación</Link>
      </nav>
      <div className="search">
        <input placeholder="BUSQUEDA" type="text" />
        <div className="icons">
          <a href="#" aria-label="Buscar">
            <FaSearch />
          </a>
          {/* Enlazar el icono de usuario a la página de login */}
          <Link to="/LoginPage" aria-label="Usuario">
            <FaUser />
          </Link>
          <a href="#" aria-label="Favoritos">
            <FaHeart />
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
