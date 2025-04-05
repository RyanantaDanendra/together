import { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import Layout from "../myComponents/Layout";
import Swal from "sweetalert2";

const Payment = ({ success, paid, orderAttendence }) => {
    if (success) {
        Swal.fire({
            title: "Success",
            text: "Ticket Booked Successfully!",
            icon: "success",
        });
    }

    const [preview, setPreview] = useState(null);

    const { data, setData, post, processing, errors } = useForm({
        image: null,
        _method: "POST",
    });

    const handleImageChange = (e) => {
        setPreview(URL.createObjectURL(e.target.files[0]));
        setData("image", e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", data.image);

        post(route("payment"), formData, {
            forceFormData: true,
        });
    };

    if (orderAttendence == "yes") {
        return (
            <Layout paid={paid} orderAttendence={orderAttendence}>
                {!paid ? (
                    <div className="Payment-container flex flex-col items-center gap-10 justify-center mt-32 text-white">
                        <div
                            className="qris-container w-64 h-64"
                            style={{ backgroundColor: "#7F00FF90" }}
                        >
                            <img src="" alt="" />
                        </div>
                        <p>
                            *After Making a payment please upload the reciept
                            here
                        </p>
                        <form onSubmit={handleSubmit} className="ms-24">
                            <div
                                className="reciespt-container w-64 h-64 flex justify-center"
                                style={{ backgroundColor: "#7F00FF90" }}
                            >
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
                                className="block mt-7"
                            />
                            <button
                                type="submit"
                                className="mt-6 bg-white px-4 py-2 text-black"
                            >
                                Upload
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="Payment-container flex flex-col items-center gap-10 justify-center mt-32 text-white">
                        <h1>Payment Can Only Be Done Once</h1>
                    </div>
                )}
            </Layout>
        );
    } else {
        return (
            <Layout orderAttendence={orderAttendence}>
                <div className="Payment-container flex flex-col items-center gap-10 justify-center mt-32 text-white">
                    <h1>You Dont Need To Make A payment</h1>
                </div>
            </Layout>
        );
    }
};
export default Payment;
