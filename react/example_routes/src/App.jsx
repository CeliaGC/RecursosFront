import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Router} from './router/Router'
import {RouterProvider} from 'react-router-dom';
import { AuthProvider } from './authUtils/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <AuthProvider><RouterProvider router= {Router}></RouterProvider></AuthProvider>
 </React.StrictMode>
)



