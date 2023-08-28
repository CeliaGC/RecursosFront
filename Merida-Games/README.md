Este es un proyecto de herrmienta pedagógica en construcción
A partir de katas clásicas de programación como isPalindrome, firstAndUnique o hacer una wheelOfDoom, estoy construyendo una aplicación web amigable para tener cada una en una vista donde ejecutarla y e ir comprobando en tiempo real lo que sucede tras la interfaz de usuario.

Por ahora la voy construyendo en incrementos muy pequeños, pues es desde ya un recurso puesto a disposción de los aprendices de Mérida Coders en el transcurso del bootcamp. Al tiempo que vamos introduciendo nuevos stack en nuestros proyectos, los voy implementando en este repositoroio paso a paso para que los coders tengan una pequeña muestra de lo que deben realizar a mayor escala en sus proyectos. Por eso el código está profusmente comentado. 

Actualmente hay cuatro ramas: 

-Main: instalado react, se crea un componente y se usa el hook useState. Se hace de foma poco "reactónica", para ver más claramente cómo veníamos haciendo frontend sin react, qué cambia respecto a la interacción con el DOM y cómo funciona un useState.

-merida-games-dev: implementación "reactónica" del mismo componente y hook, con otro par de ejemplos de useState

-mg-fake-api: fake api con un método get que imprime una lista de usuarios en el navegador.
 El archivo users.json constituye la base de datos de la aplicación hasta el momento. Contiene un objeto Users que almacena un array de objetos, donde cada uno de estos objetos correspondería a un registro en una tabla de datos "Users". A esta tabla Users es a la que vamos a hacer CRUD mediante los métodos que importamos de la librería axios en el archivo userService. Comencemos consultando ese archivo para una explicación de cómo funciona la fake api.

 -mg-router: instalación de react router dom, versión 16.5.0 con npm i react-router-dom. Consta de 3 vistas, con dos de ellas (homeView/GamesView) enrutadas a modo de ejemplo para ver la implementación y el funcionamiento del router. El paginado se integra en un layout donde se importan los elementos estáticos, los componentes navbar y footer en este caso, y un outlet que agrupa los elementos dinámicos, las distintas pages. Se ha eliminado el componente app, para dejar como archivo principal solo main.


Stack utilizado:  
React - json server - axios - node - css - javaScript - HTML - React Router Dom - React Bootstrap

Next Steps:

Testing, token, login de usuario, completar el planteamiento de aplicación en cada rama para que resulte en cada una una app acabada que
va incrementando arquitectura, stack, complejidad, funcionalidades... respecto a la anterior.