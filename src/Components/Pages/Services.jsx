import React from 'react'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function Services() {

    useGSAP(() => {
        gsap.from('#one', {
            y: -50,
            duration: 1,
            delay: 0.5,
            ease: 'power2.out',
            opacity: 0,
            stagger: 0.1,
        });
         gsap.from('#two', {
            y: 50,
            duration: 1,
            delay: 0.5,
            ease: 'power2.out',
            opacity: 0,
            stagger: 0.1,
        });
        
    },[])

  const services = [
        {
            title: 'Haircut',
            description: 'Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.',
            img: 'https://pmcbarber.devfrend.com/images/salonCommon/hair-styling-icon.svg'
        },
        {
            title: 'Beard Services',
            description: 'Maintain your facial hair with our premium beard services. Our barbers specialize in perfect beard shaping, precise trims, and luxurious hot towel shaves for the ultimate grooming experience.',
            img: 'https://pmcbarber.devfrend.com/images/salonCommon/makeup-icon.svg'
        },
        {
            title: 'premium Services',
            description: 'Enhance your look with our premium barbering services including expert hair coloring, revitalizing scalp treatments, and styling for special occasions when you need to look your absolute best.',
            img: 'https://pmcbarber.devfrend.com/images/salonCommon/skincare-icon.svg'
        }
    ]
    return (
        <div className='w-full md:min-h-screen flex flex-col justify-center items-center bg-gray-900 px-5 md:py-[50px] '>
            <div id='one' className=' flex flex-col gap-5 justify-center items-center md:w-[65%] px-5'>
                <h3 className='text-blue-400 font-medium hover:-translate-y-1 transition-all duration-300 '>Premium Gromming</h3>
                <h1 className='text-white font-bold text-2xl md:text-4xl hover:border-b-2 hover:border-blue-400 origin-center transform-view duration-75'>Our Barber Services</h1>
                <h3 className='text-center text-lg text-gray-500'>Professional barbering services to keep you looking sharp for everyday confidence or special occasions.</h3>
            </div>
            <div id='two' className='flex flex-col md:flex-row  gap-5 mt-7 md:px-10'>
                {services.map((service) => (
                    <div 
                        className=' flex flex-col gap-5 bg-gray-800 py-16 px-5 rounded-xl hover:-translate-y-1 duration-300 hover:border hover:border-blue-400 hover:shadow-lg group'
                        key={service.title}
                    >
                        <span className="absolute left-0 top-0 w-0 h-3 rounded-t-xl bg-blue-400 transition-all duration-500  group-hover:w-full "></span>
                        <img src={service.img} alt={service.title} className='w-[80px] h-[80px] p-4 bg-gray-700 rounded-lg' />
                        <h2 className='text-white text-lg font-medium group-hover:text-blue-400 duration-300'>{service.title}</h2>
                        <h3 className='text-gray-500 mt-5 text-md'>{service.description}</h3>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Services