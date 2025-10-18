import icon1 from '../assets/icons/1.png';
import icon2 from '../assets/icons/2.png';
import icon3 from '../assets/icons/3.png';
import icon4 from '../assets/icons/4.png';
const RowOfIcon = () => {
    return (
        <div className="bg-[#eceae3]">
            <div className='flex max-w-7xl mx-auto py-14'>
                <div className='space-y-2 mx-2'>
                    <img src={icon1} alt="" />
                    <p className="rancho text-3xl">Awesome Aroma</p>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='space-y-2 mx-2'>
                    <img src={icon2} alt="" />
                    <p className="rancho text-3xl">High Quality</p>
                    <p>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='space-y-2 mx-2'>
                    <img src={icon3} alt="" />
                    <p className="rancho text-3xl">Pure Grades</p>
                    <p>The coffee is made of the green coffee beans which you will love </p>
                </div>
                <div className='space-y-2 mx-2'>
                    <img src={icon4} alt="" />
                    <p className="rancho text-3xl">Proper Roasting</p>
                    <p>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default RowOfIcon;