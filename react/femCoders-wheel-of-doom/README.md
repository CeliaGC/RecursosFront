Pequeña aplicación para ver distintas vistas enrutadas y distinto renderizado de un mismo componente.

Para instalar las dependencias y levantar la app, en terminal:
npm i
npm run dev

Hay un componente MyNavbar al que pasamos props para que renderice distinto texto en los botones y conduce a páginas distintas según lo estemos importando en una u otra vista.

Las vistas Home y Lotto tienen un saludo estático, pero los de la vista Admin y Login son dinámicos. El de Admin cambia según la hora del día y el de Login cambia según hayamos clicado o no en el botón login (es fake, no hay login).

En App se enrutan las distintas vistas.

En cada archivo está la información relevante del funcionamiento.
