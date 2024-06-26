import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Router} from './router/Router'
import {RouterProvider} from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <RouterProvider router= {Router}></RouterProvider>
 </React.StrictMode>
)

export default App


