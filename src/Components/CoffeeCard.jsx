import { HiPencil } from "react-icons/hi";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const CoffeeCard = ({ coffee }) => {
    const { photo, name, price, quantity } = coffee;
    return (
        <div className="card card-side bg-base-100 shadow-sm p-3 border-2">
            <figure>
                <img className="p-4 object-fit"
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex justify-between w-full mt-8">
                <div>
                    <h2 className="">Name : {name}</h2>
                <p>Price : {price}</p>
                <p>Quantity : {quantity}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-2
                    ">
                        <button className="btn join-item bg-[#d2b48c] text-xl"><IoMdEye /></button>
                        <button className="btn join-item bg-[#3c393b] text-xl"><HiPencil /></button>
                        <button className="btn join-item bg-[#ea4744] text-xl"><MdDelete /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;