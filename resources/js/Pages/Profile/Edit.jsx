import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Layout from "../../myComponents/Layout";
// import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
// import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import Swal from "sweetalert2";

export default function Edit({ mustVerifyEmail, status, success }) {
    if (success) {
        Swal.fire({
            title: "Success",
            text: success,
            icon: "success",
        });
    }

    return (
        <Layout>
            <Head title="Profile" />

            <div className="">
                <div className="w-full h-screen flex items-center space-y-6 ps-10">
                    {/* <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div> */}

                    <div
                        className=" w-3/4 p-4 shadow sm:rounded-lg sm:p-8 text-white"
                        style={{ backgroundColor: "#7F00FF90" }}
                    >
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    {/* <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <DeleteUserForm className="max-w-xl" />
                    </div> */}
                </div>
            </div>
        </Layout>
    );
}
