import { Link } from "react-router-dom";
import { FaBook, FaBrain, FaVideo } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc"; 

const RightNav = () => {
    const { signInWithGoogle } = useContext(AuthContext);

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                
            })
            .catch(err => {
                console.error("Google sign-in error:", err.message);
            });
    };

    return (
        <div>
            <div className="flex flex-col gap-4 w-10/12">
                <Link className="btn bg-sky-500 text-white text-xl" to={"/learn"}>
                    <FaBrain /> Lets Learn!
                </Link>
                <Link className="btn bg-sky-500 text-white text-xl" to={"/lessons"}>
                    <FaBook /> Lessons!
                </Link>
                <Link className="btn bg-sky-500 text-white text-xl" to={"/tutorials"}>
                    <FaVideo /> Tutorials!
                </Link>
            </div>
            <div className="flex flex-col gap-4 w-10/12 mt-10">
                
                <button
                    onClick={handleGoogleLogin}
                    className="btn flex items-center justify-center gap-2 bg-white text-gray-700 border border-2 border-sky-500 hover:bg-green-100"
                >
                    <FcGoogle className="text-2xl " />Google
                </button>
            </div>
        </div>
    );
};

export default RightNav;
