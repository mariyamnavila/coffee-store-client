
const Header = () => {
    return (
        <div className="bg-[url('./assets/header.png')] h-screen bg-cover bg-center py-[225px] flex justify-end text-white">
            <div className="space-y-5 md:w-1/2 w-2/3">
                <h3 className="text-4xl rancho ">Would you like a Cup of Delicious Coffee?</h3>
                <p>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className="btn rancho bg-[#E3B577] hover:bg-transparent border border-[#E3B577] text-xl">Learn More</button>
            </div>
        </div>
    );
};

export default Header;