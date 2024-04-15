import { Outlet } from "react-router-dom";
import MyNavbar from '../components/MyNavbar'

const LayoutPublic = () => {

    //en el return ponemos nuestro Outlet, que agrupa las vistas que serán públicas, y añadimos los elementos
    //fijos o comunes a todas las vistas de esta ruta pública: un navbar, footer, etc

    return (

        <>
        {/* <MyNavbar /> */}
        <Outlet />
        </>
    )

}

export default LayoutPublic;