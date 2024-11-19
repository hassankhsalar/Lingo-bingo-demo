import Banner from "../../components/Home";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LeftNav from "../../components/LeftNav";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
import RightNav from "../../components/RightNav";

const HomeLayout = () => {
    return (
        <div className="font-poppins flex flex-col min-h-screen">
            <header>
                <Header />
            </header>

            <section className="w-11/12 mx-auto">
                <Navbar />
            </section>

            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3 flex-grow">
                <aside className="left col-span-2">
                    <LeftNav></LeftNav>
                </aside>

                <section className="col-span-7">
                    <Outlet />
                </section>

                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>
            </main>

            <section>
                <Footer />
            </section>
        </div>
    );
};

export default HomeLayout;
