import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const initialUsers = useLoaderData();
    const [users, setUsers] = useState(initialUsers)
    // console.log(setUsers);

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
                fetch(`https://coffee-store-server-theta-three.vercel.app/users/${id}`, {
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
                            const remainingUsers = users.filter(user => user._id !== id)
                            setUsers(remainingUsers)
                        }
                    })
            }
        });
    }

    return (
        <div className="max-w-7xl mx-auto">
            <Link to={'/'}>
                <button className="btn bg-transparent border-none p-8 my-8 rancho text-2xl hover:bg-[#e3b577] flex"> <FaArrowLeftLong className="mr-4" />Back to home</button>
            </Link>
            {/* <h2> Users : {users?.length}</h2> */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                No
                            </th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user?.photo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user?.name}</div>
                                            <div className="text-sm opacity-50">{user?.address}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user?.phone}
                                    <br />
                                    {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                                </td>
                                <td>{user?.email}</td>
                                <th>
                                    <button className="btn bg-[#2F2F2F] text-white border-black btn-xs">V</button>
                                    <button className="btn bg-[#2F2F2F] text-white border-black btn-xs">E</button>
                                    <button
                                        onClick={() => { handleDelete(user._id) }}
                                        className="btn bg-[#2F2F2F] text-white border-black btn-xs"
                                    >
                                        X
                                    </button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;