import { Outlet } from "react-router-dom";
import PrivateRoute from "../router/PrivateRoute";
import { AuthProvider } from "../authUtils/AuthProvider";


const LayoutPrivate = () => {


    return (

        <>
   
         <Outlet/>    

        </>
    )

}

export default LayoutPrivate;