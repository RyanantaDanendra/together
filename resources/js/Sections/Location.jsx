import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import "../../css/app.css";

const Location = () => {
    // variable for event location
    const position = [-8.655623318952083, 115.25404882709456];

    return (
        <div className="location-container mt-32">
            <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true, amount: 1 }}
                className="text-center text-5xl"
                style={{ fontFamily: "Inter-Bold" }}
            >
                See You at the Spot
            </motion.h1>
            <div className="flex mt-28 px-32">
                <div className="w-1/2 flex justify-end">
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <MapContainer
                            center={position}
                            zoom={13}
                            scrollWheelZoom={false}
                            className="h-[26rem] w-[26rem]"
                        >
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={position}>
                                <Popup>Location</Popup>
                            </Marker>
                        </MapContainer>
                    </motion.div>
                </div>
                <div className="text w-1/2 ps-28">
                    <h3 className="text-xl">
                        Adress: <br />
                    </h3>
                    <h1 className="text-2xl font-bold mt-2">
                        Big Garden Corner
                    </h1>
                    <h2 className="pb-12 ">
                        Sanur, Jl. Bypass Ngurah Rai, Kesiman, Denpasar Selatan,
                        Kota Denpasar, Bali 80237
                    </h2>
                    <motion.a
                        href="https://www.google.com/maps/place/Big+Garden+Corner/@-8.6563085,115.2406565,13.93z/data=!4m6!3m5!1s0x2dd24071d99200c3:0x6b8b5fe4aa9162c0!8m2!3d-8.6568602!4d115.253657!16s%2Fg%2F11c0pyr1_h?entry=ttu&g_ep=EgoyMDI1MDgwMy4wIKXMDSoASAFQAw%3D%3D"
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <div className="flex hover:text-sky-300 hover:underline">
                            Google Maps
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                                className="w-4"
                            >
                                <path
                                    fill="#ffffff"
                                    d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"
                                />
                            </svg>
                        </div>
                    </motion.a>
                </div>
            </div>
        </div>
    );
};

export default Location;
