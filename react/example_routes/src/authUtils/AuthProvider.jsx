import React, { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';

// Creamos un contexto de autenticación
const AuthContext = createContext();

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
  // Estado para almacenar la información de autenticación
  const [authState, setAuthState] = useState(() => {
    // Intentamos obtener el token y los datos del usuario de las cookies al cargar la página
    // const token = Cookies.get('token');
    // const userDataString = Cookies.get('userData');
    // const userData = userDataString ? JSON.parse(userDataString) : null;
    const user = Cookies.get('userName');
    const rol = Cookies.get('userType');
    

    return {
      isAuthenticated: !!user,
      token: rol,
    };
  });

  // Función para iniciar sesión
  // const login = (userData) => {
  //   // Aquí iría la lógica para almacenar el token y los datos del usuario en las cookies
  //   Cookies.set('token', userData.token);
  //   Cookies.set('userData', JSON.stringify(userData));
    // Función para iniciar sesión
    const login = (userData) => {
      // Aquí iría la lógica para almacenar el token y los datos del usuario en las cookies
      Cookies.set('token', userData.rol);
      Cookies.set('userData', userData.user);
   
    // Actualizamos el estado de autenticación
    setAuthState({
      isAuthenticated: true,
      user: userData.user
    });
  
  }
  // Función para cerrar sesión
  const logout = () => {
    // Aquí iría la lógica para eliminar el token y los datos del usuario de las cookies
    Cookies.remove('token');
    Cookies.remove('userData');

    // Actualizamos el estado de autenticación
    setAuthState({
      isAuthenticated: false,
      user: null,
    });
  };

  // Valor del contexto
  const contextValue = {
    ...authState,
    login,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => useContext(AuthContext);