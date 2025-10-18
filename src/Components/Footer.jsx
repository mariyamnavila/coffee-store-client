import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';
import logo from '../assets/logo1.png';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
const Footer = () => {
    return (
        <div className="bg-[url('./assets/footer.jpg')] pt-[120px]">
            <div className='max-w-7xl mx-auto pb-12 flex-row md:flex items-center'>
                <div className='space-y-8 md:w-1/2 w-full mr-[154px] ml-4'>
                    <img className='w-[55px]' src={logo} alt="" />
                    <h4 className="text-4xl rancho text-shadow-md text-shadow-amber-900">Espresso Emporium</h4>
                    <p className=''>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <div className='text-[#331a15] flex items-center'>
                        <FaFacebook className='text-4xl mr-3' />
                        <FaTwitter className='text-4xl mr-3' />
                        <FaInstagram className='text-4xl mr-3' />
                        <FaLinkedin className='text-4xl mr-3' />
                    </div>
                    <h4 className="text-4xl rancho text-shadow-md text-shadow-amber-900">Get in Touch</h4>
                    <div className='space-y-4'>
                        <p className='flex items-center text-[#331a15]'><FaPhone className='mr-4' />+88 01533 333 333</p>
                        <p className='flex items-center text-[#331a15]'><MdEmail className='mr-4' />info@gmail.com</p>
                        <p className='flex items-center text-[#331a15]'><FaLocationDot className='mr-4' />72, Wall street, King Road, Dhaka </p>
                    </div>
                </div>
                <div className='md:w-1/2'>
                    <h4 className="text-4xl rancho text-shadow-md text-shadow-amber-900">Connect with Us</h4>
                    <form action="" className='space-y-4 mt-8 mb-6'>
                        <input type="text" className='input w-2/3 border-transparent hover:border-2 hover:border-[#e3b577] hover:shadow-lg focus:border-2 focus:border-[#e3b577] outline-none ' placeholder='Name' />
                        <input type="text" className='input w-2/3 border-transparent hover:border-2 hover:border-[#e3b577] hover:shadow-lg focus:border-2 focus:border-[#e3b577] outline-none' placeholder='Email' />
                        <textarea type={'text'} className='textarea w-2/3 border-transparent hover:border-2 hover:border-[#e3b577] hover:shadow-lg focus:border-2 focus:border-[#e3b577] outline-none' placeholder='Message' name="" id="" ></textarea>
                    </form>
                    <button className='btn btn-outline rounded-4xl rancho'>Send Message</button>
                </div>
            </div>
            <div className="bg-[url('./assets/FooterBottom.jpg')] py-3 text-white text-center">
                <p className="rancho">Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;