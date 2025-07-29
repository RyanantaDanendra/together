import { useState, useEffect } from "react";
import "../../css/app.css";
import Left1 from "../../assets/about_image.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";

const Gallery = () => {
    return (
        <div
            id="Gallery"
            className="Gallery-container w-full min-h-screen md:min-h-0 mt-20 md:mt-40 flex flex-col-reverse xl:flex-row md:justify-start gap-6 xl:ps-28 lg:flex-row"
        >
            <div className="gallery-images w-full lg:w-2/4 flex lg:justify-center md:justify-center justify-center lg:mt-32 px-8 lg:px-0">
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
                        interval={6000}
                        infiniteLoop={true}
                    >
                        <div className="lg:w-96 lg:h-[30rem]">
                            <img
                                src={Left1}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </Carousel>
                </motion.div>
            </div>
            <div className="gallery-text w-full lg:flex lg:flex-col lg:justify-between lg:w-2/4 lg:mt-32 lg:ms-40 lg:h-[29rem]">
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
        </div>
    );
};
export default Gallery;
