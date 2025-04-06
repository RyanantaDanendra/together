import { tr } from "framer-motion/client";
import AdminLayout from "../../myComponents/AdminLayout";

const Users = ({ users }) => {
    const displayUser = () => {
        return users.map((user, index) => {
            return (
                <tr
                    key={index}
                    style={{ borderBottom: ".5px solid #FFFFFF60" }}
                >
                    <td className="pe-10 text-xl">{user.id}</td>
                    <td className="pe-10 text-xl">{user.name}</td>
                    <td className="text-xl">{user.email}</td>
                </tr>
            );
        });
    };

    return (
        <AdminLayout>
            <div className="usersDashboard-container w-full flex justify-center  ps-5 pt-5 text-white mt-40">
                <div>
                    <table>
                        <thead>
                            <tr className="border-b-2 border-b-white">
                                <th className="pe-10 text-2xl font-bold">
                                    Id{" "}
                                </th>
                                <th className="pe-10 text-2xl font-bold">
                                    Name{" "}
                                </th>
                                <th className=" text-2xl font-bold">Email </th>
                            </tr>
                        </thead>
                        <tbody>{displayUser()}</tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
};
export default Users;
