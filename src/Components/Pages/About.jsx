import React from 'react'

function About() {
    return (
        <div className='w-full md:min-h-screen flex flex-col justify-center items-center bg-gray-900 px-5 md:py-[50px] '>
            <div className=' flex flex-col gap-5 justify-center items-center md:w-[65%] px-5'>
                <h3 className='text-blue-400 font-medium hover:-translate-y-1 transition-all duration-300 '>Our Story</h3>
                <h1 className='text-white font-bold text-2xl md:text-4xl hover:border-b-2 hover:border-blue-400 origin-center transform-view duration-75'>About PMC BarberShop</h1>
                <h3 className='text-center text-lg text-gray-500'>Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.</h3>
            </div>
            <div className='flex flex-col md:flex-row gap-5 mt-7 md:px-10'>
                <img src="https://brownsbay.org.nz/wp-content/uploads/2020/07/Exterior-1024x1024.jpg" alt="" className='w-[2000px] h-[400px] rounded-2xl hover:scale-105 duration-300' />
                <div className='flex flex-col '>
                    <div className='py-2 px-4'>
                        <h3 className='text-gray-500 text-lg font-medium  border-l-2 border-blue-400 pl-2'>Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.</h3>
                    </div>
                    <div className='py-4 px-5 bg-gray-700 mt-10 rounded-2xl hover:pl-4 transition-all duration-300 hover:border-b-2 hover:border-blue-300'>
                        <h3 className='text-gray-400 text-md  '>We take pride in our attention to detail and personalized service, ensuring each client leaves looking and feeling their best. Our skilled barbers combine traditional techniques with modern trends to create custom styles that suit each individual's personality and lifestyle.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About