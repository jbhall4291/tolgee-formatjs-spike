import { Link } from 'react-router-dom'
import logo from '../assets/navlogo.png'

import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };


    return (
        <div className='bg-black flex justify-between items-center h-24 w-full mx-auto px-4 text-white'>
            {/* Logo */}
            <img src={logo} className="w-20" />

            {/* Desktop Navigation */}
            <ul className='hidden md:flex'>

            <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
                    <Link to="/">HOME</Link>
                </li>

                <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
                    <Link to="/services">SERVICES</Link>
                </li>
                <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
                    <Link to="/about">ABOUT</Link>
                </li>
            
                <li className="p-4 bg-white text-black hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
                    <Link to="/contact">CONTACT</Link>
                </li>

            </ul>

            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={
                    nav
                        ? 'fixed md:hidden left-0 top-0 w-[66%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                }
            >
                {/* Mobile Logo */}
                {/* <h1 className='w-full text-3xl font-bold text-white m-4'>1111Visas.</h1> */}

                {/* Mobile Navigation Items */}
                <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
                    <Link to="/">HOME</Link>
                </li>

                <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
                    <Link to="/services">SERVICES</Link>
                </li>
                <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
                    <Link to="/about">ABOUT</Link>
                </li>
                <li className="p-4  hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
                    <Link to="/contact">CONTACT</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;