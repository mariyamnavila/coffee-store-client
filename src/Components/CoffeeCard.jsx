import { HiPencil } from "react-icons/hi";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { photo,
        name,
        price,
        quantity,
        _id } = coffee;
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-theta-three.vercel.app/coffees/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log('after delete', data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingCoffees = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remainingCoffees)
                        }
                    })
            }
        });
    }
    return (
        <div className="card card-side shadow-sm p-3 bg-[#f5f4f1a6]">
            <figure>
                <img className="p-4 object-fit"
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex justify-between w-full ">
                <div className="my-auto">
                    <h2 className=""><span className="font-bold">Name :</span> {name}</h2>
                    <p><span className="font-bold">Price : </span>{price}</p>
                    <p><span className="font-bold">Quantity : </span>{quantity}</p>
                </div>
                <div className="card-actions justify-end mt-8">
                    <div className="join join-vertical space-y-2">
                        <Link to={`/coffee/${_id}`}>
                            <button className="btn join-item bg-[#d2b48c] text-xl"><IoMdEye className="text-white"/></button>
                        </Link>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn join-item bg-[#3c393b] text-xl"><HiPencil className="text-white"/></button>
                        </Link>
                        <button onClick={() => { handleDelete(_id) }} className="btn join-item bg-[#ea4744] text-xl"><MdDelete className="text-white"/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;