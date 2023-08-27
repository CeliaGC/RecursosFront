import MyFooter from "../../Components/footer/MyFooter";
import GamesList from "../../Components/gamesList/GamesList";
import MyNavbar from "../../Components/navbar/MyNavbar";

function GamesView(){
    return (
        <>
        <MyNavbar/>
        <GamesList/>
        <MyFooter/>
        </>
    )
}

export default GamesView