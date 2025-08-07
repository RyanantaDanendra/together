import { useRef } from "react";
import Layout from "../myComponents/Layout";
import Image from "../../../public/Gallery/foto11.jpg";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const About = () => {
    return (
        <motion.div
            id="About"
            className="About-container w-full min-h-screen md:min-h-0  lg:min-h-screen gap-10 text-white  pt-10 flex flex-col items-center md:gap-14 ps-0 md:flex-col md:items-center md:pt-3 lg:mt-72 sm:flex-col sm:items-center lg:flex-row lg:ps-32"
            // style={{ backgroundColor: background }}
        >
            <div className="about-text flex flex-col lg:h-[30rem] lg:justify-start w-2/4 pt-28 lg:pt-0">
                <motion.h1
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-5xl"
                    style={{ fontFamily: "Inter-Bold" }}
                >
                    Get To Know Us
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-xl lg:mt-12 mt-5 text-justify"
                >
                    TOGETHER to celebrate their shared history and create
                    lasting memories. The central idea is to foster a sense of
                    togetherness, emphasizing the importance of family bonds.
                    Shared activities, quality time, and cherished traditions,
                    these gatherings strngthen family bonds. They emphasize
                    inclusivity, building lasting memories, and reflecting on
                    shared value. Ultimately, they celebrate the support, love,
                    and unity that family provides, reminding everyone of their
                    importance in each other's lives.
                </motion.p>
            </div>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className="about-image w-full lg:w-2/4 px-8 h-2/4 flex justify-center lg:justify-start lg:ms-16 lg:mt-12"
            >
                <div className="aboutImage-wrapper w-96">
                    <img
                        src={Image}
                        alt="Gathering"
                        className="w-full object-cover"
                        style={{ height: "30rem" }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};
export default About;
