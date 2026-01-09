import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

function Footer() {
  return (
   <>
   <footer className='bg-black py-4'>
         <div className=' container mx-auto '>
             <div className='flex items-center gap-30  px-20 justify-center relative'>
               <div className='text-white '>
                <h1 className='text-4xl font-bold'>High<span className='text-green-600'>Tech</span></h1>
               <p className='py-5 '>Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit. Facere, dicta?</p>
               </div>
               <div>
                <h1 className='text-green-600 font-bold text-2xl'>Short Link</h1>
                <ul className='text-white py-5'>
                    <li className='flex items-center gap-2'> <IoIosArrowForward /><span className='hover:translate-x-1 transform-translate duration-300'>About Us</span></li>
                    <li className='flex items-center gap-2'><IoIosArrowForward /><span className='hover:translate-x-1 transform-translate duration-300'>Contact Us</span></li>
                    <li className='flex items-center gap-2'><IoIosArrowForward /><span className='hover:translate-x-1 transform-translate duration-300'>Our Services</span></li>
                    <li className='flex items-center gap-2'><IoIosArrowForward /><span className='hover:translate-x-1 transform-translate duration-300'>Our Projects</span></li>
                </ul>
               </div>
               <div>
                <h1 className='text-green-600 font-bold text-2xl'>Help Link</h1>
                <ul className='text-white py-5'>
                    <li className='flex items-center gap-2'> <IoIosArrowForward />Term of  Use</li>
                    <li className='flex items-center gap-2'><IoIosArrowForward />Privacy Policy</li>
                    <li className='flex items-center gap-2'><IoIosArrowForward />Helps</li>
                    <li className='flex items-center gap-2'><IoIosArrowForward />FQAs</li>
                </ul>
               </div>
               <div>
                <h1 className='text-green-600 font-bold text-2xl'>Help Link</h1>
                <ul className='text-white py-5'>
                    <li className='flex items-center gap-2'> <IoIosArrowForward />Term of  Use</li>
                    <li className='flex items-center gap-2'><IoIosArrowForward />Privacy Policy</li>
                    <li className='flex items-center gap-2'><IoIosArrowForward />Helps</li>
                    <li className='flex items-center gap-2'><IoIosArrowForward />FQAs</li>
                </ul>
               </div>
                  <div className='w-full text-gray-700 absolute bottom-2 border-b'></div>
                 
             </div>
              
         </div>
   </footer>
   </>
  )
}

export default Footer