import React from 'react';
import '../styles/MenuStyles.css'


const MenuForm = () => {
  return (
    <aside className="w-1/4 bg-white p-4 shadow">
      <h2 className="text-lg font-bold mb-4">¿Por qué elegir GLAMIRA?</h2>
      <nav>
        <h3 className="text-md font-bold text-pink-500 mb-2">NUESTROS SERVICIOS</h3>
        <ul>
          <li className="mb-2"><a href="#" className="text-gray-700">Condiciones Generales</a></li>
          <li className="mb-2"><a href="#" className="text-pink-500">Devoluciones</a></li>
          <li className="mb-2"><a href="#" className="text-gray-700">Política de Envíos</a></li>
          <li className="mb-2"><a href="#" className="text-gray-700">Política de Privacidad</a></li>
          <li className="mb-2"><a href="#" className="text-gray-700">Política De Cookies</a></li>
          <li className="mb-2"><a href="#" className="text-gray-700">Política de Seguridad</a></li>
          <li className="mb-2"><a href="#" className="text-gray-700">Política de precios</a></li>
          <li className="mb-2"><a href="#" className="text-gray-700">Modos de pago</a></li>
          <li className="mb-2"><a href="#" className="text-gray-700">Abastecimiento Ético</a></li>
          <li className="mb-2"><a href="#" className="text-gray-700">Revocación</a></li>
          <li className="mb-2"><a href="#" className="text-gray-700">Pie de imprenta</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default MenuForm;
