import { Head, Link } from "@inertiajs/react";
import "../../css/app.css";
import Layout from "../myComponents/Layout";
import About from "../Sections/About";
import Gallery from "../Sections/Gallery";
import Footer from "../myComponents/Footer";
import Logo from "../../assets/logo.png";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <Layout>
            <div className="landing-container w-full h-80 text-white pt-40">
                <h1 className="text-center font-extrabold text-5xl tracking-[1rem]">
                    TOGETHER
                </h1>
                <h2 className="text-center mt-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                </h2>
                <h2 className="text-center mt-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugiat, saepe?
                </h2>
                <div className="landing-image flex justify-center m-60">
                    <div className="landingImage-wrapper w-72">
                        <img
                            src={Logo}
                            alt="KLogo"
                            className="w-full object-cover"
                        />
                    </div>
                </div>
                <About />
                <Gallery />
                <Footer />
            </div>
        </Layout>
    );
}
