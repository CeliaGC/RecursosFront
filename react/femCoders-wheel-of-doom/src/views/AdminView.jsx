import MyNavbar from "../components/MyNavbar";
import { useState, useEffect } from "react";

function AdminView(){

    const [timeOfDay, setTimeOfDay] = useState('');
      
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
      {timeOfDay === 'morning' && <p>Start your day right!</p>}
      {timeOfDay === 'afternoon' && <p>Keep up the good work!</p>}
      {timeOfDay === 'evening' && <p>Time to relax!</p>}

        </>

    )
}

export default AdminView;