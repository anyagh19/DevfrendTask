import React, { useEffect } from 'react'
import {gsap} from 'gsap'
import Header from './Components/Layouts/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Layouts/Footer'

function App() {

 useEffect(() => {
  const moveCircle = (e) => {
    gsap.to('#circle', {
      x: e.x,
      y: e.y,
      duration: 0.8,
      ease: 'power2.out'
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
