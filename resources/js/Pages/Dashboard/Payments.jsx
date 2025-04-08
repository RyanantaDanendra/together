import { tr } from "framer-motion/client";
import AdminLayout from "../../myComponents/AdminLayout";

const Payments = ({ payments }) => {
    const displayPayment = payments.map((payment, index) => {
        return (
            <tr className="h-56">
                <td>{payment.id}</td>
                <td>{payment.user?.name}</td>
                <td>
                    <div className="image-wrapper w-32 h-32">
                        <img
                            src={`../storage/${payment?.image}`}
                            alt={payment.image}
                            className="w-full object-cover"
                        />
                    </div>
                </td>
            </tr>
        );
    });

    return (
        <AdminLayout>
            <div className="Payments-container w-full flex justify-center mt-40 text-white">
                <div className="ms-72">
                    <table>
                        <thead>
                            <tr>
                                <th className="pe-10 text-2xl font-bold">Id</th>
                                <th className="pe-10 text-2xl font-bold">
                                    Name
                                </th>
                                <th className="pe-10 text-2xl font-bold">
                                    Reciept
                                </th>
                            </tr>
                        </thead>
                        <tbody>{displayPayment}</tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
};
export default Payments;
