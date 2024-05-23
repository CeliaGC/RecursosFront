import axios from 'axios';

export const LoginService = {
  async submitLogin(userAdmin, login) {
    try {
      const response = await axios.post('http://localhost:3000/login', userAdmin);
      if (response.status === 201) {
        console.log("Usuario autenticado con éxito:", response.data);
        const admin = response.data;
        login({
          user: admin.userName,
          token: admin.userType,
        });
      }
    } catch (error) {
      console.log('Nombre de usuario o contraseña incorrectos');
    }
  }
};

