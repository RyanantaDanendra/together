import { useState, useEffect } from "react";
import "../../css/app.css";
import Left1 from "../../assets/about_image.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Gallery = () => {
    return (
        <div
            id="Gallery"
            className="Gallery-container w-full min-h-screen md:min-h-0 mt-20 md:mt-40 flex flex-col-reverse xl:flex-row md:justify-start gap-6 xl:ps-28"
        >
            <div className="gallery-images w-full xl:w-2/4 flex lg:justify-center md:justify-center justify-center lg:mt-32 px-10">
                <div className="overflow-hidden md:w-96 lg:w-96 w-96">
                    <Carousel
                        dynamicHeight={false}
                        autoPlay={true}
                        interval={6000}
                        infiniteLoop={true}
                    >
                        <div style={{ width: "34rem", height: "26rem" }}>
                            <img
                                src={Left1}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className="gallery-text w-full xl:w-2/4 xl:mt-72">
                <h1 className="text-5xl font-bold mt-06 text-center xl:text-left">
                    Gallery
                </h1>
                <p className="text-l mt-5 text-center xl:text-left">
                    Take a look at our previous Gathering
                </p>
            </div>
        </div>
    );
};
export default Gallery;
