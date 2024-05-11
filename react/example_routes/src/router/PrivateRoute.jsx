import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { useAuth } from '../authUtils/AuthProvider'; // Usamos un contexto de autenticación

const PrivateRoute = ({ path, element }) => {
  const { isAuthenticated } = useAuth(); // Obtener el estado de autenticación del contexto de autenticación que hemos creado

  return isAuthenticated ? (
    <Routes path={path} element={element} />
  ) : (
    <Navigate to="/" replace state={{ from: path }} /> // Redirigir a la página de inicio de sesión si el usuario no está autenticado
  );
};

export default PrivateRoute;
