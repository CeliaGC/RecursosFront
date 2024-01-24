//PINTAR UNA LISTA DE USUARIOS EN LA WEB

//Yo como usuario quiero generar una lista de participantes en un evento
//Yo como usuario quiero un campo donde escribir un nombre
//Yo como ususario quiero un botón que añada el el nombre a una lista
//Yo como usuario quiero ver una lista numerada con los participantes que voy añadiendo

// Manejo de eventos: onchange
// Hooks: useState
// Métodos: .map()

import { useState, useEffect } from "react";

const UserList = () =>{

    const [user, setUser] = useState('');
    const [userList, setUserList] = useState([]);

    function handleNameChange(e){
        setUser([e.target.value])
    };

    // function handleAddUserToList () {

    //     setUser(''); 
    //     // setUserList(...userList, ...user);
    //     setUserList(prevUserList => [...prevUserList, ...user]); 
    //     console.log(userList); 
    

    // };

    function handleAddUserToList() {
        setUserList(prevUserList => [...prevUserList, user], () => {
        //   console.log(userList);
        });
        setUser('');
      }
         console.log(userList);

    //   useEffect(()=>{
    //     console.log(userList)
    //   },[userList,])

    return(
        <>
        <h1>Qué lista eres</h1>

        <label htmlFor="userName"></label>
        <input type="text" name="userName" value={user} onChange={handleNameChange}/>

        <button onClick={handleAddUserToList}>Añadir usuario</button>
        <ul>
        {
            userList.map((user, index)=>(
                <li key={index}> {user} </li>
            ))
        }
        </ul>
        </>
        
    )
}

export default UserList;


