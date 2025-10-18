import cup1 from '../assets/cups/Rectangle 9.png';
import cup2 from '../assets/cups/Rectangle 10.png';
import cup3 from '../assets/cups/Rectangle 11.png';
import cup4 from '../assets/cups/Rectangle 12.png';
import cup5 from '../assets/cups/Rectangle 13.png';
import cup6 from '../assets/cups/Rectangle 14.png';
import cup7 from '../assets/cups/Rectangle 15.png';
import cup8 from '../assets/cups/Rectangle 16.png';
const FollowUs = () => {
    return (
        <div className="max-w-7xl mx-auto my-[120px]">
            <div className="flex-col text-center mb-12">
                <p>Follow Us Now</p>
                <h4 className="text-4xl rancho text-shadow-md text-shadow-amber-900">Follow on Instagram</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ml-4">
                <img className='rounded-xl w-[312px] h-[350px] object-cover' src={cup1} alt="" />
                <img className='rounded-xl w-[312px] h-[350px] object-cover' src={cup2} alt="" />
                <img className='rounded-xl w-[312px] h-[350px] object-cover' src={cup3} alt="" />
                <img className='rounded-xl w-[312px] h-[350px] object-cover' src={cup4} alt="" />
                <img className='rounded-xl w-[312px] h-[350px] object-cover' src={cup5} alt="" />
                <img className='rounded-xl w-[312px] h-[350px] object-cover' src={cup6} alt="" />
                <img className='rounded-xl w-[312px] h-[350px] object-cover' src={cup7} alt="" />
                <img className='rounded-xl w-[312px] h-[350px] object-cover' src={cup8} alt="" />
            </div>
        </div>
    );
};

export default FollowUs;