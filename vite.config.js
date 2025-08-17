import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/css/app.css",
                "resources/js/app.jsx",
                "resources/js/Pages/Auth/Login.jsx",
                "resources/js/Pages/Auth/Register.jsx",
                "resources/js/Pages/Dashboard.jsx",
                "resources/js/Pages/Welcome.jsx",
                "resources/js/Pages/Profile/Edit.jsx",
                "resources/js/Pages/Dashboard/Images.jsx",
                "resources/js/Pages/Dashboard/Orders.jsx",
                "resources/js/Pages/Dashboard/Payments.jsx",
                "resources/js/Pages/Dashboard/Users.jsx",
                "resources/js/Pages/Images.jsx",
            ],
            refresh: true,
        }),
        react(),
    ],
    assetsInclude: ["**/*.JPG"],
});
