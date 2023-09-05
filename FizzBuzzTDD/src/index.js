function fizzbuzz(number){
  //if(number % 3 === 0 && number % 5 === 0){
    //refactorizar
  if(number % 15 === 0){
    return("FizzBuzz");
  }

  if(number % 3 === 0){
    return("Fizz");
  }
  
  if(number % 5 === 0){
    return("Buzz");
  }

  return(number);
  //return("Fizz");
  //return("Buzz");
}

module.exports = fizzbuzz;