import { Head, Link } from "@inertiajs/react";
import "../../css/app.css";
import Layout from "../myComponents/Layout";
import About from "../Sections/About";
import Gallery from "../Sections/Gallery";
import Footer from "../myComponents/Footer";
import Logo from "../../assets/logo.png";
import Swal from "sweetalert2";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
    success,
    notAttend,
    bought,
    paid,
    orderAttendence,
}) {
    if (success) {
        Swal.fire({
            title: "Success",
            text: "Ticket Paid Successfully!",
            icon: "success",
        });
    }

    if (notAttend) {
        Swal.fire({
            title: "Success",
            text: notAttend,
            icon: "success",
        });
    }

    return (
        <Layout bought={bought} paid={paid} orderAttendence={orderAttendence}>
            <div
                id="Home"
                className="landing-container w-full pt-56 h-80 text-white lg:pt-40"
            >
                <h1 className="text-center font-extrabold text-2xl lg:text-5xl tracking-[1rem]">
                    TOGETHER
                </h1>
                <h2 className="text-center mt-3 text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                </h2>
                <h2 className="text-center mt-2 text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugiat, saepe?
                </h2>
                <div className="landing-image flex justify-center mt-56 p-0 w-full">
                    <div className="landingImage-wrapper w-56lg:w-72">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="w-full h-full object-cover"
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
