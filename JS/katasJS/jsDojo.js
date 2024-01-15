// variable de tipo string

var myName = "Celia"

// "var" está en desuso, mejor declarar variables con let y const. let para variables cuyo valor va a cambiar, const para
// cuando no va a cambiar

let myName = "Celia"

// variable de tipo int

let numberA = 55

// variable de tipo booleano

let isItRaining = false

// en algunos casos se puede considerar que esta misma variable declarada con un 0

// let isItRaining = 0

// es también booleana, por ejemplo en contextos booleanos donde cualquier número que no sea 0 sería igual a true y 0 sería igual a false,
// pero en términos estrictos esta variable isItRaining no es booleana, es una variable de tipo numérico. Para valores booleanos mejor usar 
// true o false en las declaraciones.

// Sobre este asunto del contexto booleano:

// if(isItRaining = 0){
//     console.log("No está lloviendo")
// }

// La consola no imprime nada. Un signo igual asigna un valor a una variable, y en este caso no se cumple la condición de que el valor
// de la variable sea 0.

// if(isItRaining == 0){
//     console.log("No está lloviendo")
// }

// La consola imprime el texto, porque al aplicar la doble igualdad estamos haciendo una comparación sobre el tipo de dato que
// es cada elemento de la condición, no sobre el valor que tengan asignado .En un contexto booleano sí se trata del mismo tipo de dato,
// efectivamente isItRaining equivale a false o 0

// if(isItRaining === 0){
//     console.log("No está lloviendo")
// }

// De nuevo la consola no imprime nada, porque al aplicar la triple igualdad estamos comparando ambos elementos pero estrictamente,
// el valor de isItRaining debería ser un 0, y no lo es

// variable tipo array

let nameList = ["Blanca", "Yulia", "Lorena", "Anthony"]

let numbers = [1,54,2,3,5,12,65]

// cada elemento ocupa una posición dentro del array. La primera posición es siempre la 0.

// console.lot(nameList[1])

// ESto imprimiría en la consola "Yulia"

// variable tipo objeto, una colección de datos que pueden ser de distinto tipo, separados por comas.

let coche = {
    marca: "Toyota",
    tipo: "automático",
    colores:["rojo","negro","blanco"],
    precio: 15000,
    descuento: false

}


// console.log(coche.marca)

// esto imprimiría "Toyota" en la consola
