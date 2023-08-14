
import arrow from '../assets/arrow-right.svg';
import image2 from '../assets/image-2.png';

const Works = () => {
    return (
        <div className='2xl:px-10 md:px-16 px-5' >
            <div className='flex items-center justify-between text-[#333232]' >
                <h2 className='2xl:text-[96px] md:text-[70px] text-2xl font-[600]'>how it works</h2>
                <img src={arrow} className='md:w-[5rem] w-[1.6rem]' />
                <img src={arrow} className='rotate-180 md:w-[5rem] w-[1.6rem]' />
                <h2 className='2xl:text-[96px] md:text-[70px] text-2xl font-[600]'>how it works</h2>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 text-[#333232] py-40 justify-between' >
                <div className='md:col-span-2' >
                    <h2 className='md:text-[4.5rem] text-4xl font-[600] pb-16 w-96 md:leading-[5rem]' >advertising optimized</h2>
                    <img src={image2} className='object-cover w-full' alt="" />
                </div>


                <div className='h-full flex flex-col justify-between'>

                    <div className='flex items-end justify-center gap-6'>
                        <div className='grid place-items-center border-4 border-[#333232] w-[10rem] 2xl:h-[6.5rem] md:h-[5rem] rounded-[50%]'>
                            <p className='text-[48px] font-[400]' >01</p>
                        </div>
                        <div className=''>
                            <h3 className='text-[48px] font-[600] mb-3'>apply</h3>
                            <p className='text-[16px] font-[500]' >Select a plan and schedule an onboarding call to get started.</p>
                        </div>
                    </div>

                    <div className='flex items-end justify-center gap-6'>
                        <div className='grid place-items-center border-4 border-[#333232] w-[13rem] 2xl:h-[6.5rem] rounded-[50%]'>
                            <p className='text-[48px] font-[400]' >02</p>
                        </div>
                        <div>
                            <h3 className='text-[48px] font-[600] mb-3'>review</h3>
                            <p className='text-[16px] font-[500]' >We’ll review your request and get back to you in 2-3 business days on average.</p>
                        </div>
                    </div>

                    <div className='flex items-end justify-center gap-6'>
                        <div className='grid place-items-center border-4 border-[#333232] w-[10rem] 2xl:h-[6.5rem] rounded-[50%]'>
                            <p className='text-[48px] font-[400]' >03</p>
                        </div>
                        <div>
                            <h3 className='text-[48px] font-[600] mb-3'>iterate</h3>
                            <p className='text-[16px] font-[500]' >We'll revise and continuously iterate to get better results, everytime</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Works;