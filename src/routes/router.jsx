import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../assets/layouts/HomeLayout";
import Home from "../components/Home";
import Learn from "../assets/Pages/Learn";
import Lessons from "../assets/Pages/Lessons";
import Tutorials from "../assets/Pages/Tutorials";
import AuthLayout from "../assets/layouts/AuthLayout";
import Login from "../assets/Pages/Login";
import Register from "../assets/Pages/Register";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/learn',
                element: <Learn></Learn>,
                loader: ()=> fetch('word.json'),
            },
            {
                path: '/lessons',
                element: ( 
                <PrivateRoute>
                    <Lessons></Lessons>,
                </PrivateRoute> ),
                loader: ()=> fetch('word.json'),
            },
            {
                path: '/tutorials',
                element: <Tutorials></Tutorials>,
            },
        ]
    },
    {
        path: "/pages",
        element: <h1>pages</h1>
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            },
        ]
    },
    {
        path: "*",
        element: <h1>error</h1>
    },
    
]);

export default router;