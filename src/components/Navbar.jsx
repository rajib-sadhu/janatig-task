import React from 'react';

import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <div className='py-10'>
            <nav className='bg-[#FFFFFF] flex justify-between items-center md:w-1/2 md:mx-auto px-5 py-3 rounded-xl mx-5' >
                <img src={logo} alt="" />
                <div>
                    <ul className='md:flex hidden justify-between gap-10' >
                        <li>how it works</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <button className='big-btn' >Get Started</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;