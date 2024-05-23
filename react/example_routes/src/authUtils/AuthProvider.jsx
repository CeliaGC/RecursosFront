import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
  });

  useEffect(() => {
    const user = Cookies.get('userName');
    const token = Cookies.get('userType');
    if (user && token) {
      setAuthState({
        isAuthenticated: true,
        user: user,
      });
    }
  }, []);

  const login = (userData) => {
    console.log('Logging in user:', userData);
    Cookies.set('userName', userData.user);
    Cookies.set('userType', userData.token);

    setAuthState({
      isAuthenticated: true,
      user: userData.user,
    });
  };

  const logout = () => {
    Cookies.remove('userName');
    Cookies.remove('userType');

    setAuthState({
      isAuthenticated: false,
      user: null,
    });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
