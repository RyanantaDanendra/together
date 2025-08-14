import "./bootstrap";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import "../css/app.css";
import { BrowserRouter } from "react-router-dom";

const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });

function resolvePage(name) {
    // Build possible key variations
    const key1 = `./Pages/${name}.jsx`; // normal
    const key2 = `./Pages/${name}/index.jsx`; // if nested index
    if (pages[key1]) return pages[key1];
    if (pages[key2]) return pages[key2];
    throw new Error(`Page not found in Vite manifest: ${key1} or ${key2}`);
}

createInertiaApp({
    resolve: resolvePage,
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <BrowserRouter>
                <App {...props} />
            </BrowserRouter>
        );
    },
});
