import { useState } from "react";
import { useForm } from "@inertiajs/react";
import Layout from "../myComponents/Layout";
import "../../css/app.css";
// import { p } from "framer-motion/client";

const Buy = () => {
    // declare the form variables
    const { data, setData, post, processing, errors } = useForm({
        attendence: "",
        allergy: "",
    });

    const [select, setSelect] = useState(false);

    const trackSelected = (val) => {
        setSelect(val);
    };
    console.log(data.attendence);

    // form submition
    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("order"));
    };

    return (
        <Layout>
            <div className="Buy-container w-full h-screen flex justify-center items-center text-white">
                <div
                    className="form-wrapper px-24"
                    style={{
                        backgroundColor: "#7F00FF90",
                        height: "30rem",
                        width: "60vw",
                    }}
                >
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-3xl text-center mt-7">RSVP</h2>
                        <ul className="mt-10">
                            <li>
                                <p className="text-xl pb-5">
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
                                        setData("attendence", e.target.value)
                                    }
                                />
                                <label htmlFor="not" className="ms-7">
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
                                        setData("attendence", e.target.value)
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
                                    required={true}
                                    className="bg-transparent border-b-white border-b-2 mt-3"
                                    disabled={select ? true : false}
                                />
                                {errors.allergy && <div>{errors.allergy}</div>}
                            </li>
                            <li className="mt-16">
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
        </Layout>
    );
};
export default Buy;
