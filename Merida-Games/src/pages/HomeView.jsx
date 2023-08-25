import { WheelOfDoom } from "../Components/WheelOfDoom/WheelOfDoom";
import MyFooter from "../Components/footer/MyFooter";
import MyNavbar from "../Components/navbar/MyNavbar";
import "../pages/HomeView.css"




function HomeView(){
return(

    <div id="home-flex">
    <MyNavbar/>
    <div>Wellcome to Mérida Games</div>
    <MyFooter/>
    </div>

)
}
export default HomeView;
