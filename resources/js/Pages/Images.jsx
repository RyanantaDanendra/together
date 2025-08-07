import Layout from "../myComponents/Layout";

const Images = ({ images }) => {
    const displayImage = images.map((image, index) => {
        return (
            <div className="image w-64 h-64">
                <img
                    src={`../storage/${image?.image}`}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
        );
    });

    return (
        <Layout>
            <div className="container w-full h-screen pt-32">
                <div className="flex justify-center">{displayImage}</div>
            </div>
        </Layout>
    );
};
export default Images;
