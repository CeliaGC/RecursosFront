import fizzBuzz from "../src";

//los tres primeros test pasan los tres primeros casos del readme, pues entregan como argumento a fizzBuzz un solo número


//qué pasa entonces con el cuarto caso? hay que pasar los números del 1 al 100... number no puede ser un solo número!
//habrá que construir el test en el que pasemos a number un array de números, y 

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

        // expect(result).toEqual([ 1,
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
});


test('devuelve números del 1 al 100 con las condiciones anteriores',()=>{

    // let numbers = [];
    // for (let index = 1; index < 100; index++) {
    //     numbers.push(index);
        
    // }

    let numbers = Array.from({length: 100}, (_, i) => i + 1);
  

    let result = fizzBuzz(numbers);
    

    expect(result).toMatchSnapshot();
    

});








