import "../Style/WheelOfDoom.css"
import React, { useState } from 'react';


function WheelOfDoomTrue() {
    const [clicked, setClicked] = useState(false);
    //Este es el mismo useState que hemos visto en la rama main, el que declara un estado false o true dependiendo de si hemos clicado o no el botón
    const [afortunado, setAfortunado] = useState("");
    //En esta ocasión, el resultado del sorteo lo he guardado en un estado, en una variable "afortunado" cuyo estado inicial es un strign
    // que se actualizará con el resultado del método random que elige un nombre al azar.

    const [count, setCount] = useState(0)
    //También he añadido esta variable para hacer un contador. El estado inicial de la variable "count" empieza en 0 e irá sumando 1 cada 
    // vez que haga click

    const arrayNames = ["Ana","Angy","Blanca","Carito","Clara","Claudia","Elisa","Elle","Esty","Gaby","Hache","Faby","Inés","Kira","Lidia","Lorena","Lorena","María","Mercedes","Pily","Stefy","Yamila","Yulia","Yulia","Sandra",]; // tu lista de nombres

    const handleClick = () => {
       
            setCount(count + 1)
            selector();
            setClicked(true);
        
    }

    function selector() {
        let result = Math.floor(Math.random() * arrayNames.length);
        setAfortunado(arrayNames[result]);
       
    }

    //En este caso, en la función selector solamente defino cómo se actualiza el estado de "afortunado" y en el return "describo" directamente
    //qué va a renderizar el componente, aprovechando en un condicional los estados true o false para determinar dos renderizados distintos
    //según el estado de clicked sea uno u otro. 
   
    return (
        <main id="background">
            <button id="button" onClick={handleClick}>
                Start
            </button>
            <div className="div-result" >
                <h3>
                La leona afortunada es <br></br> {clicked ? afortunado : "..."}            
                </h3> 
            </div>
            <div>
            <p>You clicked {count} times</p>
 
        </div>
           
        </main>
    );

}

export {WheelOfDoomTrue}

    //El brishante afortunado es <br></br> {clicked ? afortunado : "..."} >>>>>> Ahora, en lugar de leer todo el DOM y reescribirlo entero
    //para introducir el único cambio que es el el contenido de "afortunado", React hace una copia virtual del DOM y sólo lee y actualiza 
    //esa variable "afortunado" en el nodo h3 cuando una vez que hayamos clicado el botón. Ese signo de interrogación es una forma 
    //de escribir un condicional. Si clicked es false, se renderiza el texto con los puntos suspensivos, si es true, vemos el texto
    //y se sustituyen los puntos suspensivos con el nombre del ganador.
    
    

    //Ese condicional también podría verse así, con dos return distintos
    
    // if (!clicked){

    //     return(

    //         <main id="background">
    //                  <button id="button" onClick={handleClick}>
    //                      Start
    //                  </button>
    //                  <div className="div-result" >
    //                      <h3>
    //                      El brishante afortunado es <br></br>...          
    //                      </h3> 
    //                  </div>
    //                  <div>
    //                  <p>You clicked {count} times</p>
    
    //              </div>
             
    //              </main>

    //     )

    // } else {
    //     return (

    //         <main id="background">
    //         <button id="button" onClick={handleClick}>
    //             Start
    //         </button>
    //         <div className="div-result" >
    //             <h3>
    //             El brishante afortunado es <br></br>{afortunado}          
    //             </h3> 
    //         </div>
    //         <div>
    //         <p>You clicked {count} times</p>

    //     </div>
    
    //     </main>
    //     )
    // }

//Pero yo creo que todos deberíamos hincarnos de rodillas y alabar esa forma súper resumida de escribir un condicional.
//Incluso podríamos abrazarnos llorando.
//Y en definitiva, esta sería la forma reactónica de hacer lo mismo que hicimos en la rama main: declarativo y no imperativo
// y jugando, dando a esos dos estados true o false que nos permite declarar useState en la variable clicked para definir
//distintos resultados en el navegador.



//borra el import del componente WheelOfDoom en App e importa este componente en su lugar para ver cómo se renderiza este 
//WheelOfDoomTrue con un sorteo entre participantes malagueñas.

