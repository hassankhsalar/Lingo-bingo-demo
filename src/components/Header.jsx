import React, { useContext } from "react";
import moment from "moment";
import Marquee from "react-fast-marquee";
import logo from "../assets/logo.png";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const { user } = useContext(AuthContext); // Access user from AuthContext
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex bg-sky-500 h-14 pt-1 items-center justify-between px-10">
                {/* Logo Section */}
                <div className="logo flex items-center">
                    <img className="w-10 rounded-xl" src={logo} alt="Logo" />
                    <p className="text-xl text-white pl-2 font-bold">Lingo-Bingo</p>
                </div>

                {/* Welcome Message */}
                <div>
                    <h2 className="text-2xl text-sky-500 bg-white rounded-xl p-2 font-semibold">
                        Welcome{user && user.displayName ? `, ${user.displayName}` : "!"}
                    </h2>
                </div>

                {/* My Profile Button */}
                {user && (
                    <div>
                        <button
                            className="btn"
                            onClick={() => navigate("/myprofile")}
                        >
                            My Profile
                        </button>
                    </div>
                )}
            </div>

            {/* Tagline Section */}
            <div className="w-full mx-auto">
                <h3 className="text-center text-xl font-normal text-gray-500">
                    Unlock new worlds, one word at a time
                </h3>
            </div>

            {/* Marquee Section */}
            <div className="w-7/12 mx-auto border-2 border-pink-400 rounded-lg">
                <Marquee pauseOnHover={true} className="text-blue-500">
                    - - Enroll to our new Specialized courses carved for you! 2966 curious minds have joined us, Subscribe Now!! - -{" "}
                    <p>{moment().format("MMMM Do YYYY, h:mm:ss a")}</p>
                </Marquee>
            </div>
        </div>
    );
};

export default Header;
