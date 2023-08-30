/* Primero podemos crear un elemento <ul> usando document.createElement(). 
Asignaremos eso a una variable llamada unorderedList. */
/* Во-первых, мы можем создать элемент с помощью document.createElement(). 
Мы назначим это переменной с именем unorderedList. */

let unorderedList = document.createElement("ul");

/* Después necesitaremos agregar ese elemento <ul> 
al documento usando el método appendChild(). */
/* Затем нам нужно будет добавить этот элемент в документ 
с помощью метода appendChild(). */

document.body.appendChild(unorderedList);

/* El siguiente paso es agregar un par de elementos <li> dentro del elemento<ul> usando el método createElement(). */
/* Следующим шагом будет добавление нескольких элементов внутри 
элемента с помощью метода createElement().*

let element1List = document.createElement("li");

let element2List = document.createElement("li");

/* Después podemos usar la propiedad textContent 
para agregar texto para nuestros 4 elementos de la lista. */
/* Тогда мы можем использовать свойство textContent, 
чтобы добавить текст для наших 4 пунктов списка.*/

/* let element1List = document.createElement("li");
element1List.textContent = "It's Beautiful";

let element2List = document.createElement("li");
element2List.textContent = "It's Awesome";*/

/* El último paso es usar el método appendChild() para 
que los elementos de la lista sean agregados 
a la lista sin orden. */
/* Последним шагом является использование метода appendChild() 
для что элементы в списке добавлены к списку без порядка. */

let element1List = document.createElement("li");
element1List.textContent = "It's Beautiful";
unorderedList.appendChild(element1List);

let element2List = document.createElement("li");
element2List.textContent = "It's Awesome";
unorderedList.appendChild(element2List);
