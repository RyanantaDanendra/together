import { useState } from "react";
import Layout from "../myComponents/Layout";

const Buy = () => {
    const [select, setSelect] = useState(false);

    const trackSelected = (val) => {
        setSelect(val);
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
                    <form action="">
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
                                    onClick={() => trackSelected(false)}
                                />
                                <label htmlFor="not" className="ms-7">
                                    No
                                </label>
                                <input
                                    type="radio"
                                    name="attendece"
                                    id="not"
                                    value="not"
                                    onClick={() => trackSelected(true)}
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
                                    className="bg-transparent border-b-white border-b-2 mt-3"
                                    disabled={select ? true : false}
                                />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </Layout>
    );
};
export default Buy;
