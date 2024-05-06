Tenemos unos datos renderizados en el navegador con un método GET. 
El envío de la solicitud, el procesamiento de los datos, el manejo de errores y el renderizado está en un mismo componente App.jsx
en lo que se llama "spaghetti code" (sobre todo cuando se trata de aplicaciones más complejas donde resulta un archivo de código
larguíiiiiiiiiiiiisimo).

Vamos a realizar un taller para pasar de este spaghetti code a una arquitectura en capas que nos permite una mejor arquitectura con separación de responsabilidades (SoC), con lo que conseguimos desacoplar totalmente front y back (aunque en este caso sea un back de mentirijilla) y obtenemos una aplicación escalable, mantenible y con módulos reutilizables.

Para instalar las dependencias y levantar la app, en terminal:
npm i
npm run dev
       


OBJETIVO DEL TALLER

Vamos a dividir responsabilidades (SoC) en distintas capas:

-Una capa service que se encarga de la solicitud a la API

-Una capa handler que procesa los datos (observa los datos, el formato difiere del db.json al front)

          ambas capas service y handler deben encargarse del manejo de sus posibles errores

-Un componente app que solo tiene que renderizar los datos


EXTRA: gestiona el manejo de errores en una capa independiente de las demás como "errorService.js"
EXTRA: haz que la aplicación se renderice en App.jsx sin tener que importarla a main y elimina main, o bien haz
que la aplicación se renderice en main y elimina App.jsx.