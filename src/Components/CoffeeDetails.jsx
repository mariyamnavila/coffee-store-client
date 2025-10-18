import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    const { name, quantity, taste, supplier, photo, details, _id, price } = coffee
    return (
        <div className="max-w-7xl mx-auto bg-[url('./assets/back.png')]">
            {/* md:mx-60 my-20 */}
            <Link to={'/'}>
                <button className="btn bg-transparent border-none p-8 my-8 rancho text-2xl hover:bg-[#e3b577] flex text-shadow-md text-shadow-amber-700"> <FaArrowLeftLong className="mr-4" />Back to home</button>
            </Link>
            <div className="shadow-sm flex-row md:flex bg-[#d2b48c9d] justify-start items-center max-w-5xl mx-auto rounded-xl mb-[120px]">
                <div>
                    <img
                        className="w-[400px] mx-auto md:mx-16 "
                        src={photo}
                        alt={name} />
                </div>
                <div className="text-center md:text-start space-y-2.5">
                    <p><span className="font-bold">Name :</span> {name}</p>
                    <p><span className="font-bold">Quantity :</span> {quantity}</p>
                    <p><span className="font-bold">Supplier :</span> {supplier}</p>
                    <p><span className="font-bold">Taste :</span> {taste}</p>
                    <p><span className="font-bold"> Details :</span> {details}</p>
                    <p><span className="font-bold">Price :</span> {price}</p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;