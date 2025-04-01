import { useState, useEffect } from "react";
import { router } from "@inertiajs/react";
import "../../css/app.css";
import Logo from "../../assets/logo.png";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { usePage } from "@inertiajs/react";
import { div } from "framer-motion/client";

const Layout = ({ children }) => {
    // varibale for storing the page path
    const { url } = usePage();

    const [dropdown, setDropDown] = useState(false);

    const openDropDown = () => {
        setDropDown((prev) => !prev);
    };

    const handleLogout = () => {
        router.post(route("logout"));
    };

    return (
        <div className="Layout-container w-full h-screen">
            <div className="nav-wrapper w-full h-28 fixed top-0 flex justify-between items-center text-white px-6">
                <div className="title w-14">
                    <img src={Logo} alt="" className="w-full object-cover" />
                </div>
                <div className="Linkd flex gap-4">
                    <Link href="/">Home</Link>
                    {url == "/" && (
                        <>
                            <Link href="#About">About</Link>
                            <Link href="#Gallery">Gallery</Link>
                        </>
                    )}
                    <Link href="/buy_ticket">Buy TIcket</Link>
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
            </div>
            {children}
        </div>
    );
};

export default Layout;
