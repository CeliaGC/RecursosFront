import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/layoutPublic";
import LoginView from '../views/LoginView';
import HomeView from '../views/HomeView';
import LottoView from '../views/LottoView';
import AdminView from '../views/AdminView';
import LayoutPrivate from "../layout/LayoutPrivate";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        children:[
            {
                index: true,
                element: <LoginView />
            },
            {
                path:'/home',
                element: <HomeView />

            }

        ]
    },
    {
        
            path: '/admin',
            element: <LayoutPrivate />,
            children:[
                {
                    index: true,
                    element:<AdminView />
                },
                {
                    path: '/admin/sorteo',
                    element: <LottoView />
                }

            ]
        
    }
])