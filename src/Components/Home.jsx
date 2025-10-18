import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";
import Header from "./Header";
import RowOfIcon from "./RowOfIcon";

const Home = () => {
    const initialCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(initialCoffees)
    return (
        <div>
            <Header></Header>
            <RowOfIcon></RowOfIcon>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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