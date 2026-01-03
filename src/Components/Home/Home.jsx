import React from 'react'
import NavBar from '../NavBar/NavBar'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

function Home() {
    useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 100,    
      easing: 'ease', 
      once: true,     
    });
  }, []);

  return (
      <>
       <NavBar/>
     
      <section  className='h-screen flex  justify-center '
       style={{
        backgroundImage:"url('https://www.shutterstock.com/shutterstock/videos/9408497/thumb/1.jpg')",
         backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
        }}>

          <div className='pt-20 mx-70 '>
            <span data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <h3  className='text-green-500 text-center font-bold text-xl'>Best IT Solution</h3>
            <h1 className='text-7xl text-center font-bold text-black'>Quality Digital <br/>Services You Really <br/>Need</h1> </span>
            <p className='text-center my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat id adipisci ex nam sunt quo minima autem nostrum, ut magni!</p>
            <div className='flex justify-center gap-8 mt-6'>
              <button className='rounded-full bg-green-600 px-8 py-3' data-aos="fade-right">Read More</button>
              <button className='rounded-full bg-blue-600 px-8 py-3 text-white' data-aos="fade-left">Contact Us</button>
            </div>
          </div>
         

      </section>
      <div className='bg-blue-600 py-15' >
        <div className=' container mx-auto flex items-center justify-between gap-4 px-20' >
             <div className='flex items-center gap-3' data-aos="zoom-in">
                <span className='text-4xl text-blue-300 font-bold'>99</span>
                <h1 className='text-xl text-white font-bold'>Success in getting happy customer </h1>
             </div>
             <div className='flex items-center gap-3' data-aos="zoom-in">
                <span className='text-4xl text-blue-300 font-bold'>99</span>
                <h1 className='text-xl text-white font-bold'>Success in getting happy customer </h1>
             </div>
             <div className='flex items-center gap-3 font-bold' data-aos="zoom-in">
                <span className='text-4xl text-blue-300 font-bold'>99</span>
                <h1 className='text-xl text-white'>Success in getting happy customer </h1>
             </div>
             <div className='flex items-center gap-3' data-aos="zoom-in">
                <span className='text-4xl text-blue-300 font-bold'>99</span>
                <h1 className='text-xl text-white font-bold'>Success in getting happy customer </h1>
             </div>
        </div>
      </div>
     
      </>
  )
}

export default Home