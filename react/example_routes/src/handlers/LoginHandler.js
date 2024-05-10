import { LoginService } from "../services/LoginService"

export const LoginHandler = {

    userLogin(username, password) {

       
              return LoginService.submitLogin(username,password)

          }

    
    

}