import React, { useState, useEffect } from 'react';
import { MapPin, Phone } from 'lucide-react';
import { MdDarkMode } from 'react-icons/md';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdOutlineCancel } from "react-icons/md";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='w-full bg-gray-900 flex justify-between items-center px-7 py-6 relative dark:bg-white'>
            <img src='https://pmcbarber.devfrend.com/_next/image?url=%2Fimages%2Fpmcbarber%2Flogo.webp&w=256&q=75' alt='' className='w-[50px] h-[40px]' />
            <div className='hidden md:flex gap-7 items-center text-white dark:text-gray-900'>
                <Link to='/'><h3 className='font-medium cursor-pointer hover:text-blue-400'>Home</h3></Link>
                <Link to='/about'><h3 className='font-medium cursor-pointer hover:text-blue-400'>About</h3></Link>
                <Link to='/services'><h3 className='font-medium cursor-pointer hover:text-blue-400'>Services</h3></Link>
                <Link to='/gallery'><h3 className='font-medium cursor-pointer hover:text-blue-400'>Gallery</h3></Link>
                <Link to='/contact'><h3 className='font-medium cursor-pointer hover:text-blue-400'>Contact</h3></Link>
                <Link to='/location'><h3 className='font-medium cursor-pointer hover:text-blue-400'>Location</h3></Link>
            </div>
            <div className='md:hidden text-white text-2xl cursor-pointer dark:text-gray-900' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
            <div className='hidden md:flex gap-8 items-center text-white text-[17px] font-medium dark:text-gray-900'>
                <MdDarkMode  className='items-center text-xl cursor-pointer' />
                <h3 className='flex items-center gap-2 cursor-pointer'><Phone className='text-blue-400' /> +19406129127</h3>
                <Link to='/contact'>
                <button className='py-2 px-3 hover:scale-105 bg-blue-400 hover:bg-blue-500 rounded-lg font-medium text-[15px] text-black dark:bg-blue-600 dark:text-white'>Book an Appointment</button>
                </Link>
            </div>
            {isOpen && (
                <motion.div initial={{ x: 300 }} animate={{ x: 0 }} exit={{ x: 300 }} transition={{ type: 'spring', stiffness: 300 }} className='fixed top-0 right-0 h-full w-[70%] bg-gray-900 text-white p-8 shadow-lg md:hidden z-50 dark:bg-white dark:text-gray-900'>
                    <div className='flex justify-between items-center'>
                        <h3 className='mb-4 text-xl font-bold text-blue-400 dark:text-blue-600'>Menu</h3>
                        <MdOutlineCancel onClick={() => setIsOpen(false)} className='text-2xl cursor-pointer' />
                    </div>
                    <ul className='flex flex-col gap-6 border-b-2 border-gray-100 w-full pb-[60px] dark:border-gray-300'>
                        <Link to='/'><li className='font-medium cursor-pointer text-lg hover:text-blue-400 dark:hover:text-blue-600'>Home</li></Link>
                        <Link to='/about'><li className='font-medium cursor-pointer text-lg hover:text-blue-400 dark:hover:text-blue-600'>About</li></Link>
                        <Link to='/services'><li className='font-medium cursor-pointer text-lg hover:text-blue-400 dark:hover:text-blue-600'>Services</li></Link>
                        <Link to='/gallery'><li className='font-medium cursor-pointer text-lg hover:text-blue-400 dark:hover:text-blue-600'>Gallery</li></Link>
                        <Link to='/contact'><li className='font-medium cursor-pointer text-lg hover:text-blue-400 dark:hover:text-blue-600'>Contact</li></Link>
                        <Link to='/location'><li className='font-medium cursor-pointer text-lg hover:text-blue-400 dark:hover:text-blue-600'>Location</li></Link>
                    </ul>
                    <div className='bg-gray-800 py-2 px-3 rounded-lg mt-8 hover:scale-105 dark:bg-gray-200 dark:text-gray-800'>
                        <h3 className='flex items-center gap-2 cursor-pointer'><Phone className='text-blue-400 dark:text-blue-600' /> +19408081569</h3>
                    </div>
                    <div className='bg-gray-800 py-2 px-3 rounded-lg mt-8 flex gap-6 hover:scale-105 dark:bg-gray-200 dark:text-gray-800'>
                        <h3 className='flex justify-between w-full'>Preferences <MdDarkMode  className='items-center text-xl cursor-pointer' /></h3>
                    </div>
                    <Link to='/contact'>
                        <button className='py-2 px-3 mt-8 bg-blue-400 hover:bg-blue-500 rounded-lg font-medium text-[15px] text-black dark:bg-blue-600 dark:text-white'>Book an Appointment</button>
                        </Link>
                </motion.div>
            )}
        </header>
    );
};

export default Header;
