import { div } from "framer-motion/client";
import AdminLayout from "../../myComponents/AdminLayout";

const Orders = ({ orders }) => {
    console.log(orders);

    const displayOrder = () => {
        return orders.map((order, index) => {
            return (
                <div>
                    <p>{order.id}</p>
                </div>
            );
        });
    };
    return (
        <AdminLayout>
            <div className="orders-container w-full text-white">
                <h1>Hello</h1>
                {displayOrder()}
            </div>
        </AdminLayout>
    );
};
export default Orders;
