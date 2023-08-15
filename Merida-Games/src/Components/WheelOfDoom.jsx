import "../Style/WheelOfDoom.css"
import React, { useState } from 'react';

function WheelOfDoom() {
    const [clicked, setClicked] = useState(false);
    const arrayNames = ["Anthony", "Brayan", "Antonio", "Rodrigo", "Rebeca", "Christian", "Raúl", "Yo", "Juan", "Miguel", "Isabel", "Celia", "Javi", "Laura A Secas", "Slava", "Fran", "Celia Prieto", "Gemma", "Ninguno jaja"];
    const paragraph = document.createElement('h3');


    const handleClik = () => {
        
        selector(arrayNames) 
        setClicked = true
    }

    function selector(arrayNames){
        
        const globo = document.createElement('div');

        globo.className = 'div-result'
        const body = document.getElementsByTagName('body');
        document.body.appendChild(globo);


        let result = Math.floor(Math.random() * arrayNames.length);
        let afortunado = arrayNames[result];
        console.log(arrayNames[result]);
        paragraph.innerText = 'El Brishante afortunado esssss ' + afortunado;
        globo.appendChild(paragraph);

    }


    return(

    <>
    <main id="background">
        <button id="button" onClick={handleClik}>
            Start
        </button>
        
    </main>
    </>
    )
}

export {WheelOfDoom}