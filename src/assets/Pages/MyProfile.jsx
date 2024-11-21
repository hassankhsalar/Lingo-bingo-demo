import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const MyProfile = () => {
    const { user } = useContext(AuthContext); 
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-4xl font-bold mb-6">Welcome, {user?.displayName || "User"}!</h1>
            <div className="border p-6 rounded-lg shadow-lg w-96 bg-white">
                <img
                    src={user?.photoURL || "https://via.placeholder.com/150"}
                    alt="User Profile"
                    className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <p className="text-lg font-medium">Name: {user?.displayName || "N/A"}</p>
                <p className="text-lg font-medium">Email: {user?.email || "N/A"}</p>
                <button
                    className="btn btn-primary mt-6 w-full"
                    onClick={() => navigate("/updateprofile")}
                >
                    Update Profile
                </button>
            </div>
        </div>
    );
};

export default MyProfile;
