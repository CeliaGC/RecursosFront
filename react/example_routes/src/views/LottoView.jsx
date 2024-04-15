import MyNavbar from "../components/MyNavbar";

function LottoView(){
    return(
        <>
            <MyNavbar
                leftButton={'Home'} leftButtonClick={'/home'}
                rightButton={'Admin'} rightButtonClick={'/admin'}/>
            <h1>Good luck!</h1>
        </>
    )
}

export default LottoView;