import MyNavbar from "../components/MyNavbar";

function LottoView(){
    return(
        <>

        {/* Al importar MyNavbar, definimos qué texto queremos que muestre el botón en esta vistay a qué ruta nos lleva */}
            <MyNavbar
                leftButton={'Home'} leftButtonClick={'/home'}
                rightButton={'Admin'} rightButtonClick={'/admin'}
            />

            <h1>Good luck!</h1>

        </>
    )
}

export default LottoView;