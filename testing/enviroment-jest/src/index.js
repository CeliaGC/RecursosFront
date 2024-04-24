
function fizzBuzz(){
    
    for(let i = 0; i<=number.length; i++){

    if(i % 15 === 0){
        return ("fizzBuzz")
    }

    
    if(i % 3 === 0 ){

        return ("fizz")
    }

    if(i % 5 === 0){
        return ("buzz")
    }
    console.log(i);
    return i;
    
    }
   
    }

    let numbers = [];

    for (let i = 1; i<=100; i++){
   
    numbers.push(i)

    }

fizzBuzz(numbers);

// export default fizzBuzz;