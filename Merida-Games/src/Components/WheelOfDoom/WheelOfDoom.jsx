import UserHandler from "../../handler/userHandler";
import "../wheelOfDoom/WheelOfDoom.css"
import React, { useState, useEffect, useForm } from 'react';

// en la función getdata llamo a handler para cargar la lista de participantes en el sorteo 

function WheelOfDoom() {
    const [clicked, setClicked] = useState(false);
    const [afortunado, setAfortunado] = useState("");
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState([])


    // const arrayNames = ["Anthony", "Brayan", "Antonio", "Rodrigo", "Rebeca", "Christian", "Raúl", "Yo", "Juan", "Miguel", "Isabel", "Celia", "Javi", "Laura A Secas", "Slava", "Fran", "Celia Prieto", "Gemma", "Ninguno jaja"]; // tu lista de nombres

    // useEffect es un hook que encapsula a getData() porque esto impide que la carga de los datos entre en un bucle infinito
    // ahora faltaría crear un formulario y usar un hook, useForm, con una función handleSubmit, para recoger esos datos y llamar a handler para acceder a la función
    // submit, que da la orden a service para ejecutar un post y le pasa el objeto que se va a insertar en la tabla de usuarios. Lo dejo 
    //para que investiguéis y practiquéis con este repositorio averiguando cómo resolver este último paso
    useEffect(() => {

        getData();

      }, []);
    
    const handleClick = () => {
       
            setCount(count + 1)
            selector();
            setClicked(true);
        
    }


    function selector() {
        let result = Math.floor(Math.random() * users.length);
        setAfortunado(users[result].Name);
       
    }

    const getData = async () => {
        const data = await UserHandler.loadUsers();
        setUsers(data);
      };

   

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
                <div id="user" key={u.id}><h3>{u.Name}</h3></div>
            ))}
        
            
           
 
        </div>
           
        </main>
    );

}

export {WheelOfDoom}





