import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Главная страница</div>
    },
    {
        path: '/login',
        element: <LoginPage/>
    }
]);