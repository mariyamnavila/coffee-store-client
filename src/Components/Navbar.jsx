import logo from '../assets/logo1.png';
const Navbar = () => {
    return (
        <div className="bg-[url('./assets/nav.jpg')] py-4 text-center rancho flex justify-center items-center text-white">
            <img className='w-[55px] mr-2' src={logo} alt="" />
            <p className='text-5xl'>Espresso Emporium</p>
        </div>
    );
};

export default Navbar;