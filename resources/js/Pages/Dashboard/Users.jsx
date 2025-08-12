import { tr } from "framer-motion/client";
import AdminLayout from "../../myComponents/AdminLayout";

const Users = ({ users, auth }) => {
    const displayUser = () => {
        return users.map((user, index) => {
            return (
                <tr
                    key={index}
                    style={{ borderBottom: ".5px solid #FFFFFF60" }}
                >
                    <td className="lg:pe-10 lg:p-4 lg:text-xl text-xs pe-3">
                        {user.id}
                    </td>
                    <td className="lg:pe-10 lg:text-xl text-xs pe-3">
                        {user.name}
                    </td>
                    <td className="lg:pe-10 lg:text-xl text-xs pe-3">
                        {user.phone}
                    </td>
                    <td className="lg:text-xl text-xs pe-3">{user.email}</td>
                </tr>
            );
        });
    };

    if (auth.user.as == "admin") {
        return (
            <AdminLayout>
                <div className="usersDashboard-container w-full flex justify-center text-white mt-40">
                    <div className="lg:ms-72">
                        <table className="lg:px-0 px-82">
                            <thead>
                                <tr className="border-b-2 border-b-white">
                                    <th className="lg:pe-10 lg:text-2xl font-bold">
                                        Id{" "}
                                    </th>
                                    <th className="lg:pe-10 lg:text-2xl font-bold">
                                        Name{" "}
                                    </th>
                                    <th className="lg:pe-10 lg:text-2xl font-bold">
                                        Phone{" "}
                                    </th>
                                    <th className=" lg:text-2xl font-bold">
                                        Email{" "}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>{displayUser()}</tbody>
                        </table>
                    </div>
                </div>
            </AdminLayout>
        );
    } else {
        return (
            <h1 className="text-center text-white text-xl mt-32">
                Access Denied!
            </h1>
        );
    }
};
export default Users;
