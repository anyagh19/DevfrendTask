import React, { useEffect } from 'react'
import {gsap} from 'gsap'
import Header from './Components/Layouts/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Layouts/Footer'

function App() {

 useEffect(() => {
  const moveCircle = (e) => {
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    gsap.to('#circle', {
      x: e.clientX + scrollX,
      y: e.clientY + scrollY,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  window.addEventListener('mousemove', moveCircle);

  return () => {
    window.removeEventListener('mousemove', moveCircle);
  };
}, []);

  return (

    <>
      <div className='relative'>
        <div id='circle' className='w-[15px] h-[15px] bg-blue-400 rounded-full absolute z-10 '></div>
        <Header />
        <Outlet />
        <Footer />
      </div>

    </>
  )
}

export default App
