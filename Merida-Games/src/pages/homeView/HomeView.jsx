import { Link } from "react-router-dom";
import { WheelOfDoom } from "../../Components/WheelOfDoom/WheelOfDoom";
import MyFooter from "../../Components/footer/MyFooter";
import MyNavbar from "../../Components/navbar/MyNavbar";
import "../homeView/HomeView.css"
import Button from 'react-bootstrap/Button';




function HomeView(){
return(

    <div id="home-flex">
  
    <div id="wellcome"><h1>Wellcome to Mérida Games</h1></div>

    <Link to="/gamesView"><Button>Go gaming</Button></Link>

    </div>

)
}
export default HomeView;
