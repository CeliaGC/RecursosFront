// en handler realizamos la conexión de los datos con el componente que los va a renderizar en el navegador. Osea, desde el componente llamamos
// a handler que a su vez accede a service, que es el que accede a la base de datos. Podríamos prescindir de handler y llamar desde el 
// componente directamente a service? Sí, pero tener estas dos capas service/handler entre la base de datos y el componente responde a 
// principios de mantenibilidad, escalabilidad, reutilización... Si cambio de API, sólo tengo que hacer cambios en service, la importación
// de datos al componente sigue igual. Si cambio el componente, solo tengo que hacer cambios en handler, la API queda intacta.
// Si en service tengo tanto conexión a la base de datos como al componente, esa mantenibiidad y reutilización no
// sería tan sencilla. A pequeña escala podemos prescindir de handler, pero es una buena práctica usar esta capa y es la estructura que
// se suele utiliar en proyectos reales.

import { UserService} from "../service/UserServices";

export const UserHandler = {
// aquí tengo para cada método de service una función que le envía/pide los datos para llevarlos o traerlos al componente.
    addUser(newUser){
        // 
        if (!newUser) {
            return;
        }

        // aquí construyo el objeto con los datos de un nuevo usuario recogidos con un formulario en el componente para enviarlo al método
        // post de service. Seguimos hacia el componente WheelOfDoom

        let userToAdd = {
            "id": "",
            "Name": newUser.Name,

        }
        return UserService.submitUser(userToAdd);
    },

    loadUsers(){
        return UserService.getAllUsers();
    }
   
}

export default UserHandler