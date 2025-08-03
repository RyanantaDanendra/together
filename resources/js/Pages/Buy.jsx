import { useState, useEffect } from "react";
import { useForm, usePage } from "@inertiajs/react";
import Layout from "../myComponents/Layout";
import "../../css/app.css";
import Swal from "sweetalert2";
import { div } from "framer-motion/client";
import { motion } from "framer-motion";

const Buy = ({ bought, orderAttendence }) => {
    // declare the form variables
    const { data, setData, post, processing, errors } = useForm({
        attendence: "",
    });

    const [select, setSelect] = useState(false);

    const trackSelected = (val) => {
        setSelect(val);
    };

    // form submition
    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("order")),
            {
                onSuccess: () => {
                    Swal.fire({
                        title: "Success",
                        text: "Ticket Booked Successfully!",
                        icon: "success",
                    });
                },
            };
    };

    return (
        <Layout bought={bought} orderAttendence={orderAttendence}>
            {!bought ? (
                <div className="Buy-container w-full h-screen flex justify-center items-center lg:px-3">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="form-wrapper min-w-96 xl:w-1/2 md:w-1/2 min-h-0 rounded-lg bg-white shadow-md"
                    >
                        <div className="form">
                            <form onSubmit={handleSubmit}>
                                <h2 className="text-xl text-center mt-7">
                                    RSVP
                                </h2>
                                <ul className="mt-10 w-full ms-12">
                                    <li>
                                        <p className="text-l pb-5">
                                            Will you attend the gathering?
                                        </p>
                                        <label htmlFor="yes">Yes</label>
                                        <input
                                            type="radio"
                                            name="attendece"
                                            id="yes"
                                            value="yes"
                                            checked={data.attendence == "yes"}
                                            onClick={() => trackSelected(false)}
                                            onChange={(e) =>
                                                setData(
                                                    "attendence",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <label htmlFor="no" className="ms-7">
                                            No
                                        </label>
                                        <input
                                            type="radio"
                                            name="attendece"
                                            id="no"
                                            value="no"
                                            checked={data.attendence == "no"}
                                            onClick={() => trackSelected(true)}
                                            onChange={(e) =>
                                                setData(
                                                    "attendence",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </li>
                                    <li className="mt-16 mb-7">
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="text-white px-7 py-2"
                                            style={{
                                                backgroundColor: "#7F00FF90",
                                            }}
                                        >
                                            {processing
                                                ? "Booking. . ."
                                                : "Book"}
                                        </button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </motion.div>
                </div>
            ) : (
                <div className="Buy-container w-full h-screen flex justify-center items-center text-white">
                    <h1>TIcket Can Only Bought For Once!</h1>
                </div>
            )}
        </Layout>
    );
};
export default Buy;
