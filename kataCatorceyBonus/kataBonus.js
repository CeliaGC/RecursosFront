// Diseñe una función que, al ingresar un
// número, indique si es primo o no lo es.

// Разработайте функцию, которая при вводе 
// параметра число, укажите, простое оно или нет.

function primeNumber(num) { // Определение функции primeNumber: Функция принимает параметр num, который должен быть числом для проверки того, является ли оно простым или нет.
	if( num <= 1) { // Первоначальная проверка: Если число num меньше или равно 1, функция возвращает false. Это связано с тем, что простые числа по определению больше 1.
		return false;
	}
	for (i = 2; i < num; i++) // Цикл проверки primity: функция использует цикл for для итерации от 2 до num - 1. Каждое значение i сравнивается с числом num, чтобы проверить, является ли оно делителем числа.
  if (num % i === 0 ){ // Делимость: В цикле проверяется, равен ли остаток деления num % i 0. Если это так, то это означает, что num делится на i, что противоречит определению простого числа. В этом случае функция возвращает false.
    return false;
    }
  }
  return true;

const num = parseInt(prompt("Ingresa un número:"));
if (primeNumber(num)) {
  console.log(`${num} es un número primo.`);
}
else {
  console.log(`${num} no es un número primo.`);
}


/* Definición de la función primeNumber: La función toma un parámetro num, que se supone es el número que se va a verificar si es primo o no.
Verificación inicial: Si el número num es menor o igual a 1, la función retorna false. Esto es porque los números primos son mayores que 1 por definición.
Bucle de verificación de primalidad: La función utiliza un bucle for para iterar desde 2 hasta num - 1. Cada valor de i se compara con el número num para verificar si es un divisor de num.
Comprobación de divisibilidad: Dentro del bucle, se verifica si el residuo de la división num % i es igual a 0. Si esto es cierto, significa que num es divisible por i, lo que contradice la definición de un número primo. En este caso, la función retorna false.
Retorno de resultado: Si no se encontraron divisores en el rango de 2 a num - 1, la función retorna true, lo que significa que num es un número primo.
Solicitud de entrada: Después de definir la función, el programa solicita al usuario que ingrese un número utilizando el método prompt y lo almacena en la variable num.
Llamada a la función y salida: El programa llama a la función primeNumber pasando el valor de num. Dependiendo del resultado de la función, se muestra en la consola si el número es primo o no.
Salida en consola: Si la función devuelve true, el programa muestra que el número ingresado es primo. Si devuelve false, muestra que el número no es primo.
En resumen, el código verifica si un número dado por el usuario es primo o no utilizando una función y luego muestra el resultado en la consola.*/

/*Подсказка ввода: после определения функции программа предлагает пользователю ввести число, используя метод приглашения, и сохраняет его в переменной num.
Вызов функции и выход: программа вызывает функцию primeNumber, передавая значение num. В зависимости от результата работы функции на консоли отображается, является ли число простым или нет.
Вывод консоли: если функция возвращает true, программа показывает, что введенное число является простым. Если он возвращает false, это показывает, что число не является простым.
Короче говоря, код проверяет, является ли заданное пользователем число простым или нет, с помощью функции, а затем отображает результат в консоли.*/