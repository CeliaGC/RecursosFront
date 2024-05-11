import { LoginService } from "../services/LoginService"

export const LoginHandler = {

   userLogin(userName, userPassword) {

        const userAdmin =
        {
            'userName': userName,
            'userPassword': userPassword,
            'userType' : 'admin'
        }

       
              return LoginService.submitLogin(userAdmin)
              
          }

    

}
