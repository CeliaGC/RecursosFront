import { useState, useEffect } from "react";
import { UserService } from "../userService";

const UserList = () =>{

    const [user, setUser] = useState(
        //así queda un registro de usuario que consta de dos datos string en lugar de uno solo. Antes teníamos un strint, ahora
        //tenemos un objeto con dos propiedades, que son un string cada uno. Lo inicializamos vacío porque los datos vienen 
        //desde el frontend. Obvioooooo
        {
            userName: "",
            userSurname: ""
        }
        );

    //Antes enviabamos aquí los usuarios desde el botón del formulario. Ahora no. Ahora esos usuarios se almacenan directamente
    //en nuestro archivo json. Ahora esta variable se usa para cargar esos datos almacenados en el json
    const [userList, setUserList] = useState([]);

    //esta es la función que carga los datos almacenados en el json
    async function getData(){
        //accedo a UserService, en concreto a su métod GET. Como este método al ejecutarse retorna los datos de los usuarios,
        //lo que almaceno en la variable users son esos datos.
        let users = await UserService.getAllUsers();

        //ahora actualizo el estado de userList con esta variable (usuarios)
        setUserList(users)  


    }

    //LLamo a getData() Si no los datos no vienen nunca!!!!

    getData();

    function handleNameChange(e){

        
        setUser({...user, [e.target.name]:e.target.value})
    };



    async function handleAddUserToList() {

        //aquí hay que sustuir este envío de usuarios al array userList por el envío al archivo json accediendo a un método
        //POST que definamos en userService
        
    

        //de regalito: el reset del formulario y por tanto de la variable user una vez enviados los datos
        setUser({
            userName: "",
            userSurname: ""
        });

      }

    return(

        <>
        <h1>Qué lista eres</h1>

{/* hemos añadido  otro input y otro label. Al escribir, cada uno actualiza una propiedad del objeto user*/}
        <label htmlFor="userName"></label>
        <input type="text" name="userName" value={user.userName} onChange={handleNameChange}/>

        <label htmlFor="userSurname"></label>
        <input type="text" name="userSurname" value={user.userSurname} onChange={handleNameChange}/>

        <button onClick={handleAddUserToList}>Añadir usuario</button>
        <ul>

{/* antes, como userList era un array de strings, después del map solo teníamos que imprimir la variable "user",
ahora user es un objeto, para imprimir la información accedo a cada una de las propiedades por separado (dentro del map) */}
        {
            userList.map((user, index)=>(
                <li key={index}> {user.userName} {user.userSurname} </li>
            ))
        }
        </ul>
        </>
        
    )
}

export default UserList;

