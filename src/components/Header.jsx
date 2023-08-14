import image1 from '../assets/image-1.png';

const Header = () => {
    return (
        <div className="md:my-10" >
            <div className="2xl:w-[55%] md:w-[60%] mx-auto grid md:grid-cols-3 grid-cols-1" >
                <div className="md:col-span-3 md:text-left text-center" >
                    <h2 className="2xl:text-[64px] md:text-[59px] font-[600]" >We’d love to help</h2>
                </div>
                <div className="md:col-span-2" >
                    <h2 className="2xl:text-[64px] md:text-[59px] text-3xl font-[600] md:text-right text-center" >Solve Your</h2>
                </div>
                <div className="md:ms-5 2xl:-mt-8 md:-mt-10" >
                    <p className="md:text-[16px] text-sm md:text-left text-center font-[400] text-[#5C5C5B]" >
                        We know that you care about your business as much as we do, and we're committed to helping you grow
                    </p>
                </div>
                <div className="md:col-span-3 md:mt-5" >
                    <h2 className="2xl:text-[64px] md:text-[59px] text-3xl font-[600] text-center" > Outreach Problems</h2>
                </div>
            </div>
            <div className='md:mt-20 mt-10 md:px-10 px-5'>
                <img className='mx-auto' src={image1} alt="" />
            </div>
        </div>
    );
};

export default Header;