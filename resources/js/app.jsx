import "./bootstrap";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import "../css/app.css";
import { BrowserRouter } from "react-router-dom";

const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });

createInertiaApp({
    resolve: (name) => {
        const file = `./Pages/${name}.jsx`; // build the path from the Inertia name
        if (!pages[file]) {
            throw new Error(`Page not found in Vite manifest: ${file}`);
        }
        return pages[file];
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <BrowserRouter>
                <App {...props} />
            </BrowserRouter>
        );
    },
});
