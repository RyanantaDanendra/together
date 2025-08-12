import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../myComponents/Layout";
import Modal from "../Components/Modal";
import FileSaver from "file-saver";
import { saveAs } from "file-saver";
import { image, p } from "framer-motion/client";

const Images = ({ images }) => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [modalIndex, setModalIndex] = useState(null);

    // IMAGE URL
    const baseURL = "../storage/";
    const imageURL = `${baseURL}${images[modalIndex]?.image}`;
    const fileName = images[modalIndex]?.image.split("/").pop();

    const downlloadImage = async (url, fileName) => {
        const response = await fetch(url);
        const blob = await response.blob();
        saveAs(url, fileName);
    };

    // useEffect for setting modal index
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const indexUrl = params.get("index");

        if (indexUrl !== null) {
            setModalIndex(indexUrl);
        }
    }, [location.search]);

    const openModal = (index) => {
        setModalIndex(index);
        setOpen(true);
        navigate(`?index=${index}`, { replace: false });
    };

    const closeModal = () => {
        setModalIndex(null);
        setOpen(false);
        navigate("", { replace: false });
    };

    const displayImage = images.map((image, index) => {
        return (
            <>
                <div className="image w-64 h-64 hover:cursor-pointer hover:opacity-70">
                    <img
                        onClick={() => openModal(index)}
                        key={index}
                        src={`../storage/${image?.image}`}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
            </>
        );
    });

    return (
        <Layout>
            <div className="container w-full h-screen pt-32">
                <div className="flex justify-center flex-wrap gap-3 lg:px-32">
                    {images.length > 0 ? (
                        { displayImage }
                    ) : (
                        <p className="text-white">No Image Yet!</p>
                    )}
                </div>
            </div>
            <Modal show={open} closeable={true} onClose={() => closeModal()}>
                <div className="flex justify-center items-center py-12 flex-col">
                    <div className="image-wrapper w-64 h-64">
                        <img
                            src={`../storage/${images[modalIndex]?.image}`}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <button
                        className="mt-8"
                        onClick={() => downlloadImage(imageURL, fileName)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                            className="w-10"
                        >
                            <path d="M352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 306.7L246.6 265.3C234.1 252.8 213.8 252.8 201.3 265.3C188.8 277.8 188.8 298.1 201.3 310.6L297.3 406.6C309.8 419.1 330.1 419.1 342.6 406.6L438.6 310.6C451.1 298.1 451.1 277.8 438.6 265.3C426.1 252.8 405.8 252.8 393.3 265.3L352 306.7L352 96zM160 384C124.7 384 96 412.7 96 448L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 448C544 412.7 515.3 384 480 384L433.1 384L376.5 440.6C345.3 471.8 294.6 471.8 263.4 440.6L206.9 384L160 384zM464 440C477.3 440 488 450.7 488 464C488 477.3 477.3 488 464 488C450.7 488 440 477.3 440 464C440 450.7 450.7 440 464 440z" />
                        </svg>
                    </button>
                </div>
            </Modal>
        </Layout>
    );
};
export default Images;
