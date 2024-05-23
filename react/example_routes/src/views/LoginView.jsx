import React from 'react';
import LoginForm from "../components/LoginForm";
import { useAuth } from "../authUtils/AuthProvider";
import { Link } from 'react-router-dom';

function LoginView(){
  const { isAuthenticated, user } = useAuth();

  console.log('isAuthenticated:', isAuthenticated, 'user:', user);

  return isAuthenticated ? (
    <> 
      <h3>Welcome back {user}!</h3>
      <Link to="/home">
        <button><h1>Let's start</h1></button>
      </Link>  
    </>
  ) : (
    <LoginForm />
  );
}

export default LoginView;




