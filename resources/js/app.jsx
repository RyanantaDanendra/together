import "./bootstrap";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import "../css/app.css";

createInertiaApp({
    resolve: (name) =>
        import(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx", { eager: true })
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
});
