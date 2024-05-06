import { Link } from "react-router-dom"
import React, { useState } from 'react';

function LoginView(){


    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
      };


      return(

        <div style={{paddingTop:"200px"}}>
                


                    {isLoggedIn ? <Link to={'home'}><button><h1>Let's start</h1></button></Link> : <button onClick={toggleLogin}><h1>Log in</h1> </button> }
                        

                    {isLoggedIn ? <h3>Welcome back!</h3> : <h3>Please log in</h3>}
            
                 
                </div>


      )
}



export default LoginView 



