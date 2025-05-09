import Layout from "../myComponents/Layout";
import Image from "../../assets/about_image.jpg";

const About = () => {
    return (
        <div
            id="About"
            className="About-container w-full min-h-screen md:min-h-0  lg:min-h-80 gap-10 text-white  pt-10 flex flex-col items-center md:gap-14 ps-0 md:flex-col md:items-center md:pt-3 lg:mt-72 sm:flex-col sm:items-center lg:flex-row lg:ps-32"
        >
            <div className="about-text w-2/4 pt-28">
                <h1 className="text-5xl font-bold">HEY THERE!</h1>
                <p className="text-xl text-left lg:text-justify mt-5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nemo ipsa ducimus libero nihil nesciunt? Ullam ipsa,
                    veritatis, assumenda sequi accusamus perspiciatis rerum,
                    expedita impedit consectetur necessitatibus autem. Sunt,
                    molestias in. Odit quos assumenda ad minima maxime fugit
                    illo rem dolores?
                </p>
            </div>
            <div className="about-image w-2/4 h-2/4 flex justify-center">
                <div className="aboutImage-wrapper w-96">
                    <img
                        src={Image}
                        alt="Gathering"
                        className="w-full  object-cover"
                    />
                </div>
            </div>
        </div>
    );
};
export default About;
