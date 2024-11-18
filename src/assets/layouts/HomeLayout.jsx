import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

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
                <aside className="left col-span-3">
                    left nav
                </aside>

                <section className="col-span-7">
                    Main section
                </section>

                <aside className="col-span-2">
                    right nav
                </aside>
            </main>

            <section>
                <Footer />
            </section>
        </div>
    );
};

export default HomeLayout;
