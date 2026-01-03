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
      
      <section className='my-30'>
        <div className=' container mx-auto grid grid-cols-2 gap-2 px-20 '>
          <div className='relative' data-aos="zoom-in">
            <img className='w-90   rounded-2xl shadow-lg' src="https://media.istockphoto.com/id/541114144/photo/bound-by-business.jpg?s=612x612&w=0&k=20&c=sRpFWa216olf8SZkAK3MTwyNAfHNt4G5eGZPHNfOvvQ=" alt="" />
            <img className='w-90  rounded-2xl shadow-lg absolute top-30 left-30' src="https://media.istockphoto.com/id/2103894533/photo/business-people-in-the-office.jpg?s=612x612&w=0&k=20&c=DrnqkuBHgk3_YicnJJwm45HopK626ZqWAmlgUpXaBRc=" alt="" />
          </div>
          <div data-aos="zoom-in-up">
            <h2 className='text-blue-700 font-bold '>About Us</h2>
            <h1 className='text-5xl font-bold'>About HighTech Agency and Its Innovative IT solution</h1>
            <p className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam nobis harum illo? Architecto nobis ea aut fugiat vitae expedita adipisci unde facilis totam. Quasi pariatur molestias temporibus fugit voluptatum obcaecati!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptatum alias molestias fuga facere ab doloribus hic nihil, optio culpa ipsam reiciendis adipisci, blanditiis suscipit.</p>
            <button className='bg-blue-700 text-white py-3 px-6 my-3 rounded-full'>More Details</button>
          </div>
        </div>
      </section> 
      </>
  )
}

export default Home