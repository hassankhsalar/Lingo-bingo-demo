import { FaBook, FaBrain, FaVideo } from "react-icons/fa";
import japan from "../assets/japan.webp"
import france from "../assets/france.webp"
import german from "../assets/german.png"
import russia from "../assets/russia.png"
const LeftNav = () => {
    return (
        <div>
            <div className="flex flex-col gap-4 w-10/12">
                <button className="btn bg-sky-500 text-white"><img className="h-10 w-16 pl-2" src={japan} alt="" />Japanese</button>
                <button className="btn bg-sky-500 text-white"><img className="h-10 w-16 mr-2" src={france} alt="" />French</button>
                <button className="btn bg-sky-500 text-white"><img className="h-10 w-16" src={german} alt="" />German</button>
                <button className="btn bg-sky-500 text-white"><img className="h-10 w-16" src={russia} alt="" />Russian</button>
            </div>
            <div className="flex flex-col gap-4 w-10/12 mt-10">
                <button className="btn bg-sky-500 text-white text-xl"><FaBook />Lessons</button>
                <button className="btn bg-sky-500 text-white text-xl"><FaBrain />Vocabulary</button>
                <button className="btn bg-sky-500 text-white text-xl"><FaVideo />Tutorials</button>
            </div>
        </div>
    );
};

export default LeftNav;