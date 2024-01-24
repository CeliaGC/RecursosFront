//PINTAR UNA LISTA DE USUARIOS EN LA WEB

//Yo como usuario quiero generar una lista de participantes en un evento
//Yo como usuario quiero un campo donde escribir un nombre
//Yo como ususario quiero un botón que añada el el nombre a una lista
//Yo como usuario quiero ver una lista numerada con los participantes que voy añadiendo

// Manejo de eventos: onchange, onclick
// Hooks: useState, useEffect(por razones un poco confusas, en una primera instancia no era necesario)
// Métodos: .map()


//para usar los hooks hay que importarlos
import { useState, useEffect } from "react";

const UserList = () =>{

    //hemos usado useState para crear y actualizar las variables de usuario y de la lista de usuarios. "user" la inicializamos
    //en un string vacío. "userList" inicializa en un array vacío.
    const [user, setUser] = useState('');
    const [userList, setUserList] = useState([]);


    //esta función coge el valor de "user" usando "setUser" y le asigna el valor del input, siendo el evento que dispara esta función
    //cualquier cambio que un usuario haga en el input al editarlo
    function handleNameChange(e){
        setUser([e.target.value])
    };


    //a tráves del evento de click (onclick) del botón se ejecuta esta función, que guarda en un array la variable user mediante el
    //"setUserList"
    function handleAddUserToList() {
        setUserList(prevUserList => [...prevUserList, user])

    //este console log lo pusimos por razones ajenas al objetivo de la aplicación, queríamos comprobar que el array se fuera cargando sin 
    //más y también lo pusimos para tener un punto de parada en los breakpoint. Sin embargo, el array no aparecía actualizado. El problema
    //era que si está metido dentro de la funcióno nunca iba a imprimir el array actualizado. No nos hemos dado cuenta y pensábamos
    //que había errores en el código. Unas risas.

        //   console.log(userList);
        
        //aquí volvemos a usar useState para qué para resetear el imput
        setUser('');
      }

      //Este console log sí imprime el array actualizado, puesto que está fuera de la función que actualiza el array

         console.log(userList);



//Creíamos que la solución al array que no se acutalizaba era usar useEffect. En realidad no era necesario, pero en cualquier caso
//hemos aprendido a usarlo: sirve para manipular efectos secundarios, por ejemplo, para asegurarte de que lo que declares dentro del 
//useEffect no se ejecute hasta que se haya actualizado el estado del componenente o de una variable, que es lo que ponemos dentro
//del corchete (se llama dependencia). El console no se ejecutaría hasta que se hubiera actualizado el estado (valor) de userList

    //   useEffect(()=>{
    //     console.log(userList)
    //   },[userList,])


    // en el return usamos un .map() en el array userList para transformar sus elementos. .map() itera sobre cada elemento, lo transforma 
    //y devuelve un array nuevo con los elementos transformados. Aquí lo usamos para asignar a cada elemento un <li> con su contenido 
    // (que es un nombre, un string)
    return(
        <>
        <h1>Qué lista eres</h1>

        <label htmlFor="userName"></label>
        <input type="text" name="userName" value={user} onChange={handleNameChange}/>

        <button onClick={handleAddUserToList}>Añadir usuario</button>
        <ul>


        {
            userList.map((user, index)=>(
                <li key={index}> {user} </li>
            ))
        }
        </ul>
        </>
        
    )
}

export default UserList;


//Segunda parte 

//Yo como usuario quiero generar una lista de participantes en un evento
//Yo como usuario quiero dos campos de formulario donde añadir los datos "Nombre" y "Apellido" 
//Yo como usuario quiero un botón que añada los datos del formulario a una lista
//Yo como usuario quiero ver la lista de participantes numerada


// Tercera parte

//Yo como usuario quiero generar una lista de participantes en un evento
//Yo como usuario quiero campos de formulario donde añadir los datos del participante
//Yo como usuario quiero un campo de formulario para añadir el dato "Nombre del evento"
//Yo como usuario quiero un botón que añada los datos del formulario a una lista
//Yo como usuario quiero ver la lista de participantes numerada y el título de la lista
//Yo como usuario quiero un botón que guarde la lista de participantes con el nombre del evento (genera un elemento lógico,
// no visual, es un objeto que no vemos en la web sino en consola o debugueando con breakpoints)

