import Navbar from "../components/MyNavbar";
import React, { useEffect, useState } from 'react';

function HomeView(){

    return(

        <>
        {/* Al importar MyNavbar, definimos qué texto queremos que muestre el botón en esta vistay a qué ruta nos lleva */}
        <Navbar 
        leftButton={'Admin'} leftButtonClick={'/admin'}
        rightButton={'Sorteo'} rightButtonClick={'/sorteo'}/>
        
        <h1>Feel right at home</h1>
        </>

    )
};

export default HomeView