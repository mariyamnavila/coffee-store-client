import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const { name, quantity, taste, supplier, photo, details, _id, price } = useLoaderData()
    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries())

        fetch(`https://coffee-store-server-theta-three.vercel.app/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        // position: "top-end",
                        icon: "success",
                        title: "Coffee updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }

    return (
        <div className=" max-w-7xl mx-auto bg-[url('./assets/back.png')]">
            <Link to={'/'}>
                <button className="btn bg-transparent border-none p-8 my-8 rancho text-2xl hover:bg-[#e3b577] flex"> <FaArrowLeftLong className="mr-4" />Back to home</button>
            </Link>
            <div className="p-24 bg-[#f4f3f08e] mb-[120px]">
                <div className="p-12 text-center space-y-4 ">
                    <h1 className="text-6xl text-shadow-md text-shadow-amber-700 rancho">Update Existing Coffee Details</h1>
                    <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handleUpdateCoffee}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <fieldset className="fieldset rounded-box p-4">
                            <label className="label font-bold text-[16px] text-black">Name</label>
                            <input type="text" name="name " defaultValue={name} className="input w-full border-transparent hover:border-2 hover:border-[#e3b577] hover:shadow-lg focus:border-2 focus:border-[#e3b577] outline-none" placeholder="Enter coffee name" />
                        </fieldset>
                        <fieldset className="fieldset rounded-box p-4">
                            <label className="label font-bold text-[16px] text-black">Quantity</label>
                            <input type="text" name="quantity" defaultValue={quantity} className="input w-full border-transparent hover:border-2 hover:border-[#e3b577] hover:shadow-lg focus:border-2 focus:border-[#e3b577] outline-none" placeholder="Enter coffee quantity" />
                        </fieldset>
                        <fieldset className="fieldset rounded-box p-4">
                            <label className="label font-bold text-[16px] text-black">Supplier</label>
                            <input type="text" name="supplier" defaultValue={supplier} className="input w-full border-transparent hover:border-2 hover:border-[#e3b577] hover:shadow-lg focus:border-2 focus:border-[#e3b577] outline-none" placeholder="Enter coffee supplier" />
                        </fieldset>
                        <fieldset className="fieldset rounded-box p-4">
                            <label className="label font-bold text-[16px] text-black">Taste</label>
                            <input type="text" name="taste" defaultValue={taste} className="input w-full border-transparent hover:border-2 hover:border-[#e3b577] hover:shadow-lg focus:border-2 focus:border-[#e3b577] outline-none" placeholder="Enter coffee taste" />
                        </fieldset>
                        <fieldset className="fieldset rounded-box p-4">
                            <label className="label font-bold text-[16px] text-black">Price</label>
                            <input type="text" name="price" defaultValue={price} className="input w-full border-transparent hover:border-2 hover:border-[#e3b577] hover:shadow-lg focus:border-2 focus:border-[#e3b577] outline-none" placeholder="Enter coffee Price" />
                        </fieldset>
                        <fieldset className="fieldset rounded-box p-4">
                            <label className="label font-bold text-[16px] text-black">Details</label>
                            <input type="text" name="details" defaultValue={details} className="input w-full border-transparent hover:border-2 hover:border-[#e3b577] hover:shadow-lg focus:border-2 focus:border-[#e3b577] outline-none" placeholder="Enter coffee details" />
                        </fieldset>
                    </div>
                    <fieldset className="fieldset rounded-box p-4 my-6">
                        <label className="label font-bold text-[16px] text-black">Photo</label>
                        <input type="text" name="photo" defaultValue={photo} className="input w-full border-transparent hover:border-2 hover:border-[#e3b577] hover:shadow-lg focus:border-2 focus:border-[#e3b577] outline-none" placeholder="Enter Photo URL" />
                    </fieldset>
                    <input type="submit" className="btn w-full bg-[#d2b48c] rancho text-xl" value="Add Coffee" />
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;