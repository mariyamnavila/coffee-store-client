import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {

    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries())

        fetch('https://coffee-store-server-theta-three.vercel.app/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // console.log('after adding coffee', data);
                    Swal.fire({
                        title: "Coffee added successfully",
                        icon: "success",
                        draggable: true
                    });
                }
            })

    }

    return (
        <div className=" max-w-7xl mx-auto bg-[url('./assets/back.png')]">
            <Link to={'/'}>
                <button className="btn bg-transparent border-none p-8 my-8 rancho text-2xl hover:bg-[#e3b577] flex"> <FaArrowLeftLong className="mr-4" />Back to home</button>
            </Link>
            <div className="bg-[#f4f3f08e] p-24 mb-[120px]">
                <div className="p-12 text-center space-y-4">
                    <h1 className="text-6xl rancho text-shadow-md text-shadow-amber-900">Add New coffee</h1>
                    <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handleAddCoffee}>
                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <fieldset className="fieldset rounded-box p-4">
                            <label className="label font-bold text-[16px] text-black">Name</label>
                            <input type="text" name="name" className="input w-full border-transparent hover:border-2 hover:border-[#e3b577] hover:shadow-lg focus:border-2 focus:border-[#e3b577] outline-none" placeholder="Enter coffee name" />
                        </fieldset>
                        <fieldset className="fieldset rounded-box p-4">
                            <label className="label font-bold text-[16px] text-black">Quantity</label>
                            <input type="text" name="quantity" className="input w-full border-transparent hover:border-2 hover:border-[#e3b577] hover:shadow-lg focus:border-2 focus:border-[#e3b577] outline-none" placeholder="Enter coffee quantity" />
                        </fieldset>
                        <fieldset className="fieldset rounded-box p-4">
                            <label className="label font-bold text-[16px] text-black">Supplier</label>
                            <input type="text" name="supplier" className="input w-full border-transparent hover:border-2 hover:border-[#e3b577] hover:shadow-lg focus:border-2 focus:border-[#e3b577] outline-none" placeholder="Enter coffee supplier" />
                        </fieldset>
                        <fieldset className="fieldset rounded-box p-4">
                            <label className="label font-bold text-[16px] text-black">Taste</label>
                            <input type="text" name="taste" className="input w-full border-transparent hover:border-2 hover:border-[#e3b577] hover:shadow-lg focus:border-2 focus:border-[#e3b577] outline-none" placeholder="Enter coffee taste" />
                        </fieldset>
                        <fieldset className="fieldset rounded-box p-4">
                            <label className="label font-bold text-[16px] text-black">Price</label>
                            <input type="text" name="price" className="input w-full border-transparent hover:border-2 hover:border-[#e3b577] hover:shadow-lg focus:border-2 focus:border-[#e3b577] outline-none" placeholder="Enter coffee Price" />
                        </fieldset>
                        <fieldset className="fieldset rounded-box p-4">
                            <label className="label font-bold text-[16px] text-black">Details</label>
                            <input type="text" name="details" className="input w-full border-transparent hover:border-2 hover:border-[#e3b577] hover:shadow-lg focus:border-2 focus:border-[#e3b577] outline-none" placeholder="Enter coffee details" />
                        </fieldset>
                    </div>
                    <fieldset className="fieldset rounded-box p-4 my-6">
                        <label className="label font-bold text-[16px] text-black">Photo</label>
                        <input type="text" name="photo" className="input w-full border-transparent hover:border-2 hover:border-[#e3b577] hover:shadow-lg focus:border-2 focus:border-[#e3b577] outline-none" placeholder="Enter Photo URL" />
                    </fieldset>
                    <input type="submit" className="btn w-full bg-[#d2b48c] rancho text-xl" value="Add Coffee" />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;