// import { LoginService } from "../services/LoginService"

// export const LoginHandler = {

//    userLogin(userName, userPassword) {

//         const userAdmin =
//         {
//             'userName': userName,
//             'userPassword': userPassword,
//             'userType' : 'admin'
//         }

       
//               return LoginService.submitLogin(userAdmin)
              
//           }

    

// }
import { LoginService } from '../services/LoginService';

export const LoginHandler = {
  userLogin: async (userName, password, login) => {
    const userAdmin = {
      userName,
      password,
      userType: 'admin'  // Añadir userType al objeto
    };

    // Llamar a LoginService para manejar el login
    await LoginService.submitLogin(userAdmin, login);
  }
};

  