import { Outlet } from "react-router-dom";
import PrivateRoute from "../router/PrivateRoute";
import { AuthProvider } from "../authUtils/AuthProvider";


const LayoutPrivate = () => {

    //en el return ponemos nuestro Outlet, que agrupa las vistas que serán públicas, y añadimos los elementos
    //fijos o comunes a todas las vistas de esta ruta pública: un navbar, footer, etc

    return (

        <>
        <Outlet/>
        {/* <AuthProvider> 
           
             
       
        </AuthProvider> */}
  
 
        </>
    )

}

export default LayoutPrivate;