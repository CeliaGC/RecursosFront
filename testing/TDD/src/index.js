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
