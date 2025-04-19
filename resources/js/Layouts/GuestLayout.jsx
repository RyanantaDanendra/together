import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import "../../css/app.css";

export default function GuestLayout({ children }) {
    return (
        <div className="guestLayout flex min-h-screen flex-col items-center justify-center px-3 xl:px-0 lg:px-0 bg-gray-100 pt-6 sm:justify-center sm:pt-0">
            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
