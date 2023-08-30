/* Si quisiera encontrar todos los elementos  <li> en nuestro ejemplo, 
podría utilizar el combinador de hijos > para encontrar 
a todos los elementos hijos de <ul>. */
/* Если бы я хотел найти все элементы в нашем примере, Вы можете использовать 
объединитель >, чтобы найти ко всем элементам, дочерним. */

/*const listItems = document.querySelectorAll("ul > li");
console.log(listItems);*/

/* Si quisiéramos imprimir los elementos reales <li> con los shows de tv, 
podemos usar el bucle forEach() para iterar sobre la NodeList 
e imprimir cada uno de los elementos. */
/* Если бы мы хотели напечатать фактические элементы с телешоу, 
мы можем использовать цикл forEach() 
для перебора NodeList и распечатайте каждый из элементов. */

const elementsList = document.querySelectorAll("ul > li");

elementsList.forEach((item) => {
  console.log(item);
});