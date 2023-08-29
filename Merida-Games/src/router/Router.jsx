import { createBrowserRouter } from "react-router-dom";
import WheelOfView from "../pages/wheelOfView/WheelOfView";
import HomeView from "../pages/homeView/HomeView";
import GamesView from "../pages/gamesView/GamesView";
import Root from "./Root";
import FirstUnique from "../pages/firstUniqueView/FirstUniqueView";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        // errorElement: <ErrorPage />,
        children: [
                    {
                        index: true,
                        element: <HomeView />,
                        // loader: fetchImages,
                    },
                    {
                        path: '/gamesView',
                        element: <GamesView />,
                    },       
                    {
                        path: '/wheelOfView',
                        element: <WheelOfView />,
                        // loader: fetchImages,
                    },    
                    {
                        path: '/first-and-unique',
                        element: <FirstUnique />,
                        // loader: fetchImages,
                    },    
                ]
            },
        ]
);