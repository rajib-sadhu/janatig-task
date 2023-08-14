
import icon1 from '../assets/icon-1.png';
import icon2 from '../assets/icon-2.png';
import icon3 from '../assets/icon-3.png';
import icon4 from '../assets/icon-4.png';
import icon5 from '../assets/icon-5.png';

const ChooseUs = () => {
    return (
        <div className='md:px-10 px-5' >
            <div className='grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-5' >
                <div className='md:h-[35rem] p-10 border-2 border-black rounded-3xl flex flex-col justify-between'>
                    <img src={icon1} className='w-[96px] h-[96px] object-contain' alt="" />
                    <div className=''>
                        <h3 className='md:text-[48px] text-3xl md:mt-0 mt-5 font-[600] text-[#333232] italic' >Pause</h3>
                        <p className='text-[24px] font-[400] mt-3' >want to take a break? Pause our services anytime</p>
                    </div>
                </div>
                <div className='md:col-span-2 grid md:place-content-center'>
                    <h2 className='md:text-[48px] text-3xl font-[600] italic leading-none'>
                        Why choose us? <br />
                        what makes us different?
                    </h2>
                </div>
                <div className='md:h-[35rem] md:p-10 p-5 border-2 border-black rounded-3xl flex flex-col justify-between'>
                    <img src={icon2} className='w-[96px] h-[96px] object-contain' alt="" />
                    <div className=''>
                        <h3 className='md:text-[48px] text-3xl md:mt-0 mt-5 font-[600] text-[#333232] italic' >Super fast</h3>
                        <p className='text-[24px] font-[400] mt-3' >See consistent work in action, super fast.</p>
                    </div>
                </div>
                <div className='md:h-[35rem] md:p-10 p-5 border-2 border-black rounded-3xl flex flex-col justify-between'>
                    <img src={icon3} className='w-[96px] h-[96px] object-contain' alt="" />
                    <div className=''>
                        <h3 className='md:text-[48px] text-3xl md:mt-0 mt-5 font-[600] text-[#333232] italic' >Built to perform</h3>
                        <p className='text-[24px] font-[400] mt-3' >Our experienced team of market strategists make sure to come up with the best strategies</p>
                    </div>
                </div>
                <div className='md:h-[35rem] md:p-10 p-5 border-2 border-black rounded-3xl flex flex-col justify-between'>
                    <img src={icon4} className='w-[96px] h-[96px] object-contain' alt="" />
                    <div className=''>
                        <h3 className='md:text-[48px] text-3xl md:mt-0 mt-5 font-[600] text-[#333232] italic' >Tailored for you</h3>
                        <p className='text-[24px] font-[400] mt-3' >Your experience with us will be customfit and exclusive to you</p>
                    </div>
                </div>
                <div className='md:col-span-2' ></div>
                <div className='md:h-[35rem] md:p-10 p-5 border-2 border-black rounded-3xl flex flex-col justify-between'>
                    <img src={icon5} className='w-[96px] h-[96px] object-contain' alt="" />
                    <div className=''>
                        <h3 className='md:text-[48px] text-3xl md:mt-0 mt-5 font-[600] text-[#333232] italic' >Premium quality</h3>
                        <p className='text-[24px] font-[400] mt-3' >Get your ads run by professionals and revise until you're 100% satisfied</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;