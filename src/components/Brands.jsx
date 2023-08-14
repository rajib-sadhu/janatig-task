
import brand1 from '../assets/brand-1.png';
import brand2 from '../assets/brand-2.png';
import brand3 from '../assets/brand-3.png';
import brand4 from '../assets/brand-4.png';

const Brands = () => {
    return (
        <div className='md:px-36 px-5 md:my-20 my-10' >
            <div className='flex justify-between md:gap-20 gap-5 md:flex-nowrap flex-wrap'>
                <h1 className='2xl:text-[30px] md:text-[23px] font-[700] text-[#CBBFAC] md:text-left text-center' >Brands we’ve <br /> supported</h1>
                <img className='object-contain md:w-32 w-32' src={brand1} alt="" />
                <img className='object-contain md:w-32 w-32' src={brand2} alt="" />
                <img className='object-contain md:w-32 w-32' src={brand3} alt="" />
                <img className='object-contain md:w-32 w-32' src={brand4} alt="" />
            </div>
            <div className='grid grid-cols-4 md:h-screen h-[20rem]' >
                <p className='md:col-span-3 col-span-4 font-[600] md:text-[55px] text-[20px] my-auto' >
                    “The real fact of the matter is that nobody reads ads. People read what interests them, and sometimes it’s an ad”
                </p>
            </div>
        </div>
    );
};

export default Brands;