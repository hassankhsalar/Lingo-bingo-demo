import { useNavigate } from "react-router-dom";
import gd from "../assets/gd.jpg"
import slide1 from "../assets/slide1.jpg"
import slide2 from "../assets/slide2.jpg"
import slide3 from "../assets/slide3.jpg"
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Banner = () => {
  const { user } = useContext(AuthContext); // Access user from AuthContext
    const navigate = useNavigate();
  const handleViewMore = () => {
    if (user) {
        navigate("/tutorials");
    } else {
      toast.error("Please log in to view more tutorials.");
    }
};
    return (
        <div>
            {/* language lab part div start */}
            <div className="">
                <div>
                    <h1 className="text-3xl py-4">Language Lab</h1>
                </div>
                <div>
                    <p className="py-5 font-light w-10/12	mx-auto">
                    At Language Lab we offer a wide range of online language classes for people who are students,refugees or migrants, including those who are undocumented.  Thanks to our members, they can join cost-free if they meet the scholarship criteria.
                    </p>
                    <img className="rounded-xl w-10/12 mx-auto" src={gd} alt="" />
                    <p className="py-5 font-light w-10/12 mx-auto text-center">New classes start every 3 months: January, April, July, and September.
                    Each cohort lasts 3 months and has 2 classes every week.</p>
                </div>
            </div> 
            {/* end of lab part */}
            {/* slider part start */}
            <div className="w-10/12 mx-auto">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                  <img
                    src={slide1}
                    className="w-full rounded-2xl" />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <button className="btn">About</button>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <img
                    src={slide2}
                    className="w-full rounded-2xl" />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <button className="btn">Success</button>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                  <img
                    src={slide3}
                    className="w-full rounded-2xl" />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <button className="btn">Extras</button>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                  </div>
                </div>
              </div>
            </div>
            {/* slider end */}
            <section className="w-11/12 mx-auto my-10 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-center mb-4">Tutorials</h2>
            
            {/* YouTube Video Section */}
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
                <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/p9PEIsOzJ5E?si=6aLtV-AtfI8KN5G2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            {/* View More Button */}
            <div className="text-center mt-6">
                <button
                    onClick={handleViewMore}
                    className="btn btn-primary text-white px-6 py-3 rounded-lg text-lg"
                >
                    View More
                </button>
            </div>
        </section>
        </div>
    );
};

export default Banner;