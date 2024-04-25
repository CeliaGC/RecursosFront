import fizzBuzz from "../src";


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

test('devuelve números del 1 al 100 con las condiciones anteriores',()=>{

    let numbers = Array.from({length: 100}, (_, i) => i + 1);
  

    let result = fizzBuzz(numbers);
    

    expect(result).toMatchSnapshot();

})





