import fizzBuzz from "../src";

//los tres primeros test pasan los tres primeros casos del readme con esta sencilla función

// (en index.js)

//function fizzBuzz(number){
    // if (number % 15 === 0) {
    //     return 'fizzBuzz';
    // } else if (number % 3 === 0) {
    //     return 'fizz';
    // } else if (number % 5 === 0) {
    //     return 'buzz';
    // }
// }

// Los test entregan como argumento a fizzBuzz el número que espera recibir, que es solo uno.


//qué pasa entonces con el cuarto caso? hay que pasar los números del 1 al 100... number no puede ser un solo número!
//habrá que construir el test en el que pasemos a number un array de números, y hay que modificar la función anterior 
//para que opere de forma distinta según ese number que recibe por parámetro sea un número o un array de números.
//Ve al index.js y sigue leyendo allí los comentarios

test('devuelve fizz si es divisible entre 3', () => {
 //Arrange
let number = 3;

//Act
let result = fizzBuzz(number);

//Assert
expect(result).toBe("fizz");

});

test('devuelve buzz si el número es divisible entre 5', ()=> {
    let number = 5;

    let result = fizzBuzz(number);
    
    expect(result).toBeTruthy();
    expect(result).toBe("buzz");
});

test('devuelve buzz si el número es divisible entre 5', ()=> {
    let number = 15;

    let result = fizzBuzz(number);
    
    expect(result).toBeTruthy();
    expect(result).toBe("fizzBuzz");
});


test('devuelve números del 1 al 15 con las condiciones anteriores',()=>{

    let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    

    let result = fizzBuzz(numbers);
    
        // expect(result).toBe([ 1,
        //     2,
        //     "fizz",
        //     4,
        //     "buzz",
        //     "fizz",
        //     7,
        //     8,
        //     "fizz",
        //     "buzz",
        //     11,
        //     "fizz",
        //     13,
        //     14,
        //     "fizzBuzz"])

    expect(result).toEqual([ 
        1,
        2,
        "fizz",
        4,
        "buzz",
        "fizz",
        7,
        8,
        "fizz",
        "buzz",
        11,
        "fizz",
        13,
        14,
        "fizzBuzz"])
});


test('devuelve números del 1 al 100 con las condiciones anteriores',()=>{

// Como ves, uso una forma muy elegante de crear el array de números, en lugar de esa otra forma de hacerlo que está comentada, mucho más
// rudimentaria.
// Y en lugar de escribir en el expect cómo espero recibir ese array del 1 al 100, uso un snapshot. Esto crea en un archivo .snap una 
// instantánea el resultado de ejecutar la función y la guarda una carpeta __snapshots__ al tiempo que corre el test. Luego la usa para
// comparar el resultado esperado con la instantánea. Entonces corro el test, veo la instantánea, compruebo que es lo que quiero y vuelvo
// a correr el test. Luz verdeeeee kata fizzBuzz TDD superada. 

    // let numbers = [];
    // for (let index = 1; index < 100; index++) {
    //     numbers.push(index);
        
    // }

    let numbers = Array.from({length: 100}, (_, i) => i + 1);
  

    let result = fizzBuzz(numbers);
    

    expect(result).toMatchSnapshot();
    

});








