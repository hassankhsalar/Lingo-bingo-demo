import { Children, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../assets/Pages/Loading";


const PrivateRoute = ({ Children }) => {

    const { user, loading } = useContext(AuthContext);
    if(loading){
       return <Loading></Loading>;
    }
    if(user && user?.email) {
        return Children;
    }

    return <Navigate to={'/auth/login'}></Navigate>
};

export default PrivateRoute;