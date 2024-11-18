import moment from "moment";
import Marquee from "react-fast-marquee";
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <div> 
            <div className="flex bg-sky-500 h-14 pt-1">
                <div className="logo items-start pl-10 flex">
                    <img className="w-10 rounded-xl font-bold" src={logo} alt="" />
                    <p className="text-xl text-white pl-2 pt-1">Lingo-Bingo</p>
                </div>
                <div className="items-center mx-auto">
                    <h2 className="text-2xl items-center text-sky-500 bg-white rounded-xl p-2 font-semibold">Welcome!</h2>
                </div>
            </div>
            <div className="w-full mx-auto">
                <h3 className="text-center text-xl font-normal text-gray-500">Unlock new worlds, one word at a time</h3>
            </div>
            <div className="w-7/12 mx-auto border-2 border-pink-400 rounded-lg">
            <Marquee pauseOnHover={true} className="text-blue-500">
                - -Enroll to our new Specialized courses carved for you! 2966 curious minds have joined us, Subscribe Now!!- - <p> {moment().format('MMMM Do YYYY, h:mm:ss a')} </p>
            </Marquee>
                
            </div>
        </div>
        
    );
};

export default Header;