import { Link } from "react-router-dom";
import { FaBook, FaBrain, FaVideo } from "react-icons/fa";

const RightNav = () => {
    return (
        <div>
            <div className="flex flex-col gap-4 w-10/12">
                <Link className="btn bg-sky-500 text-white text-xl" to={"/learn"}><FaBrain />Lets Learn!</Link>
                <Link className="btn bg-sky-500 text-white text-xl" to={"/lessons"}><FaBook />Lessons!</Link>
                <Link className="btn bg-sky-500 text-white text-xl" to={"/tutorials"}><FaVideo />Tutorials!</Link>
            </div>
            <div className="flex flex-col gap-4 w-10/12 mt-10">
               
            </div>
        </div>
    );
};

export default RightNav;