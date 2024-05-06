Ejercicio: Palíndromo
Escribe una función llamada esPalindromo que reciba una cadena de texto como parámetro y
determine si es un palíndromo. Un palíndromo es una palabra, frase o secuencia que se lee igual
de izquierda a derecha que de derecha a izquierda, sin tener en cuenta los espacios,
puntuaciones ni mayúsculas y minúsculas.

Ejemplo de entrada:

const texto1 = "Anita lava la tina";

const texto2 = "Hola mundo";

Salida esperada:

console.log(esPalindromo(texto1)); ===> resultado: true

consolo.log(esPalindromo(texto2)); ===> resultado: false

Paso 1: Definir la función

● Crear una función llamada esPalindromo que acepte un parámetro de texto.

Paso 2: Limpiar el texto

● Eliminar los espacios, puntuaciones y convertir todas las letras a minúsculas.
Esto es para asegurarnos de que las comparaciones sean consistentes.

Paso 3: Obtener la versión invertida del texto

● Crear una copia del texto y revertir su orden. Puedes utilizar algún método o
enfoque para invertir la cadena.

Paso 4: Comparar el texto original con la versión invertida

● Comparar el texto original con la versión invertida para determinar si son iguales.

Paso 5: Devolver el resultado
● Devolver true si el texto es un palíndromo y false si no lo es.
