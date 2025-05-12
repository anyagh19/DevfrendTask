import React , {useEffect}from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Gallery = () => {
    useGSAP(() => {
        gsap.from('#item', {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'ease-in-out',
            stagger: 0.15,
        });
    }, []);
    const images = [
        {
            img: 'https://ts3.mm.bing.net/th?id=OIP.GIKVFt2QeqQtW2K91kwf1wHaE7&pid=15.1'
        },
        {
            img: 'https://ts4.mm.bing.net/th?id=OIP.DPZ7lZoMA14xvr3OW67_GAHaE8&pid=15.1'
        },
        {
            img: 'https://th.bing.com/th/id/OIP.SukyWTnjyXYwI5MF-g2_KQHaEd?w=263&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
        }
    ];

    return (
        <section className="bg-[#0f182a] py-16 px-4 text-center">
            <h3 className="text-blue-400 text-lg font-semibold mb-2 hover:-translate-y-0.5 duration-300">Our Work & Shop</h3>
            <h1 className="text-white text-4xl font-extrabold mb-4 relative inline-block group">
                Our Barbershop Gallery
                <span className="absolute left-1/2 bottom-0 w-0 h-1 bg-blue-400 transition-all duration-500 group-hover:left-0 group-hover:w-full "></span>
            </h1>
           
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
                Take a look at our shop atmosphere and the quality cuts we deliver to our clients.
            </p>
            <div id='item' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {images.map((src, index) => (
                    <div className='item hover:-translate-y-1 duration-300  hover:border-2 hover:border-blue-400 rounded-xl' key={index}>
                        <img  src={src.img} alt="Gallery Image" className="rounded-xl shadow-lg w-full h-full" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;



