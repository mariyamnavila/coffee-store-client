import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="max-w-7xl mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;