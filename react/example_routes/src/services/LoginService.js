import axios from "axios";
import Cookies from 'js-cookie';


export const LoginService = {
    async submitLogin(userAdmin){
        try {
            // Hacer una solicitud POST para validar las credenciales
            const response = await axios.post('http://localhost:3000/login', userAdmin);
      
            // Si la respuesta es exitosa (código de estado 200), redirigir al usuario a la página de inicio
            if (response.status === 201) {
              // Redirigir al usuario a la página de inicio
              console.log("Usuario autenticado con éxito:", response.data);
              const admin = response.data;
              const adminName = admin.userName;
              const adminRol = admin.userType;

              // Suponiendo que `userData` contiene los datos del login
              Cookies.set('userName', adminName);
              Cookies.set('userType', adminRol);
              // Otros datos relevantes que desees guardar en las cookies
              



            }
          } catch (error) {
            // Si hay un error en la solicitud, mostrar un mensaje de error al usuario
            // setError('Nombre de usuario o contraseña incorrectos');
            console.log('Nombre de usuario o contraseña incorrectos');
          }
    }
}