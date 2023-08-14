
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div className="bg-[#333232]" >
            <div className="grid md:grid-cols-2 grid-cols-1 min-h-[25rem] md:p-[52px] p-5">
                <div className="flex flex-col justify-between items-start">
                    <h1 className="text-[#FFFFFF] font-[600] md:text-[40px] text-[2rem] md:w-52 w-44 md:mb-0 mb-5 leading-none" >Let’s Work Together</h1>
                    <button className="big-btn md:px-10 md:py-4 py-2 font-[600] text-[20px]" >Get Started</button>
                </div>
                <div className="md:border-s md:ps-[52px] flex flex-col justify-between items-start" >
                    <div>
                        <h2 className="text-white md:text-[32px] text-2xl md:mt-0 mt-5 font-[600]" >Menu</h2>
                        <ul className="space-y-3 mt-5 font-[500]" >
                            <li className="text-[#CBBFAC] cursor-pointer hover:text-[#f3ebdf] " >How it Works</li>
                            <li className="text-[#CBBFAC] cursor-pointer hover:text-[#f3ebdf] " >Services</li>
                            <li className="text-[#CBBFAC] cursor-pointer hover:text-[#f3ebdf] " >Contact</li>
                        </ul>
                    </div>
                    <div className='flex md:items-end items-center md:justify-start justify-center' >
                        <img src={logo} className='md:w-[80px]' alt="" />
                        <h2 className='text-[#ffffff] text-[32px] font-[500]' >X.com</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;