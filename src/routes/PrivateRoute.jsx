import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation, useLoaderData } from "react-router-dom";
import Loading from "../assets/Pages/Loading";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const loaderData = useLoaderData(); 

    if (loading) {
        return <Loading></Loading>;
    }

    if (user && user.email) {
        
        return React.cloneElement(children, { loaderData });
    }

    return <Navigate state={{ from: location }} to="/auth/login"></Navigate>;
};

export default PrivateRoute;
