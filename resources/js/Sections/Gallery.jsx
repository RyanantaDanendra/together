import { useState, useEffect } from "react";
import Left1 from "../../assets/about_image.jpg";

const Gallery = () => {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffsetY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const displayLeftImages = () => {
        const leftImages = [Left1, Left1, Left1];

        return leftImages.map((image, index) => {
            return (
                <div
                    className="galleryLeftImage-wrapper w-64 h-64 mt-10"
                    key={index}
                >
                    <img
                        src={image}
                        alt={image}
                        className="w-full h-full object-cover"
                    />
                </div>
            );
        });
    };

    const displayRightImages = () => {
        const images = [Left1, Left1, Left1];

        return images.map((image, index) => {
            return (
                <div
                    className="galleryLeftImage-wrapper w-64 h-64 mt-10"
                    key={index}
                >
                    <img
                        src={image}
                        alt={image}
                        className="w-full h-full object-cover"
                    />
                </div>
            );
        });
    };

    return (
        <div
            id="Gallery"
            className="About-container w-full h-screen flex ps-32"
        >
            <div className="gallery-images w-2/4 flex">
                <div
                    className="leftImages-wrapper w-72 h-screen"
                    style={{ transform: `translateY(${offsetY * 0.1}px)` }}
                >
                    {displayLeftImages()}
                </div>
                <div
                    className="rightImages-wrapper w-72 h-screen pt-32"
                    style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
                >
                    {displayRightImages()}
                </div>
            </div>
            <div className="gallery-text pt-96 w-2/4 ps-12">
                <h1 className="text-5xl font-bold">Gallery</h1>
                <p className="text-l mt-5">
                    Take a look at our previous Gathering
                </p>
            </div>
        </div>
    );
};
export default Gallery;
