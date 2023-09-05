const fizzbuzz = require('../src/index');

test('Si el número es divisible por 3 retorna Fizz', () =>{
  //given
  let number = 3;
  //when
  let result = fizzbuzz(number);
  //then
  expect(result).toBe("Fizz");
})

test('Si el número es divisible por 5 retorna Buzz', () =>{
  let number = 5;
  let result = fizzbuzz(number);
  expect(result).toBe("Buzz");
})

test('Si el número es divisible por 3 y 5 retorna FizzBuzz', () =>{
  let number = 15;
  let result = fizzbuzz(number);
  expect(result).toBe("FizzBuzz");
})

test('Si el número no es divisible ni por 3 y no por 5 retorna ese número', () =>{
  let number = 2;
  let result = fizzbuzz(number);
  expect(result).toBe(number);
})