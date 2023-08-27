import MyFooter from "../../Components/footer/MyFooter"
import { WheelOfDoom}  from "../../Components/WheelOfDoom/WheelOfDoom";
import MyNavbar from "../../Components/navbar/MyNavbar";

function WheelOfView(){
    return(
        <>
        <MyNavbar/>
        <WheelOfDoom/>
        <MyFooter/>
        </>
    )
}
export default WheelOfView;