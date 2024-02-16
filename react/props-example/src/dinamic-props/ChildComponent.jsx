import React from 'react';
//Este componente va a renderizar unos datos de usuario o una petición de login dependiendo del valor de user, que serán 
//los datos de un usuario logueado, y de isLoged, que es un estado booleano true si hay usuario registrado
 const ChildComponent = ({ user, isLogged}) => {
  return (
    <div>
      {isLogged ? (
        <div>
          <h1>User Profile</h1>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
}

export default ChildComponent;
