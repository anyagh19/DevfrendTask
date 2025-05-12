import React from 'react';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='bg-gray-900 text-white py-12 px-6 md:px-16 lg:px-28'>
            <div className='flex flex-col md:flex-row justify-between gap-12'>
                {/* Logo and About */}
                <div className='flex flex-col gap-4'>
                    <img src='https://via.placeholder.com/150x50' alt='Company Logo' className='w-[150px]' />
                    <p className='text-gray-400'>Classic cuts with modern style</p>
                    <div className='flex gap-4'>
                        <AiOutlineInstagram className='text-blue-400 text-3xl cursor-pointer' />
                        <AiOutlineFacebook className='text-blue-400 text-3xl cursor-pointer' />
                    </div>
                </div>

                {/* Quick Links */}
                <div className='flex flex-col gap-4'>
                    <h3 className='text-xl font-bold'>Quick Links</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <li className='cursor-pointer hover:text-white'>Home</li>
                        <li className='cursor-pointer hover:text-white'>About</li>
                        <li className='cursor-pointer hover:text-white'>Services</li>
                        <li className='cursor-pointer hover:text-white'>Gallery</li>
                        <li className='cursor-pointer hover:text-white'>Contact</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className='flex flex-col gap-4'>
                    <h3 className='text-xl font-bold'>Contact Us</h3>
                    <p className='text-gray-400'>500 N Bell Ave #109, Denton, TX 76209, United States</p>
                    <p className='text-gray-400'>‪+19406129127</p>
                </div>

                {/* Newsletter */}
                <div className='flex flex-col gap-4'>
                    <h3 className='text-xl font-bold'>Newsletter</h3>
                    <p className='text-gray-400'>Subscribe to our newsletter to receive updates and news.</p>
                    <input type='email' placeholder='Your email' className='bg-gray-800 text-white py-2 px-4 rounded-lg outline-none' />
                    <button className='bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600'>Subscribe</button>
                </div>
            </div>
            <hr className='my-8 border-gray-700' />
            <div className='flex flex-col md:flex-row justify-between items-center text-gray-400'>
                <p>© 2023 PMC Barbershop. All rights reserved.</p>
                <ul className='flex gap-6 mt-4 md:mt-0'>
                    <Link to='/'><li className='cursor-pointer hover:text-white'>Home</li></Link>
                    <Link to='/about'><li className='cursor-pointer hover:text-white'>About</li></Link>
                    <Link to='/services'><li className='cursor-pointer hover:text-white'>Services</li></Link>
                    <Link to='/gallery'><li className='cursor-pointer hover:text-white'>Gallery</li></Link>
                    <Link to='/contact'><li className='cursor-pointer hover:text-white'>Contact</li></Link>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
