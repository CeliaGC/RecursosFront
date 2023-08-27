import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import HomeView from './pages/homeView/HomeView.jsx'
import WheelOfView from './pages/wheelOfView/WheelOfView'
import GamesView from './pages/gamesView/GamesView'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GamesView/>
  </React.StrictMode>,
)
