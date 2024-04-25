// Espera no empieces a leer aquí, empieza por la línea 41.


// La función queda así. Ahora en la condición comparo directamente qué tipo de dato es number.
// Además, decidí usar una variable result que declaro sin tipo ni valor para redeclararla en cada caso como convenga.
// Si number es array, resutl es un array al que voy empujando lo que corresponda a cada elemento cuando recorro number.
// Si es número solo, result será en cada caso lo que toque. 
// Esto ya funciona para números 1...15, pero tengo que hacerlo con cien. Vuelve al test, línea 100, para ver còmo me las apaño.

function fizzBuzz(number) {
    let result;

    if (Array.isArray(number)) {
        result = [];
        number.forEach(n => {
            if (n % 15 === 0) {
                result.push('fizzBuzz');
            } else if (n % 3 === 0) {
                result.push('fizz');
            } else if (n % 5 === 0) {
                result.push('buzz');
            } else {
                result.push(n);
            }
        });
    } else if (typeof number === 'number') {
        if (number % 15 === 0) {
            result = 'fizzBuzz';
        } else if (number % 3 === 0) {
            result = 'fizz';
        } else if (number % 5 === 0) {
            result = 'buzz';
        }
    }

    return result;
}

export default fizzBuzz;

//En un primer (y valiente) intento de resolver el asunto sin internet, me propuse probar con números del 1 al 15 y usé un switch para que:

// - en el caso de que number sea array, lo recorro y aplico a cada elemento los condicionales que lo transforman en string o lo dejan tal cual
// - en el caso de que number sea un número solo, repito la operación de transformarlo o no con los condicionales.

//después retorno number y listo

// function fizzBuzz(number){

// let result;
// switch(number){
    
//     case number.length > 1 :

//         number.forEach(n => {
           

//             if(n % 15 === 0){

//                 n = 'fizzBuzz'    }
        
            
//             if(n % 3 === 0 ){
                
//                 n = 'fizz'
            
//             }
        
//             if(n % 5 === 0){

//                 n = 'buzz'
                
//             }

//             if(n % 5 || 3|| 15 === 0)

//                 n = n
            
//         });
            
//     break;

//     case number.lenght ===1:

//     if(number % 15 === 0){

//         number = 'fizzBuzz'
//     }

//     if(number % 3 === 0 ){
        
//         number = 'fizz'
//     }

//     if(number % 5 === 0){

//         number = 'buzz'
//     }

// }

//     return number
        
// }

// export default fizzBuzz;


//Muy lindo pero no funciona, porque switch solo se una para una igualdad estricta, no para comparar. No  pasa ningún test
//porque number entra igual que sale. Descomenta y prueba. La consola lo dice así:

// /● devuelve números del 1 al 15 con las condiciones anteriores

// expect(received).toEqual(expected) // deep equality

// - Expected  - 7
// + Received  + 7

//   Array [
//     1,
//     2,
// -   "fizz",
// +   3,
//     4,
// -   "buzz",
// -   "fizz",
// +   5,
// +   6,
//     7,
//     8,
// -   "fizz",
// -   "buzz",
// +   9,
// +   10,
//     11,
// -   "fizz",
// +   12,
//     13,
//     14,
// -   "fizzBuzz",
// +   15,
//   ]

// Pone en rojo (+) lo que ha recibido y en verde (-)lo que esperaba
// Así que Chat (ya valió, ya uso internet) dice que tengo que usar también condicionales para detectar si number es array
// o solo un número. Ahora sí vete a la línea 4

