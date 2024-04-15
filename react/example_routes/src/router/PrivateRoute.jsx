import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider'; // Usamos un contexto de autenticación

const PrivateRoute = ({ path, element }) => {
  const { isAuthenticated, user } = useAuth(); // Obtener el estado de autenticación del contexto de autenticación que hemos creado

  return isAuthenticated ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" replace state={{ from: path }} /> // Redirigir a la página de inicio de sesión si el usuario no está autenticado
  );
};

export default PrivateRoute;
