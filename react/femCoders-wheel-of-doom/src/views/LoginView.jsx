import { Link } from "react-router-dom"
import React, { useState } from 'react';

function LoginView(){

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
      };

return(
    <div style={{paddingTop:"200px"}}>
        
        <Link to={"/home"}>
            <button onClick={toggleLogin}>
                <h1>{isLoggedIn ? 'Log Out' : 'Log In'}</h1>
            </button>
        </Link>
        

      {isLoggedIn ? <h3>Welcome back!</h3> : <h3>Please log in.</h3>}
    </div>
)

}
export default LoginView