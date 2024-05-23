import React, { useContext, useState } from 'react';
import axios from 'axios';
import { LoginHandler } from '../handlers/LoginHandler';
import { useAuth} from '../authUtils/AuthProvider';



const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const {login} = useAuth();
 




  const handleSubmit = async (e) => {
    e.preventDefault();
    
    LoginHandler.userLogin(userName, password, (userData) =>
    login(userData))
    
    // .then(response =>{
    //     if(response.status = 201){
    //         console.log("Bienvenido, tú")
    //     }
    // })

    // try {
    //   // Hacer una solicitud POST para validar las credenciales
    //   const response = await axios.post('http://localhost:3000/login', {
    //     username: username,
    //     password: password
    //   });

    //   // Si la respuesta es exitosa (código de estado 200), redirigir al usuario a la página de inicio
    //   if (response.status === 200) {
    //     // Redirigir al usuario a la página de inicio
    //     window.location.href = '/home';
    //   }
    // } catch (error) {
    //   // Si hay un error en la solicitud, mostrar un mensaje de error al usuario
    //   setError('Nombre de usuario o contraseña incorrectos');
    // }
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
         <button type='sumbit'><h1>Log in</h1> </button>
        {/* <button type="submit">Iniciar sesión</button> */}
      </form>
    </div>
  );
};

export default LoginForm;
