import { useState, useEffect } from "react";
import { useForm, usePage } from "@inertiajs/react";
import Layout from "../myComponents/Layout";
import "../../css/app.css";
import Swal from "sweetalert2";
import { div } from "framer-motion/client";

const Buy = ({ bought, orderAttendence }) => {
    // declare the form variables
    const { data, setData, post, processing, errors } = useForm({
        attendence: "",
        allergy: "",
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
            {bought == false ? (
                <div className="Buy-container w-full h-screen flex justify-center items-center text-white lg:px-3">
                    <div
                        className="form-wrapper min-w-96 xl:w-1/2 md:w-1/2 min-h-0 ps-6 xl:ps-12"
                        style={{
                            backgroundColor: "#7F00FF90",
                        }}
                    >
                        <form onSubmit={handleSubmit}>
                            <h2 className="text-xl text-center mt-7">RSVP</h2>
                            <ul className="mt-10 w-full">
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
                                <li className="mt-10">
                                    <label htmlFor="Allergy" className="block">
                                        Allergy:
                                    </label>
                                    <input
                                        type="text"
                                        name="allergy"
                                        id="allergy"
                                        value={data.allergy}
                                        onChange={(e) =>
                                            setData("allergy", e.target.value)
                                        }
                                        // required={true}
                                        className="bg-transparent border-b-white border-b-2 mt-3"
                                        disabled={select ? true : false}
                                    />
                                    {errors.allergy && (
                                        <div>{errors.allergy}</div>
                                    )}
                                </li>
                                <li className="mt-16 mb-7">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-white px-7 py-2 text-black"
                                    >
                                        {processing ? "Booking. . ." : "Book"}
                                    </button>
                                </li>
                            </ul>
                        </form>
                    </div>
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
