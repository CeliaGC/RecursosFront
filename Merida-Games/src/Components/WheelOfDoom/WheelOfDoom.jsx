import UserHandler from "../../handler/userHandler";
import "../wheelOfDoom/WheelOfDoom.css"
import React, { useState, useEffect } from 'react';


function WheelOfDoom() {
    const [clicked, setClicked] = useState(false);
    const [afortunado, setAfortunado] = useState("");
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState([])

    const arrayNames = ["Anthony", "Brayan", "Antonio", "Rodrigo", "Rebeca", "Christian", "Raúl", "Yo", "Juan", "Miguel", "Isabel", "Celia", "Javi", "Laura A Secas", "Slava", "Fran", "Celia Prieto", "Gemma", "Ninguno jaja"]; // tu lista de nombres

    // useEffect impide que la carga de los datos entre en un bucle infinito
    useEffect(() => {
        getData();
      }, []);
    
    const handleClick = () => {
       
            setCount(count + 1)
            selector();
            setClicked(true);
        
    }

    function selector() {
        let result = Math.floor(Math.random() * arrayNames.length);
        setAfortunado(arrayNames[result]);
       
    }

    const getData = async () => {
        const data = await UserHandler.loadUsers();
        setUsers(data);
      };

    //   getData();

    return (
        <main id="background">
            <button id="button" onClick={handleClick}>
                Start
            </button>
            <div className="div-result" >
                <h3>
                El brishante afortunado es <br></br> {clicked ? afortunado : "..."}            
                </h3> 
            </div>
            <div>
            <p>You clicked {count} times</p>

            {users.map(u => (
                <div id="user" key={u.id}>{u.Name}</div>
            ))}
        

           
 
        </div>
           
        </main>
    );

}

export {WheelOfDoom}





