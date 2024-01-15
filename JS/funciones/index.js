//Crear una función que al pulsar un botón de "Comprar" aparezca un mensaje tipo "Gracias por su compra"
//Diferentes formas de declararla. Comenta y descomenta lo que sea necesario para compilar adecuadamente.
//Sustituye o comenta el botón en el html cuando sea necesario. El código del repositorio descargado ejecuta la última función.

// Función declarativa. La invocación a la función estaría en el onclick del tag button en index.html
{/* <button onclick="sayThanks()">Buy Now</button> */}

// function sayThanks(){

//     let greetingMsg = document.getElementById('greetingText');
//     greetingMsg.textContent = "Gracias por su compra";
// };


// La misma función con parámetros e invocada con argumentos.
// La variable está declarada globalmente, fuera de la función, para que sea accesible en la invocación
//Al invocarla en el botón pasaríamos el argumento a la función, en este caso la variable global text :
{/* <button onclick="sayThanks(text)">Buy Now</button> */}


let text="Gracias por su compra";
// function sayThanks(thanksText){

//     let greetingMsg = document.getElementById('greetingText');
//     greetingMsg.textContent = thanksText;
// };

//la función anterior, ahora autoejecutable. Ya no sería necesario hacer click en el botón, sería una función
//que se ejecutaría al cargar la página. Usamos como argumento la misma variable declarada en la línea 19

// (function sayThanks(thanksText){

//     let greetingMsg = document.getElementById('greetingText');
//     greetingMsg.textContent = thanksText;
// })(text);

// la declaramos ahora como expresión de una variable, tanto declarativa como arrow function

// const sayThanks = function(thanksText) {

//     let greetingMsg = document.getElementById('greetingText');
//     greetingMsg.textContent = thanksText;
// }

// const sayThanks = (thanksText )=> {

//     let greetingMsg = document.getElementById('greetingText');
//     greetingMsg.textContent = thanksText;
// }

// Para ambos casos usamos el botón con la invocación y el argumento

{/* <button onclick="sayThanks(text)">Buy Now</button> */}

//Ahora un ejemplo de uso de return para obtener un retorno y usarlo en otra función para un condicional
//sayThanks va a retornar una incremento de una cifra en un contador de ventas que declaramos globalmente en 0

// let count= 0

// const sayThanks = (thanksText) => {

//     let greetingMsg = document.getElementById('greetingText');
//     greetingMsg.textContent = thanksText
//     return count += 1
// };

//usamos el return de sayThanks para imprimir un texto sobre las ventas realizadas a partir de 5 ventas

// function purchaseCount(){
//     let countText = document.getElementById("countText");
//     if(count >= 5){
//         countText.textContent = count + " items sold"
//     }

// };

//en el onclick ahora invocamos esta función handlePurchase(), que explicita el orden en que se ejecutan las funciones. LLama a sayThanks()
// y una vez actualizado el contador llama a purchaseCount(), pues de otro modo
// purchaseCount() nunca recibiría el contador acutalizado y no imprimiría el mensaje.

{/* <button onclick="handlePurchase()">Buy Now</button> */}

// function handlePurchase(){
//     sayThanks(text);
//     purchaseCount();
// };

// Pregunta: cómo podríamos haber declarado greetingMsg una sola vez para reutilizarlo en todas las funciones y así ahorrar código?
// El último es un ejemplo de para qué sirve un return, pero el ejemplo no es correcto. De hecho, si borramos la palabra return, el 
// condicional se sigue ejecutando porque la variable count, que es global, se seguiría actualizando. Vamos a ver un ejemplo algo más 
// complejo pero adecuado:
let count = 0;

const sayThanks = (thanksText) => {
    let greetingMsg = document.getElementById('greetingText');
    greetingMsg.textContent = thanksText;
    // damos la instrucción de sumar un incremento en el contador
    count += 1;

    // a continuación usamos un condicional para que, alcanzado el 5, la función retorne cierto aviso. No es un aviso que veremos 
    // impreso en pantalla, ni siquiera en consola, solo existe a nivel lógico. En un debugueo sí podríamos constatarlo
    if (count >= 5) {
        return "limitReached";
    }

    // mientras no se cumpla la condición, el return será el contador actualizado sin más
    return count;
};

function purchaseCount() {
    let countText = document.getElementById("countText");

    // ahora verificamos si el retorno de sayThanks es "limitReached" 
    if (sayThanks(text) === "limitReached") {
        countText.textContent = count + " items sold";
    }
};

function handlePurchase() {
    // Ahora aquí no llamamos a sayThanks, sino que purchaseCount() al ejecutarse y comprobar si el return de sayThanks()
    // es igual a "limitedREached" se encarga al también de invocarla y que se ejecute.
    // Ingeniería!! Magia negra!! Compruébalo en el debugueador.
    purchaseCount();
};
