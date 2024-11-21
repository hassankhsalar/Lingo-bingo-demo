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
import MyProfile from "../assets/Pages/MyProfile";
import UpdateProfile from "../components/UpdateProfile";
import ForgotPassword from "../assets/Pages/ForgotPassword";
import ErrorPage from "../assets/Pages/ErrorPage";


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
                    <Lessons></Lessons>
                </PrivateRoute> ),
                loader: async () => fetch('word.json').then((res) => res.json()),
            },
            {
                path: '/tutorials',
                element: ( <PrivateRoute>
                    <Tutorials></Tutorials>
                </PrivateRoute>),
            },
            {
                path: '/myprofile',
                element: ( <PrivateRoute>
                    <MyProfile></MyProfile>
                </PrivateRoute>),
            },
            {
                path: '/updateprofile',
                element: ( <PrivateRoute>
                    <UpdateProfile></UpdateProfile>
                </PrivateRoute>),
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
            {
                path: "/auth/forgotpassword",
                element: <ForgotPassword></ForgotPassword>
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    },
    
]);

export default router;