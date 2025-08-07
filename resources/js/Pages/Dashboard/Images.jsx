import AdminLayout from "../../myComponents/AdminLayout";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import Modal from "../../Components/Modal";

const Images = ({ images }) => {
    const [open, setOpen] = useState();
    const [preview, setPreview] = useState(null);

    const { data, setData, post, processing, errors } = useForm({
        image: null,
        _method: "POST",
    });

    const display = images.map((image, data) => {
        return (
            <tr className="h-56">
                <td>{image.id}</td>
                <td className="flex justify-center items-center">
                    <div className="image-wrapper w-32 h-32 mt-10">
                        <img
                            src={`../storage/${image?.image}`}
                            alt={image.image}
                            className="w-full object-cover"
                        />
                    </div>
                </td>
            </tr>
        );
    });

    const openModal = () => {
        setOpen(true);
    };
    const closeModal = () => {
        setOpen(false);
    };

    const handleImageChange = (e) => {
        setPreview(URL.createObjectURL(e.target.files[0]));
        setData("image", e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", data.image);

        post(route("upload.image"), formData, {
            forceFormData: true,
        });

        setOpen(false);
    };

    return (
        <AdminLayout>
            <Modal show={open} closeable={true} onClose={() => closeModal()}>
                <h1 className="text-center">ADD IMAGE</h1>
                <form action="" onSubmit={handleSubmit}>
                    <div className="flex justify-center flex-col items-center mt-5 pb-12">
                        <div className="w-64 h-64 bg-transparent border-2 border-black">
                            <img
                                src={data.image !== null ? preview : null}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <input
                            type="file"
                            name="image"
                            id="image"
                            onChange={handleImageChange}
                            className="mt-5 ms-20"
                        />
                        <button
                            type="submit"
                            className="mt-5 px-8 py-3 text-white"
                            style={{ backgroundColor: "#7F00FF80" }}
                        >
                            Add
                        </button>
                    </div>
                </form>
            </Modal>
            <div className="usersDashboard-container w-full flex justify-center text-white mt-40">
                <div>
                    <button onClick={() => openModal()}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                            className="w-12"
                        >
                            <path
                                fill="#ffffff"
                                d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM296 408L296 344L232 344C218.7 344 208 333.3 208 320C208 306.7 218.7 296 232 296L296 296L296 232C296 218.7 306.7 208 320 208C333.3 208 344 218.7 344 232L344 296L408 296C421.3 296 432 306.7 432 320C432 333.3 421.3 344 408 344L344 344L344 408C344 421.3 333.3 432 320 432C306.7 432 296 421.3 296 408z"
                            />
                        </svg>
                    </button>
                </div>
                <div className="ps-72">
                    <table>
                        <thead>
                            <tr className="border-b-2 border-b-white">
                                <th className="pe-10 text-2xl font-bold">
                                    Id{" "}
                                </th>
                                <th className="pe-10 text-2xl font-bold">
                                    Image{" "}
                                </th>
                            </tr>
                        </thead>
                        <tbody>{display}</tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
};
export default Images;
