import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginView from './views/LoginView'
import HomeView from './views/HomeView'
import AdminView from './views/AdminView'
import LottoView from './views/LottoView'

function App() {

  return (
    <>

    <div className='app'>    
      <Routes>
        <Route path='/' element={<LoginView />} />
        <Route path='/home' element={<HomeView />} />
        <Route path='/admin' element={<AdminView />} />
        <Route path='/sorteo' element={<LottoView />} />

      </Routes>
    </div>


    </>
  )
}

export default App
