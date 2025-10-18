import icon1 from '../assets/icons/1.png';
import icon2 from '../assets/icons/2.png';
import icon3 from '../assets/icons/3.png';
import icon4 from '../assets/icons/4.png';
const RowOfIcon = () => {
    return (
        <div className="bg-[#eceae3]">
            <div>
                <div>
                    <img src={icon1} alt="" />
                    <p className="rancho">Awesome Aroma</p>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
            </div>
        </div>
    );
};

export default RowOfIcon;