import { Head, Link } from "@inertiajs/react";
import "../../css/app.css";
import Layout from "../myComponents/Layout";
import About from "../Sections/About";
import Gallery from "../Sections/Gallery";
import Footer from "../myComponents/Footer";
import Logo from "../../assets/logo.png";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Countdown from "../Sections/Countdown";
import Location from "../Sections/Location";

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
                <motion.h1
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="landing-text text-center font-extrabold text-5xl lg:text-5xl tracking-[9px]"
                    style={{ fontFamily: "Inter-Bold" }}
                >
                    TOGETHER
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="landing-text text-center mt-3 text-md"
                >
                    Toward an enriching gathering of hearts and relationship{" "}
                    <br />
                    Uniting difference through togetherness with family
                </motion.h2>
                <div className="w-full flex justify-center mt-5">
                    {!bought ? (
                        <Link href="/buy_ticket">
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="px-5 py-3 rounded-md flex gap-2 "
                                style={{ backgroundColor: "#7F00FF90" }}
                            >
                                <p className="text-white">Buy Ticket</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    className="w-4"
                                >
                                    <path
                                        fill="#ffffff"
                                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                                    />
                                </svg>
                            </motion.button>
                        </Link>
                    ) : paid == false && !bought ? (
                        <Link href="/payment">
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="px-5 py-3 rounded-md flex gap-2 "
                                style={{ backgroundColor: "#7F00FF90" }}
                            >
                                <p className="text-white">Payment</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    className="w-4"
                                >
                                    <path
                                        fill="#ffffff"
                                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                                    />
                                </svg>
                            </motion.button>
                        </Link>
                    ) : null}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="landing-image flex justify-center mt-32 lg:mt-40 p-0 w-full"
                >
                    <div className="landingImage-wrapper w-48 lg:w-56">
                        <img
                            id="landing-image"
                            src={Logo}
                            alt="Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
                <About />
                <Countdown />
                <Gallery />
                <Location />
                <Footer />
            </div>
        </Layout>
    );
}
