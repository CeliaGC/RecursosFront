import MyNavbar from "../components/MyNavbar";
import { useState, useEffect } from "react";

function AdminView(){

    const [timeOfDay, setTimeOfDay] = useState('');
    let time = new Date().getHours(); 
    const [ctime, setTime] = useState(time);

     

     const UpdateTime=()=>{
    time =  new Date().getHours()
    setTime(time)
  }
  setInterval(UpdateTime)
     
      
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
        <MyNavbar
                leftButton={'Home'} leftButtonClick={'/home'}
                rightButton={'Sorteo'} rightButtonClick={'/admin/sorteo'}/>
        <h1>Hi Admin</h1>

      <h1>Good {timeOfDay}!</h1> 


      {timeOfDay === 'morning' && <p>Start your day right!</p>}
      {timeOfDay === 'afternoon' && <p>Keep up the good work!</p>} 
      {timeOfDay === 'evening' && <p>Time to relax!</p>}

        </>

    )
}

export default AdminView;