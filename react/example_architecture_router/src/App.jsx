// import { useState } from 'react'

// import { Route, Routes } from 'react-router-dom'
// import LoginView from './views/LoginView'
// import HomeView from './views/HomeView'
// import AdminView from './views/AdminView'
// import LottoView from './views/LottoView'

// function App() {

  

//   return (
//     <>

//     <div className='app'>    
//       <Routes>
//         <Route path='/' element={<LoginView />} />
//         <Route path='/home' element={<HomeView />} />
//         <Route path='/admin' element={<AdminView />} />
//         <Route path='/sorteo' element={<LottoView />} />

//       </Routes>
//     </div>


//     </>
//   )
// }

// export default App

import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//browserRouter estaba en Main, tell me why
import {router} from './router/router';
import {RouterProvider} from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <RouterProvider router= {router}></RouterProvider>
 </React.StrictMode>
)

