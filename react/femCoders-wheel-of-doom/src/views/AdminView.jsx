import MyNavbar from "../components/MyNavbar";
import { useState, useEffect } from "react";

function AdminView(){

//Vamos a renderizar un saludo distinto según la hora del día

//Tenemos esta variable inicializada en un string vacío

    const [timeOfDay, setTimeOfDay] = useState('');

    //Esta función actualiza el string con un texto distinto según la hora del día. Está envuelto en un useEffect
    //porque necesitamos que se ejecute después de montarse el componente. Si no estuviera envuelta en él, se ejecutaría
    //sólo al montarse el componente con la hora de ese momento y el saludo no se actualizaría.
      
    useEffect(() => {

      const currentTime = new Date().getHours();
      if (currentTime < 12) {
        setTimeOfDay('morning');
      } else if (currentTime < 18) {
        setTimeOfDay('afternoon');
      } else {
        setTimeOfDay('evening');
      }

    }, []);

    return(
        <>
        <MyNavbar
                leftButton={'Home'} leftButtonClick={'/home'}
                rightButton={'Sorteo'} rightButtonClick={'/sorteo'}/>
        <h1>Hi Admin</h1>

      <h1>Good {timeOfDay}!</h1> 

{/* Ahora se renderiza el saludo según la hora de día mediante un condicional lógico cortocircuitado. Si se cumple
la condición anterior a &&, se ejecuta el elemento siguiente.
Si timeOfDay es igual a 'morning' el saludo será Start your day right!. Y así sucesivamente conforme pasa el día y según
la hora se actualiza el valor de timeOfDay en la función currenTime */}

      {timeOfDay === 'morning' && <p>Start your day right!</p>}
      {timeOfDay === 'afternoon' && <p>Keep up the good work!</p>} 
      {timeOfDay === 'evening' && <p>Time to relax!</p>}

        </>

    )
}

export default AdminView;