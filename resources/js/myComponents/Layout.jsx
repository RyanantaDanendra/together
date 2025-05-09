import { useState, useEffect } from "react";
import React from "react";
import { router } from "@inertiajs/react";
import "../../css/app.css";
import Logo from "../../assets/logo.png";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { usePage } from "@inertiajs/react";
import { div } from "framer-motion/client";
// import { slide as Menu } from "react-burger-menu";

const Layout = ({ children, bought, paid, orderAttendence }) => {
    // varibale for storing the page path
    const { url } = usePage();

    const [dropdown, setDropDown] = useState(false);
    // state for tracking if a screen width is larger than 850
    const [screenSize, setScreenSize] = useState(false);

    useEffect(() => {
        const handleScrren = () => {
            if (window.innerWidth > 850) {
                setScreenSize(true);
            } else {
                setScreenSize(false);
            }
        };

        window.addEventListener("resize", handleScrren);

        handleScrren();

        return () => window.removeEventListener("resize", handleScrren);
    }, []);

    const openDropDown = () => {
        setDropDown((prev) => !prev);
    };

    const handleLogout = () => {
        router.post(route("logout"));
    };

    class Hamburger extends React.Component {
        showSettings(e) {
            e.preventDefault();
        }
    }

    const showMenu = () => {
        const menu = document.getElementById("menu");

        if (menu.style.right == "-100%") {
            menu.style.right = "1rem";
        } else {
            menu.style.right = "-100%";
        }
    };

    const showLinks = () => {
        if (
            url == "/" ||
            url == "/#About" ||
            url == "/#Gallery" ||
            url == "/#Home"
        ) {
            return (
                <>
                    <Link href="#About">About</Link>
                    <Link href="#Gallery">Gallery</Link>
                    {bought == false && (
                        <Link href="/buy_ticket">Buy TIcket</Link>
                    )}
                    {paid == false && bought && orderAttendence == "yes" && (
                        <Link href="/payment">Payment</Link>
                    )}
                </>
            );
        }
    };

    return (
        <div className="Layout-container w-full h-screen">
            <div className="nav-wrapper w-full h-28 fixed top-0 flex justify-between items-center text-white px-6">
                <div className="title w-14">
                    <img src={Logo} alt="" className="w-full object-cover" />
                </div>
                {screenSize ? (
                    <div className="Linkd flex gap-4">
                        <Link
                            href={
                                url == "/order" ||
                                url == "/payment" ||
                                url == "/profile/edit"
                                    ? "/"
                                    : "/#Home"
                            }
                        >
                            Home
                        </Link>
                        {showLinks()}
                        <div
                            onClick={openDropDown}
                            className="user-icon cursor-pointer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-4"
                            >
                                <path
                                    fill="#ffffff"
                                    d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
                                />
                            </svg>
                            {/* logout dropdown */}
                            {dropdown && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={
                                        dropdown
                                            ? { height: "auto", opacity: 1 }
                                            : { height: 0, opacity: 0 }
                                    }
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                    className="dropdown-wrapper ps-1 w-28 absolute right-1 top-16 bg-white text-black"
                                >
                                    <div
                                        onClick={handleLogout}
                                        className="link-wrapper h-8 flex items-center hover:bg-gray-300"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="w-4"
                                        >
                                            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                                        </svg>
                                        <p className="cursor-pointer ms-1">
                                            Logout
                                        </p>
                                    </div>
                                    <div className="link-wrapper h-8 flex items-center hover:bg-gray-300 ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                            className="w-4"
                                        >
                                            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                                        </svg>
                                        <Link
                                            href={route("profile.user.edit")}
                                            className="cursor-pointer ms-1"
                                        >
                                            Progile
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                ) : (
                    // hamburger menu
                    <div className="hamburger ">
                        <span onClick={showMenu}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-6"
                            >
                                <path
                                    fill="#ffffff"
                                    d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
                                />
                            </svg>
                        </span>
                        <div
                            id="menu"
                            className="content absolute -right-full w-48 h-72"
                            style={{ backgroundColor: "#7F00FF90" }}
                        >
                            <div className="flex flex-col">
                                <Link
                                    href={
                                        url == "/order" ||
                                        url == "/payment" ||
                                        url == "/profile/edit"
                                            ? "/"
                                            : "/#Home"
                                    }
                                    className="text-2xl"
                                >
                                    Home
                                </Link>
                                {showLinks()}
                                <div
                                    onClick={openDropDown}
                                    className="user-icon cursor-pointer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        className="w-4"
                                    >
                                        <path
                                            fill="#ffffff"
                                            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
                                        />
                                    </svg>
                                    {/* logout dropdown */}
                                    {dropdown && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={
                                                dropdown
                                                    ? {
                                                          height: "auto",
                                                          opacity: 1,
                                                      }
                                                    : { height: 0, opacity: 0 }
                                            }
                                            transition={{
                                                duration: 0.3,
                                                ease: "easeInOut",
                                            }}
                                            className="dropdown-wrapper ps-1 w-28 absolute right-1 top-16 bg-white text-black"
                                        >
                                            <div
                                                onClick={handleLogout}
                                                className="link-wrapper h-8 flex items-center hover:bg-gray-300"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    className="w-4"
                                                >
                                                    <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                                                </svg>
                                                <p className="cursor-pointer ms-1">
                                                    Logout
                                                </p>
                                            </div>
                                            <div className="link-wrapper h-8 flex items-center hover:bg-gray-300 ">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 448 512"
                                                    className="w-4"
                                                >
                                                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                                                </svg>
                                                <Link
                                                    href={route(
                                                        "profile.user.edit"
                                                    )}
                                                    className="cursor-pointer ms-1"
                                                >
                                                    Progile
                                                </Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {children}
        </div>
    );
};

export default Layout;
