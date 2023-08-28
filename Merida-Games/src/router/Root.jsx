import { Outlet } from "react-router-dom";
import MyNavbar from "../Components/navbar/MyNavbar";
import MyFooter from "../Components/footer/MyFooter";




function Root() {
    return (
        <>
            <MyNavbar />
            <Outlet />
            <MyFooter />
        </>
    )
}

export default Root;