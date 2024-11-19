import gd from "../assets/gd.jpg"
import slide1 from "../assets/slide1.jpg"
import slide2 from "../assets/slide2.jpg"
import slide3 from "../assets/slide3.jpg"

const Banner = () => {
    return (
        <div>
            {/* language lab part div start */}
            <div className="">
                <div>
                    <h1 className="text-3xl py-4">Language Lab</h1>
                </div>
                <div>
                    <p className="py-5 font-light	">
                    At Language Lab we offer a wide range of online language classes for people who are students,refugees or migrants, including those who are undocumented.  Thanks to our members, they can join cost-free if they meet the scholarship criteria.
                    </p>
                    <img className="rounded-xl w-10/12 mx-auto" src={gd} alt="" />
                    <p className="py-5 font-light	">New classes start every 3 months: January, April, July, and September.
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
      <a href="#slide4" className="btn btn-circle">❮</a>
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
            
        </div>
    );
};

export default Banner;