import React, { useState } from 'react';
import { useAuth } from '../authUtils/AuthProvider';
import { LoginService } from '../services/LoginService';
import {LoginHandler} from '../handlers/LoginHandler';

const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await LoginHandler.userLogin( userName, password, login);
    } catch (err) {
      setError('Error durante el login');
      console.error('Login failed:', err);
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de usuario:</label>
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;
