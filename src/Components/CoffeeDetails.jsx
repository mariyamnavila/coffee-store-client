import { useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    const { name, quantity, taste, supplier, photo, details, _id, price } = coffee
    return (
        <div className="md:mx-60 my-20">
            <div className=" bg-base-100 shadow-sm flex-row md:flex  justify-start items-center border-2">
                <div>
                    <img 
                    className="w-[300px] mx-auto md:mx-16 "
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