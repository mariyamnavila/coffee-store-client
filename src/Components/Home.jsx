import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";
import Header from "./Header";
import RowOfIcon from "./RowOfIcon";
import cup from '../assets/cup.png';
import umbrella from '../assets/umbrella.png';

const Home = () => {
    const initialCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(initialCoffees)
    return (
        <div>
            <Header></Header>
            <RowOfIcon></RowOfIcon>
            <div className="relative">
                <img className="absolute top-20" src={cup} alt="" />
                <img className="absolute right-0 top-40" src={umbrella} alt="" />
                    <div className="flex-col text-center items-center mt-[100px] mb-12 space-y-2">
                        <p>--- Sip & Savor ---</p>
                        <h4 className="text-4xl rancho">Our Popular Products</h4>
                        <button className="btn rancho bg-[#E3B577] text-white border border-black text-xl text-shadow-zinc-950 text-shadow-md">Add Coffee</button>
                    </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                {
                    coffees.map(coffee => <CoffeeCard
                        key={coffee._id}
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;