import React, { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext); 
    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const navigate = useNavigate();

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateUserProfile({ displayName: name, photoURL });
            navigate("/myprofile"); 
        } catch (error) {
            console.error("Failed to update profile", error);
        }
    };

    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-4xl font-bold mb-6">Update Profile</h1>
            <form
                onSubmit={handleUpdate}
                className="border p-6 rounded-lg shadow-lg w-96 bg-white flex flex-col"
            >
                <label className="mb-2 text-lg font-medium">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input input-bordered mb-4"
                    placeholder="Enter your name"
                    required
                />
                <label className="mb-2 text-lg font-medium">Photo URL</label>
                <input
                    type="text"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                    className="input input-bordered mb-4"
                    placeholder="Enter photo URL"
                    required
                />
                <button className="btn btn-primary w-full" type="submit">
                    Update Information
                </button>
            </form>
        </div>
    );
};

export default UpdateProfile;
