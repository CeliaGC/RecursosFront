import { Link } from "react-router-dom"
import React, { useState } from 'react';

function LoginView(){

    //Vamos a hacer que cambie el renderizado según se haya hecho o no login (el login es simulado)

    //Hemos inicializado esta variable con useState y un estado booleano false, queremos que cuando cambie a true
    //(en señal de que alguien se ha logueado) cambie también el renderizado. El texto del botón es Log y el saludo es
    //"Please log in" cuando abrimos la página. Cuando cliquemos, cambiarán a "Lets start" y "Welcome back".

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //Esta función se ejecuta al hacer click y es la que cambia el estado de isLoggedIn al estado contrario al actual
    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
      };


      return(

        <div style={{paddingTop:"200px"}}>
                
               
                    

    {/* Este es un operador ternario. Evalúa si una condición se cumple. En este caso evalua si isLoggedIn se cumple,
    es decir,si es true o false. Si se cumple, renderiza en el h1 el primer elemento después del interrogante. Si 
    no se cumple, renderiza el elemento siguiente a los dos puntos (que son como el else) */}

    {/* En el caso del botón, si no hay click de login y isLoggedIn es falso, renderiza un botón Log in que al clicar cambiará 
    la variable a true. Cuando esto suceda, el botón cambia a Let's start y además estará envuelto en un link para que al hacer
    de nuevo click nos lleve a la vista home. Y todo con el mismo botón, qué maravilla. Por cierto clicando en el texto Example router
    del navbar volvemos al login de nuevo */}

                    {isLoggedIn ? <Link to={'home'}><button><h1>Let's start</h1></button></Link> : <button onClick={toggleLogin}><h1>Log in</h1> </button> }
                        

                    {isLoggedIn ? <h3>Welcome back!</h3> : <h3>Please log in</h3>}
            
                 
                </div>


      )
}

//Este sería el renderizado condicional sin operador ternario, con un condicional if else, que requiere un return para
//cada renderizado distinto.

    //   if(isLoggedIn){

    //     return(
    //         <div style={{paddingTop:"200px"}}>
                
               
    //                 <button onClick={toggleLogin}>
    //                     <h1>Let's start</h1>
    //                 </button>
                
    //             <h3>Welcome back!</h3>
        
             
    //         </div>
    //     )
    //   } else {
    //     return (
    //         <div style={{paddingTop:"200px"}}>
    //         <button onClick={toggleLogin}>
                       
    //                     <h1>Log in</h1>
    //                 </button>
    //                  <h3>Please log in.</h3>
            
    //         </div>
    //     )
    //   }





export default LoginView 



