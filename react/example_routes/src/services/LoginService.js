import axios from "axios";

export const LoginService = {
    async submitLogin(username,password){
        try {
            // Hacer una solicitud POST para validar las credenciales
            const response = await axios.post('http://localhost:3000/login', {
              username: username,
              password: password
            });
      
            // Si la respuesta es exitosa (código de estado 200), redirigir al usuario a la página de inicio
            if (response.status === 201) {
              // Redirigir al usuario a la página de inicio
              console.log("Usuario autenticado con éxito:", response.data);

            }
          } catch (error) {
            // Si hay un error en la solicitud, mostrar un mensaje de error al usuario
            // setError('Nombre de usuario o contraseña incorrectos');
            console.log('Nombre de usuario o contraseña incorrectos');
          }
    }
}