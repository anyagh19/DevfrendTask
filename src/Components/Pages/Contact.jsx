import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { MdDarkMode } from 'react-icons/md';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Contact = () => {
   
    return (
        <div className='bg-gray-900 dark:bg-white py-10'>
            <div className='text-center'>
                <h3 className="text-blue-400 text-lg font-semibold mb-2 hover:-translate-y-0.5 duration-300 text-center">Our Work & Shop</h3>
                <h1 className="text-white text-4xl font-extrabold mb-4 relative inline-block group ">
                    Our Barbershop Gallery
                    <span className="absolute left-1/2 bottom-0 w-0 h-1 bg-blue-400 transition-all duration-500 group-hover:left-0 group-hover:w-full "></span>
                </h1>

                <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
                    Take a look at our shop atmosphere and the quality cuts we deliver to our clients.
                </p>
            </div>
            <section className='max-w-full mx-auto py-10 px-6 flex flex-col md:flex-row gap-5'>
                <div className=' w-full md:w-[60%] bg-gray-800 dark:bg-gray-100 rounded-2xl p-8 text-white dark:text-gray-900 hover:border-2 hover:border-blue-400'>
                    <div className='hover:translate-x-1 duration-300 hover:bg-gray-700 p-4 rounded-lg'>
                        <h3 className='text-2xl font-semibold mb-3'>Address</h3>
                        <p className='mb-4 flex items-center gap-3'><MapPin className='text-blue-400 ' /> 500 N Bell Ave #109, Denton, TX 76209, United States</p>
                    </div>
                    <div className='hover:translate-x-1 duration-300 hover:bg-gray-700 p-4 rounded-lg'>
                        <h3 className='text-2xl font-semibold mb-3'>Phone</h3>
                        <p className='mb-4 flex items-center gap-3'><Phone className='text-blue-400' /> ‪+19406129127‬</p>
                    </div>
                    <div className='hover:translate-x-1 duration-300 hover:bg-gray-700 p-4 rounded-lg'>
                        <h3 className='text-2xl font-semibold mb-3'>Business Hours</h3>
                        <p className='flex items-center gap-3'><Clock className='text-blue-400' /> Closes 7pm , Sun: Closed</p>
                    </div>
                </div>
                <div className='w-full md:w-[120%] bg-gray-800 dark:bg-gray-100 rounded-2xl p-8 text-white dark:text-gray-900 hover:border-2 hover:border-blue-400'>
                    <form>
                        <div className='group hover:-translate-y-1 duration-300'>
                            <label className='block mb-4 group-hover:text-blue-400'>Your Name
                                <input type='text' placeholder='Enter your full name' className='w-full mt-2 p-3 rounded-lg bg-gray-700 dark:bg-gray-200 dark:text-gray-900 group-hover:border-blue-400 hover:border' />
                            </label>
                        </div>
                        <div className='group hover:-translate-y-1 duration-300'>
                            <label className='block mb-4 group-hover:text-blue-400'>Phone Number
                                <input type='text' placeholder='Enter your phone number' className='w-full mt-2 p-3 rounded-lg bg-gray-700 dark:bg-gray-200 dark:text-gray-900 group-hover:border-blue-400 hover:border' />
                            </label>
                        </div>
                        <div className='group hover:-translate-y-1 duration-300'>
                            <label className='block mb-4 group-hover:text-blue-400'>Service Interested In
                                <select className='w-full mt-2 p-3 rounded-lg bg-gray-700 dark:bg-gray-200 dark:text-gray-900 group-hover:border-blue-400 hover:border'>
                                    <option>Select an option</option>
                                    <option>Haircut</option>
                                    <option>Shave</option>
                                    <option>Beard Trim</option>
                                    <option>Facial</option>
                                </select>
                            </label>
                        </div>
                        <div className='group hover:-translate-y-1 duration-300'>
                            <label className='block mb-4 group-hover:text-blue-400'>Preferred Date
                                <input type='date' placeholder='dd-mm-yyyy' className='w-full mt-2 p-3 rounded-lg bg-gray-700 dark:bg-gray-200 dark:text-gray-900 group-hover:border-blue-400 hover:border' />
                            </label>
                        </div>
                        <div className='group hover:-translate-y-1 duration-300'>
                            <label className='block mb-4 group-hover:text-blue-400'>Message
                                <textarea placeholder='Enter your message' className='w-full mt-2 p-3 rounded-lg bg-gray-700 dark:bg-gray-200 dark:text-gray-900 group-hover:border-blue-400 hover:border'></textarea>
                            </label>
                        </div>
                        <button className='w-full py-3 bg-blue-400 text-black rounded-lg hover:bg-blue-500 dark:bg-blue-600 dark:text-white'>Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
