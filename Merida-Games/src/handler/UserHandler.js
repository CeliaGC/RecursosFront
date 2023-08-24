import { UserService} from "../service/UserServices";

export const UserHandler = {

    addUser(newUser){
        // console.log(newProduct);
        if (!newUser) {
            return;
        }

        let userToAdd = {
            "id": "",
            "Name": newUser.Name,

        }
        return UserService.submitUser(userToAddToAdd);
    },

    loadUsers(){
        return UserService.getAllUsers();
    }
   
}

export default UserHandler