import React, {useState} from 'react'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight , FaStar } from 'react-icons/fa';


const testimonials = [
    {
        text: "I've been getting my hair cut at PMC Barbershop for over 2 years now. The attention to detail is unmatched, and the atmosphere is always welcoming. My barber remembers exactly how I like my fade every time!",
        name: 'Mike Johnson',
        rating: 5,
    },
    {
        text: "As someone who's particular about their haircut, I was nervous trying a new place. The team at PMC took their time to understand what I wanted and delivered exactly that. Will definitely be coming back!",
        name: 'David Martinez',
        rating: 5,
    },
    {
        text: "The hot towel shave experience at PMC Barbershop is phenomenal! It's the perfect blend of old-school barbering with modern techniques. My beard has never looked better.",
        name: 'Chris Taylor',
        rating: 5,
    },
];

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

    }, [])

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };


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

        <div className='w-full flex flex-col'>
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
                            <h2 className='text-white text-xl font-medium group-hover:text-blue-400 duration-300'>{service.title}</h2>
                            <h3 className='text-gray-500 mt-5 text-md'>{service.description}</h3>
                        </div>
                    ))}

                </div>
            </div>
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 px-6">
                <div className="text-center mb-10">
                    <h2 className="text-xl text-blue-400 font-semibold uppercase">Testimonials</h2>
                    <h1 className="text-4xl font-bold mt-2 text-white">What Our Clients Say</h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mt-4 rounded"></div>
                </div>

                <div className="max-w-6xl mx-auto flex  gap-8">
                    {testimonials.map((testimonial) => (
                        <div className="md:w-[30%] relative bg-gray-800 rounded-xl p-8 shadow-lg">
                        <FaQuoteLeft className="text-blue-400 text-4xl mb-4" />
                        <p className="text-lg leading-relaxed">{testimonial.text}</p>
                        <FaQuoteRight className="text-blue-400 text-4xl mt-4" />
                        <div className="flex items-center gap-1 mt-6">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400 text-lg" />
                                ))}
                            </div>
                        <div className="flex items-center gap-3 mt-6">
                            <div className="text-lg font-semibold">{testimonial.name}</div>
                        </div>
                    </div>
                    ))}
                </div>

                {/* Mobile Navigation */}
                <div className="flex justify-center gap-6 mt-8 lg:hidden">
                    <button onClick={prevTestimonial} className="p-3 bg-blue-500 rounded-full shadow-lg">
                        <FaChevronLeft className="text-white text-lg" />
                    </button>
                    <button onClick={nextTestimonial} className="p-3 bg-blue-500 rounded-full shadow-lg">
                        <FaChevronRight className="text-white text-lg" />
                    </button>
                </div>
            </div>

        </div>


    )
}

export default Services