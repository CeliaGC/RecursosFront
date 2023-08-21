import "../Style/WheelOfDoom.css"
import React, { useState } from 'react';


function WheelOfDoom() {
    const [clicked, setClicked] = useState(false);
    const [afortunado, setAfortunado] = useState("");
    const [count, setCount] = useState(0)
    const arrayNames = ["Anthony", "Brayan", "Antonio", "Rodrigo", "Rebeca", "Christian", "Raúl", "Yo", "Juan", "Miguel", "Isabel", "Celia", "Javi", "Laura A Secas", "Slava", "Fran", "Celia Prieto", "Gemma", "Ninguno jaja"]; // tu lista de nombres

    const handleClick = () => {
       
            setCount(count + 1)
            selector();
            setClicked(true);
        
    }

    function selector() {
        let result = Math.floor(Math.random() * arrayNames.length);
        setAfortunado(arrayNames[result]);
       
    }

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
 
        </div>
           
        </main>
    );
    
}

export {WheelOfDoom}

