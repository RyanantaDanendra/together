import { div, tr } from "framer-motion/client";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import AdminLayout from "../../myComponents/AdminLayout";
import Modal from "../../Components/Modal";
import Swal from "sweetalert2";

const Orders = ({ orders, success, updateSuccess }) => {
    if (success) {
        Swal.fire({
            title: "Success",
            text: success,
            icon: "success",
        });
    }
    if (updateSuccess) {
        Swal.fire({
            title: "Success",
            text: updateSuccess,
            icon: "success",
        });
    }

    const [selectedOrder, setSelectedOrder] = useState(null);
    const [attendenceRadio, setAttendenceRadio] = useState("");
    const [activeModal, setActiveModal] = useState(null);

    // variables for update function
    const { data, setData, put, processing, errors } = useForm({
        attendence: "",
    });

    const {
        data: allergyData,
        setData: setAllergyData,
        put: update,
        processing: processing_allergy,
        errors: errors_allergy,
    } = useForm({
        allergy: "",
    });
    // const [open, setOpen] = useState(false);

    const handleOpen = (order) => {
        setSelectedOrder(order);
        setAttendenceRadio(order.attendence);
    };

    const handleClose = () => {
        setSelectedOrder(null);
        setActiveModal(null);
    };

    const handleUpdate = (e, id) => {
        e.preventDefault();

        put(`/dashboard/update/${id}`);

        setSelectedOrder(null);
    };

    const handleAdd = (e, id) => {
        e.preventDefault();

        update(`/dashboard/add/${id}`);

        setSelectedOrder(null);
    };

    const plusButton = (order) => {
        const allergyEmpty =
            order.allergy === null ||
            order.allergy === undefined ||
            order.allergy?.trim() === "";

        if (order.attendence == "yes" && allergyEmpty) {
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-6 inline-block ms-2"
                    onClick={() => [
                        handleOpen(order),
                        setActiveModal("addModal"),
                    ]}
                >
                    <path
                        fill="#ffffff"
                        d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
                    />
                </svg>
            );
        }
    };

    const displayOrder = () => {
        return orders.map((order, index) => {
            return (
                <tr key={index} style={{ borderBottom: "1px solid #FFFFFF80" }}>
                    <td className="pe-10 py-4 text-xl">{order.id}</td>
                    <td className="pe-14 text-xl">{order.user.name}</td>
                    <td className="pe-10 text-xl flex justify-center items-center gap-3">
                        <p className="mt-3">{order.attendence}</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-6 mt-3"
                            onClick={() => [
                                handleOpen(order),
                                setActiveModal("updateModal"),
                            ]}
                        >
                            <path
                                fill="#ffffff"
                                d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"
                            />
                        </svg>
                    </td>
                    <td className="pe-10 text-xl">
                        <p className="inline-block ms-3">{order.allergy}</p>
                        {plusButton(order)}
                    </td>
                </tr>
            );
        });
    };

    return (
        <AdminLayout>
            <div className="orders-container w-full h-full flex justify-center mt-40  text-white">
                <div className="ms-72">
                    <table>
                        <thead>
                            <tr style={{ borderBottom: "1px solid #FFFFFF" }}>
                                <th className="pe-10 text-2xl font-bold">Id</th>
                                <th className="pe-10 text-2xl font-bold">
                                    Name
                                </th>
                                <th className="pe-14 text-2xl font-bold">
                                    Attendence
                                </th>
                                <th className="pe-10 text-2xl font-bold">
                                    Allergy
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayOrder()}
                            {/* attenedence modal */}
                            <Modal
                                show={
                                    !!selectedOrder &&
                                    activeModal == "updateModal"
                                }
                                onClose={handleClose}
                            >
                                <h1 className="text-center">
                                    Update Attendence
                                </h1>
                                <form
                                    onSubmit={(e) =>
                                        handleUpdate(e, selectedOrder?.id)
                                    }
                                >
                                    <div className="form-content flex flex-col items-center justify-center">
                                        <div>
                                            <label htmlFor="attendence">
                                                Yes
                                            </label>
                                            <input
                                                type="radio"
                                                name="attendence"
                                                id="attendence"
                                                value="yes"
                                                checked={
                                                    attendenceRadio == "yes"
                                                }
                                                onChange={(e) => [
                                                    setData(
                                                        "attendence",
                                                        e.target.value
                                                    ),
                                                    setAttendenceRadio(
                                                        e.target.value
                                                    ),
                                                ]}
                                            />
                                            <label htmlFor="attendence">
                                                No
                                            </label>
                                            <input
                                                type="radio"
                                                name="attendence"
                                                id="attendence"
                                                value="no"
                                                checked={
                                                    attendenceRadio == "no"
                                                }
                                                onChange={(e) => [
                                                    setData(
                                                        "attendence",
                                                        e.target.value
                                                    ),
                                                    setAttendenceRadio(
                                                        e.target.value
                                                    ),
                                                ]}
                                            />
                                        </div>
                                        <button type="submit">Update</button>
                                    </div>
                                </form>
                            </Modal>

                            {/* allergy add modal */}
                            <Modal
                                show={
                                    !!selectedOrder && activeModal == "addModal"
                                }
                                onClose={handleClose}
                            >
                                <h1 className="text-center">Add Allergy</h1>
                                <div className="form-content flex justify-center mt-4 pb-3">
                                    <form
                                        onSubmit={(e) =>
                                            handleAdd(e, selectedOrder?.id)
                                        }
                                    >
                                        <input
                                            type="text"
                                            placeholder="Enter The Allergy. . ."
                                            name="allergy"
                                            id="allergy"
                                            value={allergyData?.allergy}
                                            onChange={(e) =>
                                                setAllergyData(
                                                    "allergy",
                                                    e.target.value
                                                )
                                            }
                                            className="block border-b-2 border-b-black"
                                        />
                                        <button type="Submit" className="mt-2">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </Modal>
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
};
export default Orders;
