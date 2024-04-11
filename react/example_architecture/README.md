Tenemos unos datos renderizados en el navegador con un método GET. 
El envío de la solicitud, el procesamiento de los datos, el manejo de errores y el renderizado está en un mismo componente App.jsx
en lo que se llama "spahetti code" (sobre todo cuando se trata de aplicaciones más complejas donde resulta un archivo de código
larguíiiiiiiiiiiiisimo).

Vamos a realizar un taller para pasar de este spaghetti code a una arquitectura en capas que nos permite una mejor arquitectura con separación de responsabilidades (SoC), con lo que conseguimos desacoplar totalmente front y back (aunque en este caso sea un back de mentirijilla) y obtenemos una aplicación escalable, mantenible y con módulos reutilizables.

Clona el repo/acutaliza tu repo recursos front, ábrelo en Visual y corre los comandos necesarios en terminal para instalarlo.

OBJETIVO DEL TALLER

Vamos a dividir responsabilidades (SoC) en distintas capas:

-Una capa service que se encarga de la solicitud
-Una capa handler que procesa los datos (observa los datos, el formato difiere del db.json al front)

          ambaas capas service y handler deben encargarse del manejo de sus posibles errores

-Un componente app que renderiza los datos


EXTRA: gestiona el manejo de errores en una capa independiente de las demás como "errorService.js"
