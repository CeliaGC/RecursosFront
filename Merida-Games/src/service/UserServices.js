import axios from "axios";

 const apiClient = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})


export const UserService = {
// Esto es equivalente a declarar la función y exportarla en una sola línea 

async getAllUsers() {
    let response = await apiClient.get("/Users");
    let allUsers = response.data;
    return allUsers;
},

    async submit(newUser){
      await apiClient.post("/Users", newUser)
    },

}