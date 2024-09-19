import React from 'react';
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <a href="#">Joyería</a>
          <a href="#">Anillos de Compromiso & Anillos de Boda</a>
        </nav>
        <div className="logo">GLAMIRA</div>
        <div className="search">
          <input type="text" placeholder="BÚSQUEDA" />
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="icons">
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </header>

      <header className="header">
        <nav className="nav">
          <a href="#">Joyas</a>
          <a href="#">Anillos De Compromiso</a>
          <a href="#">Alianzas</a>
          <a href="#">Colecciones</a>
          <a href="#">Hombre</a>
          <a href="#">Niños</a>
        </nav>
      </header>

      <main className="content">
        <div className="text">
          <h1>Cadenas</h1>
          <p>
            Los collares y pulseras no son los únicos tipos de cadenas que se pueden usar. 
            También se pueden usar solos como un accesorio elegante. Explore la selección 
            de cadenas de GLAMIRA para diferentes estilos.
          </p>
          <a href="#">Ver todo</a>
        </div>
        <div className="image">
          <img
            src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-xP3sM5SJvN6RMJmoEEml84ar.png"
            alt="A woman holding gold chains and wearing a white top"
            width="600"
            height="400"
          />
        </div>
      </main>

      <div className="chat-icon">
        <FontAwesomeIcon icon={faComment} />
      </div>
    </div>
  );
};

export default HomePage;
