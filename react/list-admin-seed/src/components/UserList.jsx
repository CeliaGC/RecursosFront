import { useState, useEffect } from "react";

const UserList = () =>{

    const [user, setUser] = useState('');
    const [userList, setUserList] = useState([]);

    function handleNameChange(e){

        setUser([e.target.value])
    };


    function handleAddUserToList() {

        setUserList(prevUserList => [...prevUserList, user])
        setUser('');

      }

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

