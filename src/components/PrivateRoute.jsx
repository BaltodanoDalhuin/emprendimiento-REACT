// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'; // Verifica si el usuario está autenticado

  return isAuthenticated ? children : <Navigate to="/LoginPage" />; // Redirige si no está autenticado
};

export default PrivateRoute;
