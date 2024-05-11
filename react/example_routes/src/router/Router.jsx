import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/layoutPublic";
import LoginView from '../views/LoginView';
import HomeView from '../views/HomeView';
import LottoView from '../views/LottoView';
import AdminView from '../views/AdminView';
import LayoutPrivate from "../layout/LayoutPrivate";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "../authUtils/AuthProvider";

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
        path: '/admin/*',
        element: (
            <AuthProvider> {/* Asegúrate de que AuthProvider envuelve todo el árbol */}
                <PrivateRoute path="/admin">
                    <LayoutPrivate />
                </PrivateRoute>
            </AuthProvider>
        ),
        children:[
            {
                index: true,
                element:<AdminView />
            },
            {
                path: 'sorteo',
                element: <LottoView />
            }
        ]
    }
]);
