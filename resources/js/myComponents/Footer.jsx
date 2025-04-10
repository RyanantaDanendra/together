const Footer = () => {
    return (
        <div
            className="Footer-container w-full h-96 lg:ps-20 pt-20 flex gap-10 items-end pb-5"
            // style={{ marginTop: "40rem" }}
        >
            <div className="title w-2/4">
                <h1 className="text-xl tracking-[8px] font-extrabold">
                    TOGETHER
                </h1>
            </div>
            <div className="socials w-2/4 flex gap-2 justify-end">
                <div className="social-wrapper flex items-center gap-3">
                    <div className="social border-white border-2 w-10 h-10 rounded-full flex justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-5"
                        >
                            <path
                                fill="#ffffff"
                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                            />
                        </svg>
                    </div>
                </div>
                <div className="social-wrapper flex items-center gap-3">
                    <div className="social border-white border-2 w-10 h-10 rounded-full flex justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-5"
                        >
                            <path
                                fill="#ffffff"
                                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                            />
                        </svg>
                    </div>
                </div>
                <div className="social-wrapper flex items-center gap-3">
                    <div className="social border-white border-2 w-10 h-10 rounded-full flex justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            className="w-5"
                        >
                            <path
                                fill="#ffffff"
                                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
