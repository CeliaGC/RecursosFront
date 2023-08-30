for (let x = 1; x <= 100; x++) {  
  let result = '';
  if(x % 3 == 0){
    result += 'Fizz';
  }
  if(x % 5 == 0){
    result += 'Buzz';
  }
  console.log(result || x);
}

/* Línea 1: Se inicia un bucle for. Establece una variable x con un valor 
inicial de 1 y ejecutará el bucle siempre que x sea menor o igual a 100. 
Después de cada iteración, se incrementa el valor de x en 1 (x++).

Línea 2: Aquí se crea una variable llamada result y se le asigna una 
cadena vacía como valor inicial. Esta variable se utilizará para construir 
la salida de cada número o palabra.

Línea 3 y 4: Esta línea verifica si el valor de x es divisible por 3 
(es decir, si el restode la división es 0). Si es cierto, agrega la 
palabra 'Fizz' a la variable result.

Línea 5 y 6: Esta línea verifica si el valor  de x es divisible por 5. 
Si es cierto, agrega la palabra 'Buzz' a la variable result.

Línea 9: Aquí, se utiliza console.log() para imprimir en la consola el 
valor de result. Si result es una cadena no vacía debido a las condiciones 
anteriores (es decir, si se concatenó 'Fizz' o 'Buzz' a ella), entonces se 
imprime el contenido de result. Si result sigue siendo una cadena vacía, 
se imprimirá simplemente el valor de x.

Строка 1: Запускается цикл for. Он устанавливает переменную x с начальным значением 
и цикл будет выполняться всякий раз, когда x будет меньше или равно 100. 
После каждой итерации значение x увеличивается на 1 (x++).

Строка 2: Здесь создается переменная result и в качестве начального значения ей присваивается пустая строка. 
пустую строку в качестве начального значения. Эта переменная будет использоваться для построения 
вывода каждого числа или слова.

Строки 3 и 4: В этой строке проверяется, делится ли значение x на 3 
(т.е. если остаток от деления равен 0). Если это так, то к результату прибавляется 
слово 'Fizz' в переменную result.

Строки 5 и 6: В этой строке проверяется, делится ли значение x на 5. 
Если верно, то в переменную result добавляется слово 'Buzz'.

Строка 9: Здесь console.log() используется для вывода на консоль значения 
значение результата. Если результат является непустой строкой в силу вышеприведенных условий (т.е. при конкатенации 
выше (т.е. если к ней было конкатенировано 'Fizz' или 'Buzz'), то выводится содержимое result. 
выводится содержимое result. Если результат по-прежнему является пустой строкой, 
то будет выведено просто значение x.
*/