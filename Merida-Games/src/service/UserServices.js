// en este archivo "service", se establece la conexión con los datos, es decir con el localhost al que llegan las solicitudes de datos
// que he guardado en el archivo users.json. hay que importar axios (previa instalación) y determinar cómo se termina de construir la ruta
// para cada método. Este service está siendo exportado, por lo que luego, al importarlo en handler, tendremos acceso a los métodos que
// hemos definido, en este caso un get y un post. Seguimos hacia el archivo handler

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

// En los parámetros se incluye tanto la ruta de la tabla con la que estamos interactuando como otros elementos como objetos que
//vayamos a introducir o modificar

}