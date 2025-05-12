import React, { useEffect } from 'react'
import { MapPin } from 'lucide-react';
import { IoMdCall } from "react-icons/io";
import { gsap } from 'gsap';
import {useGSAP} from '@gsap/react';

function Home() {
    // useEffect(() => {
    //     const moveone = () => {
    //         gsap.from('#one', {
    //             x: -100,
    //             duration: 3,
    //             delay: 0.5,
    //             ease: 'power2.out',
    //             opacity: 1
    //         })
    //     }
    //     moveone()
    // },[])

    useGSAP(() => {
        gsap.from('#one', {
            x: -100,
            duration: 1,
            delay: 0.5,
            ease: 'power2.out',
            opacity: 0,
            stagger: 0.2,
        })
        gsap.from('#two', {
            x: 100,
            duration: 1,
            delay: 0.5,
            ease: 'power2.out',
            opacity: 0,
            stagger: 0.2,
        })
    })
    return (
        <div className=' w-full bg-gray-800 text-black flex flex-col items-center md:gap-10 md:px-5 md:flex-row md:min-h-screen py-10 px-4 gap-6'>
            <div id='one' className='flex-col flex md:w-[50%]'>
                <h3  className='text-blue-700 font-medium'>Preminum Barber Services in Denton</h3>
                <h1  className='font-bold text-3xl text-white mt-2 md:text-5xl'>Classic Cuts,Modern Style</h1>
                <h1   className='font-bold text-3xl  text-blue-400 md:text-5xl'>Preminum Barber Shop</h1>
                <h3  className=' text-zinc-50 mt-8 text-lg'>At PMC Barbershop, we combine traditional barbering techniques with modern styling to give you the perfect look. Our experienced barbers deliver precision cuts, beard grooming, and relaxing hot towel shaves in a classic barbershop atmosphere.</h3>
                <div  className='py-2 px-3 rounded-full bg-gray-900 border w-[150px] border-gray-600 mt-5 hover:border-blue-400'>
                    <h2 className='flex items-center gap-3 text-white font-medium'><MapPin className='text-blue-400'/> Denton, TX</h2>
                </div>
                <button  className='py-2 px-5 flex gap-5 bg-gray-700 border  hover:scale-105 justify-center items-center text-white font-medium mt-6 rounded-full border-gray-600'><IoMdCall className='text-white'/>Our Services</button>
                <button  className='py-2 px-5 flex gap-5 bg-blue-400 hover:scale-105 hover:bg-blue-600 border-none justify-center items-center text-white font-medium mt-6 rounded-full '><IoMdCall className='text-white'/>Book Now</button>
            </div>
            <div id='two' className='md:w-[50%]'>
                <img src="https://pmcbarber.devfrend.com/images/pmcbarber/hero.webp" alt="" className='w-[1000px] h-[400px] hover:scale-105 duration-300 rounded-lg'/>
            </div>
        </div>
    )
}

export default Home