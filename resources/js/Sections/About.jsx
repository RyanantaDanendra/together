import Layout from "../myComponents/Layout";
import Image from "../../assets/about_image.jpg";

const About = () => {
    return (
        <div
            id="About"
            className="About-container w-full h-screen text-white ps-32 pt-10 flex "
        >
            <div className="about-text w-2/4 pt-24">
                <h1 className="text-5xl font-bold">HEY THERE!</h1>
                <p className="text-xl text-justify mt-5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nemo ipsa ducimus libero nihil nesciunt? Ullam ipsa,
                    veritatis, assumenda sequi accusamus perspiciatis rerum,
                    expedita impedit consectetur necessitatibus autem. Sunt,
                    molestias in. Odit quos assumenda ad minima maxime fugit
                    illo rem dolores?
                </p>
            </div>
            <div className="about-image w-2/4 flex justify-center">
                <div
                    className="aboutImage-wrapper w-96"
                    style={{ height: "30rem" }}
                >
                    <img
                        src={Image}
                        alt="Gathering"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};
export default About;
