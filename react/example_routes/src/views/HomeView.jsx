import Navbar from "../components/MyNavbar";
import React, { useEffect, useState } from 'react';
import { useAuth } from "../authUtils/AuthProvider";
import LoginForm from "../components/LoginForm";

function HomeView(){

    return (

        <>
        <Navbar 
        leftButton={'Admin'} leftButtonClick={'/admin'}
        rightButton={'Sorteo'} rightButtonClick={'/admin/sorteo'}/>
        
        <h1>Feel right at home</h1>
        </>
        
    )
};

export default HomeView