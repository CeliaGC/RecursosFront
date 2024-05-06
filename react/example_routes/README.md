Pequeña aplicación con cuatro vistas enrutadas con React Router.

Para instalar las dependencias y levantar la app, en terminal:
npm i
npm run dev

La aplicación está formada por un componente Navbar al que pasamos props para que los botones y links cambien según en qué vista estamos.

Tiene la arquitectura y primeros pasos para tener una ruta pública y una privada de admin. Hay cuatro vistas, una capa router y una capa layout. 
En cada layOut creamos un Outlet (que será el conjunto de vistas por las que navegaremos en cada ruta) y podemos añadir los elementos que
serán invariables dentro de esa ruta, por ejemplo un nabvar de admin en una ruta privada y un navbar y footer de usuario no logueado en una vista pública.

En la carpeta router tenemos el Router.jsx, donde definimos el enrutado (las distintas vistas que envuelve cada Outlet) y un componente  PrivateRoute para dirigir a los usuarios a una u otra ruta según la información del contexto de autenticación que creamos. 

Este repo es un es un ejemplo de buena arquitectura, en este repositiorio no hay login ni están protegidas las rutas. Puedes usarlo como punto de partida para tus primeros intentos de login con sesiones de usuario y token.

