import MyNavbar from "../components/MyNavbar";
import { useState, useEffect } from "react";

function AdminView(){

//Vamos a renderizar un saludo distinto según la hora del día

//Tenemos esta variable inicializada en un string vacío

    const [timeOfDay, setTimeOfDay] = useState('');
    let time = new Date().getHours(); 
    const [ctime, setTime] = useState(time);

     

     const UpdateTime=()=>{
    time =  new Date().getHours()
    setTime(time)
  }
  setInterval(UpdateTime)
     
    
    //Esta función actualiza el string con un texto distinto según la hora del día. Está envuelto en un useEffect
    //porque necesitamos que se ejecute después de montarse el componente cada vez que se actualice la variable ctime
    // de la hora actual. Si no estuviera envuelta en él, se ejecutaría
    //sólo al montarse el componente con la hora de ese momento y el saludo no se actualizaría.
      
    useEffect(() => {

      if (ctime < 12) {
        setTimeOfDay('morning');
      } else if (ctime < 18) {
        setTimeOfDay('afternoon');
      } else {
        setTimeOfDay('evening');
      }

    }, [ctime]);
    

    return(
        <>

      {/* Al importar MyNavbar, definimos qué texto queremos que muestre el botón en esta vistay a qué ruta nos lleva */}

        <MyNavbar
                leftButton={'Home'} leftButtonClick={'/home'}
                rightButton={'Sorteo'} rightButtonClick={'/sorteo'}/>
        <h1>Hi Admin</h1>

      <h1>Good {timeOfDay}!</h1> 

{/* Ahora se renderiza el saludo según la hora de día mediante un condicional lógico cortocircuitado. Si se cumple
la condición anterior a &&, se ejecuta el elemento siguiente.
Si timeOfDay es igual a 'morning' el saludo será Start your day right!. Y así sucesivamente conforme pasa el día y según
la hora se actualiza el valor de timeOfDay en el condicional envuelto en el useEffect */}

      {timeOfDay === 'morning' && <p>Start your day right!</p>}
      {timeOfDay === 'afternoon' && <p>Keep up the good work!</p>} 
      {timeOfDay === 'evening' && <p>Time to relax!</p>}

        </>

    )
}

export default AdminView;