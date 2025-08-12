import { useState, useEffect } from "react";
import "../../css/app.css";
import Left1 from "../../assets/about_image.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import galleries from "../../galleries.json";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";

const Gallery = () => {
    const displayImage = galleries.images.map((image, index) => {
        return (
            <div className="lg:w-96 lg:h-[30rem]">
                <img
                    src={image.location}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
        );
    });

    return (
        <div
            id="Gallery"
            className="Gallery-container w-full min-h-screen md:min-h-0 mt-20 md:mt-40 flex flex-col-reverse xl:flex-row md:justify-start gap-6 xl:ps-28 lg:flex-row"
        >
            <div className="gallery-images w-full lg:w-2/4 flex lg:justif-center md:justify-center justify-center lg:mt-32 px-8 lg:px-0">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="overflow-hidden md:w-96 lg:w-96 w-96"
                >
                    <Carousel
                        dynamicHeight={false}
                        autoPlay={true}
                        interval={5000}
                        infiniteLoop={true}
                    >
                        {displayImage}
                    </Carousel>
                </motion.div>
            </div>
            <div className="gallery-text w-full lg:flex lg:flex-col lg:justify-between lg:w-2/4 lg:mt-32 lg:ms-40 lg:h-[29rem]">
                <div>
                    <motion.h1
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-5xl font-bold text-center lg:text-left "
                        style={{ fontFamily: "Inter-Bold" }}
                    >
                        Gallery
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-l mt-5 text-center lg:text-left text-xl"
                    >
                        Take a look at our previous Gathering
                    </motion.p>
                </div>
                <a href="/batch19images">
                    <div className="flex items-center gap-2 hover:underline justify-center lg:justify-start mt-3">
                        <p className="text-blue-500 hover:underline ">
                            Batch 19
                        </p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                            className="w-4"
                        >
                            <path
                                fill="#3b82f6"
                                d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
                            />
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    );
};
export default Gallery;
