import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { LanguageSelect } from './LanguageSelect'

const Navbar = () => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    const activeLink = 'p-4 underline text-highlight  cursor-pointer duration-300 hover:text-black'
    const inactiveLink = 'p-4    cursor-pointer duration-300 hover:text-highlight'

    return (

<>
<div className="flex justify-end md:w-full w-10/12 mx-auto px-4">
<LanguageSelect />

</div>


        <header className='sticky top-0 left-0 right-0 z-50 bg-background flex justify-between items-center h-20 md:w-full w-10/12 mx-auto px-4 '>
            {/* Logo */}
                <img src={logo} className="w-40" />

            {/* Desktop Navigation */}
            <nav>
                <ul className='hidden md:flex font-customSerif text-base md:gap-1 gap-4'>
                    <NavLink className={({ isActive }) => (isActive ? activeLink : inactiveLink)} to="/">HOME</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? activeLink : inactiveLink)} to="/services">SERVICES</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? activeLink : inactiveLink)} to="/about">ABOUT</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? activeLink : inactiveLink)} to="/contact">CONTACT</NavLink>
                </ul>
            </nav>

            <div className="flex gap-4 items-center">

            <button className="hidden md:block bg-highlight hover:bg-main font-customSans text-background p-3 text-xs tracking-widest max-w-[180px]">BOOK CONSULTATION</button>
              
            </div>
            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} className="z-20" /> : <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={
                    nav
                        ? 'fixed md:hidden left-0 top-0 w-[66%] h-full border-r border-r-gray-900 bg-main text-background ease-in-out duration-500 z-10'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                }
            >
                {/* Mobile Logo */}
                {/* <h1 className='w-full text-3xl font-bold text-white m-4'>1111Visas.</h1> */}

                {/* Mobile Navigation Items */}
                <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2  cursor-pointer duration-300 hover:text-black">
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

                {/* <Link className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black" to="/">HOME</Link>
                <Link className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black" to="/services">SERVICES</Link>
                <Link className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black" to="/about">ABOUT</Link>
                <Link className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black" to="/contact">CONTACT</Link> */}

            </ul>
        </header>
        </>
    );
};

export default Navbar;
