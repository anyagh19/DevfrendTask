import React from 'react'
import { MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

function Location() {
  return (
    <section className="bg-[#0f182a] py-16 px-4 text-center ">
            <h3 className="text-blue-400 text-lg font-semibold mb-2 text-center">Visit Our Shop</h3>
            <h1 className="text-white text-4xl font-extrabold mb-4 relative inline-block group text-center">
                Our Location
                <span className="absolute left-1/2 bottom-0 w-0 h-1 bg-blue-400 transition-all duration-500 group-hover:left-0 group-hover:w-full text-center"></span>
            </h1>
           
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
                Conveniently located in Denton, TX, United States:
            </p>
            <div className="flex flex-col  lg:flex-row gap-8 px-4">
                <div className="flex-1 bg-gray-700 rounded-2xl p-12 shadow-lg">
                    <div className="text-gray-500 flex items-center justify-center h-full">
                        <MapPin size={60} className="text-gray-500" />
                    </div>
                </div>
                <div className="flex-1 bg-gray-700 rounded-2xl p-8 shadow-lg">
                    <h2 className="text-white text-2xl font-semibold mb-4">Contact Information</h2>
                    <div className="mb-6">
                        <MapPin size={30} className="text-blue-500 inline-block mr-3" />
                        <span className="text-white font-semibold">Address</span>
                        <p className="text-gray-400 ml-12">500 N Bell Ave #109, Denton, TX 76209, United States</p>
                    </div>
                    <div className="mb-6">
                        <Phone size={30} className="text-blue-500 inline-block mr-3" />
                        <span className="text-white font-semibold">Phone</span>
                        <p className="text-gray-400 ml-12">‪+19406129127</p>
                    </div>
                    <div className="flex gap-4">
                        <Link to={'https://maps.google.com/maps?um=1&fb=1&gl=in&sa=X&geocode=KYGA90KOyk2GMWKFIZoqT9uj&daddr=500+N+Bell+Ave+%23109,+Denton,+TX+76209,+United+States&ved=2ahUKEwjN076ZsoCNAxVX0oQAHdHkIAMQ48ADegUIABCiAQ'}>
                            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition-all">Get Directions</button>
                        </Link>
                        <button className="bg-gray-800 text-gray-400 px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-gray-700 transition-all">Call Us</button>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Location