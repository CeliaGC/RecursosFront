import { WheelOfDoom } from "../../Components/WheelOfDoom/WheelOfDoom";
import MyFooter from "../../Components/footer/MyFooter";
import MyNavbar from "../../Components/navbar/MyNavbar";
import "../homeView/HomeView.css"




function HomeView(){
return(

    <div id="home-flex">
    <MyNavbar/>
    <div id="wellcome"><h1>Wellcome to Mérida Games</h1></div>
    <MyFooter/>
    </div>

)
}
export default HomeView;
