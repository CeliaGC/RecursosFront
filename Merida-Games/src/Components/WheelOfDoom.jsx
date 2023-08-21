import "../Style/WheelOfDoom.css"
import React, { useState } from 'react';

function WheelOfDoom() {

    // Estaba replicando la kata Wheel-of-doom en un componente de react y por alguna razón al cargar la página se ejecutaba directamente 
    //la función "selector", la que elige al candidato del array de participantes, sin que yo cliclara el botón que la activa.
    // Por qué sucedía esto? No llegué a averiguarlo, seguramente existía el modo de que no sucediera este error en algún punto y coma 
    //puesto aquí o allá, pero en StackOverflow alguien proponía que me asegure de que la función esté inactiva creando un estado true/false
    //con el hook useState. Y como no tenía más ganas de seguir investigando y esto nos viene bien ahora, me puse a implementarlo.

    //useState declara un estado predeterminado en una variable, estado que puede cambiar. Su sintaxis es:
    
    const [clicked, setClicked] = useState(false);

    // donde clicked es la variable, setClicked es una función para cambiar el estado de la variable y useState(false) es el estado
    //predeterminado de la variable. Al cargar el componente, la página, clicked está por defecto en "false". "clicked" es una palabra
    //aleatoria, podría ser cualquier cosa. Ese estado puede ser un booleano como en este caso, un string, un array, un número, etc

    //Ahora tengo aquí mi array de participantes y un h3 que contentrá el nombre del ganador.
    const arrayNames = ["Anthony", "Brayan", "Antonio", "Rodrigo", "Rebeca", "Christian", "Raúl", "Yo", "Juan", "Miguel", "Isabel", "Celia", "Javi", "Laura A Secas", "Slava", "Fran", "Celia Prieto", "Gemma", "Ninguno jaja"];
    const paragraph = document.createElement('h3');

    //como podeís ver en el return, al clicar el botón se ejecuta esta función handleClik, que a su vez lo que hace es usar la función setClicked
    //para cambiar el estdo de clicked a true. Luego mediante un condicional, me aseguro de que sólo si setClicked es true, lo cual implica
    //haber clicado el botón, se ejecute selector(arrayNames), que mediante el DOM crea una serie de elementos que hacen aparecer el bocadillo 
    //de texto con el Brishante afortunado que será condenado a trabajos forzados de píldora o a tener que hablar en público.

    const handleClik = () => {

        setClicked(true)
        if (setClicked){
            selector(arrayNames) 
        
    } 
}

    function selector(arrayNames){
        
        const globo = document.createElement('div');

        globo.className = 'div-result'
        const body = document.getElementsByTagName('body');
        document.body.appendChild(globo);


        let result = Math.floor(Math.random() * arrayNames.length);
        let afortunado = arrayNames[result];
        console.log(arrayNames[result]);
        paragraph.innerHTML = `El Brishante afortunado esssss<br>` + afortunado;
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

//No obstante, este no es un uso adecuado ni de useState ni de React por varias razones:

//En primer lugar, useState es en cierto modo innecesario, no debería necesitarlo para que funcione un botón, eso ha sido un parche a un problema de otra
//naturaleza (naturaleza que no tuve más ganas de investigar, era domingo en la tarde). Sería más adecuado usarlo para definir distintos
//estados de cosas para cuando la variable es true y para cuando es false.

//En segundo lugar, en React no se usa DOM. DOM es imperativo, dicta cosa por cosa todo lo que va a cambiar en el HTML (elementos que se van
//introducir o modificar) y para actualizar estos cambios lee y actualiza el árbol de nodos HTML al completo. Eso es cargante, costoso, 
//paleto, de perdedores.

//React es declarativo, declara cómo quiere que se vea la página y cuando algo cambia en el árbol de nodos, solo lee y actualiza eso que 
//ha cambiado, no todo el HTML. I mean:

// const globo = document.createElement('div');

// globo.className = 'div-result'
// const body = document.getElementsByTagName('body');
// document.body.appendChild(globo);


// let result = Math.floor(Math.random() * arrayNames.length);
// let afortunado = arrayNames[result];
// console.log(arrayNames[result]);
// paragraph.innerHTML = `El Brishante afortunado esssss<br>` + afortunado;
// globo.appendChild(paragraph);

//todo ese código se carga una y otra vez, teniendo además que leer el árbol de nodos y reescribirlo entero con los cambios, cuando lo único
//que cambia es un nombre. Pero qué somos, animales??

//En la rama dev-merida-games vamos a ver estos malos usos corregidos y algún ejemplo más de useState