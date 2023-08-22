import "../Style/WheelOfDoom.css"
import React, { useState } from 'react';


function WheelOfDoom() {
    const [clicked, setClicked] = useState(false);
    //Este es el mismo useState que hemos visto en la rama main, el que declara un estado false o true dependiendo de si hemos clicado o no el botón
    // Это тот же useState, который мы видели в главной ветке, он объявляет состояние false или true в зависимости от того, нажали мы кнопку или нет.
    const [afortunado, setAfortunado] = useState("");
    //En esta ocasión, el resultado del sorteo lo he guardado en un estado, en una variable "afortunado" cuyo estado inicial es un strign
    // que se actualizará con el resultado del método random que elige un nombre al azar.
    // На этот раз результат розыгрыша я сохранил в состоянии, в переменной "afortunado", начальное состояние которой — это строка,
// которая будет обновляться результатом метода random, выбирающего случайное имя.
    const [count, setCount] = useState(0)
    //También he añadido esta variable para hacer un contador. El estado inicial de la variable "count" empieza en 0 e irá sumando 1 cada 
    // vez que haga click
    // Я также добавил эту переменную для создания счетчика. Начальное состояние переменной "count" равно 0 и будет увеличиваться на 1 
// каждый раз при нажатии кнопки.
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

    //En este caso, en la función selector solamente defino cómo se actualiza el estado de "afortunado" y en el return "describo" directamente
    //qué va a renderizar el componente, aprovechando en un condicional los estados true o false para determinar dos renderizados distintos
    //según el estado de clicked sea uno u otro. 
    // В этом случае, в функции selector я только определяю, как обновляется состояние "afortunado", и в return напрямую "описываю",
    // что будет отображать компонент, используя условное выражение для определения двух разных видов отображения
    // в зависимости от того, является ли состояние clicked true или false.

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

    //El brishante afortunado es <br></br> {clicked ? afortunado : "..."} >>>>>> Ahora, en lugar de leer todo el DOM y reescribirlo entero
    //para introducir el único cambio que es el el contenido de "afortunado", React hace una copia virtual del DOM y sólo lee y actualiza 
    //esa variable "afortunado" en el nodo h3 cuando una vez que hayamos clicado el botón. Ese signo de interrogación es una forma 
    //de escribir un condicional. Si clicked es false, se renderiza el texto con los puntos suspensivos, si es true, vemos el texto
    //y se sustituyen los puntos suspensivos con el nombre del ganador.
    
    // Удачливый "brishante" это <br></br> {clicked ? afortunado : "..."} >>>>>> Теперь, вместо чтения всего DOM и его полной перезаписи
    // чтобы внести единственное изменение, которое является содержанием "afortunado", React создает виртуальную копию DOM и только читает и обновляет
    // эту переменную "afortunado" в узле h3 после того, как мы нажали на кнопку. Этот вопросительный знак - это способ
    // записи условного оператора. Если clicked false, текст отображается с многоточием, если true, мы видим текст,
    // и многоточие заменяется именем победителя.

    //Ese condicional también podría verse así, con dos return distintos
    // Этот условный оператор также может выглядеть так, с двумя разными return:
    
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

// Но я думаю, что все мы должны стать на колени и благодарить этот ультра-краткий способ записи условного оператора.
// Мы даже могли бы обняться, плача.
// И в конце концов, это был бы реактивный способ сделать то же самое, что мы сделали в главной ветке.


