import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../assets/layouts/HomeLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
    },
    {
        path: "/pages",
        element: <h1>pages</h1>
    },
    {
        path: "auth",
        element: <h1>login</h1>
    },
    {
        path: "*",
        element: <h1>error</h1>
    },
    
]);

export default router;