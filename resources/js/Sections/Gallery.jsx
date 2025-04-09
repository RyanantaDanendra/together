import { useState, useEffect } from "react";
import Left1 from "../../assets/about_image.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Gallery = () => {
    // const [offsetY, setOffsetY] = useState(0);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setOffsetY(window.scrollY);
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    // const displayLeftImages = () => {
    //     const leftImages = [Left1, Left1, Left1];

    //     return leftImages.map((image, index) => {
    //         return (
    //             <div
    //                 className="galleryLeftImage-wrapper w-64 h-64 mt-10"
    //                 key={index}
    //             >
    //                 <img
    //                     src={image}
    //                     alt={image}
    //                     className="w-full h-full object-cover"
    //                 />
    //             </div>
    //         );
    //     });
    // };

    // const displayRightImages = () => {
    //     const images = [Left1, Left1, Left1];

    //     return images.map((image, index) => {
    //         return (
    //             <div
    //                 className="galleryLeftImage-wrapper w-64 h-64 mt-10"
    //                 key={index}
    //             >
    //                 <img
    //                     src={image}
    //                     alt={image}
    //                     className="w-full h-full object-cover"
    //                 />
    //             </div>
    //         );
    //     });
    // };

    return (
        <div
            id="Gallery"
            className="About-container w-full h-screen flex flex-col-reverse lg:ps-28"
            style={{ marginTop: "40rem" }}
        >
            <div className="gallery-images w-full lg:w-2/4 flex mt-24 lg:mt-32 px-10">
                <div className="overflow-hidden ">
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
            <div className="gallery-text w-full lg:w-2/4 lg:ps-12">
                <h1 className="text-5xl font-bold mt-06 text-center">
                    Gallery
                </h1>
                <p className="text-l mt-5 text-center">
                    Take a look at our previous Gathering
                </p>
            </div>
        </div>
    );
};
export default Gallery;
