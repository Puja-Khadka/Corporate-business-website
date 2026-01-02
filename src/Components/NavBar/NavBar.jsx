import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import { BsTelephoneOutboundFill } from "react-icons/bs";

function NavBar() {
    const [open,setOpen]=useState(null)

  return (
    <>
    <nav className='bg-blue-600 py-3'>
     <div className='flex items-center gap-10 px-20'>
        <div className='text-white'>
            <h1 className='text-4xl font-bold'>High<span className='text-green-900'>Tech</span></h1>
        </div>
        <div >
           <ul className='flex items-center gap-6 text-white font-semibold text-xl'>
            <li>
                Home
            </li>
            <li>About</li>
            <li onMouseEnter={()=>setOpen("Service")}   className='relative cursor-pointer '>
             <span className=' flex items-center gap-2'>
                Service  <FaChevronDown size={16} className="mt-1"/>
             </span>
             
             {open=="Service" && (
              <div className={`absolute top-10  bg-white text-black rounded-lg shadow-lg w-48 py-3  `} onMouseLeave={()=>{setOpen(null)}} >
                <p className='px-5 hover:bg-gray-500 '>Services</p>
                <p className='px-5 hover:bg-gray-500 '>Services Details</p>
              </div>
             )}

            </li>
            <li onMouseEnter={()=>setOpen("Project")}  className='relative cursor-pointer '>
             <span className=' flex items-center gap-2'>
                Project  <FaChevronDown size={16} className="mt-1"/>
             </span>
             
             {open=="Project" && (
              <div className={`absolute top-10  bg-white text-black rounded-lg shadow-lg w-48 py-3  `} onMouseLeave={()=>{setOpen(null)}}>
                <p className='px-5 hover:bg-gray-500'>Projects </p>
                <p className='px-5 hover:bg-gray-500'>Project Details</p>
              </div>
             )}

            </li>
            <li onMouseEnter={()=>setOpen("Blog")}  className='relative cursor-pointer '>
             <span className=' flex items-center gap-2'>
                Blog  <FaChevronDown size={16} className="mt-1"/>
             </span>
             
             {open=="Blog" && (
              <div className={`absolute top-10  bg-white text-black rounded-lg shadow-lg w-48 py-3  `} onMouseLeave={()=>{setOpen(false)}}>
                <p className='px-5 hover:bg-gray-500'>Blog Posts</p>
                <p className='px-5 hover:bg-gray-500'>Blog Details</p>
              </div>
             )}

            </li>
            <li onMouseEnter={()=>setOpen("Pages")}  className='relative cursor-pointer '>
             <span className=' flex items-center gap-2'>
                Pages  <FaChevronDown size={16} className="mt-1"/>
             </span>
             
             {open=="Pages" && (
              <div className={`absolute top-10  bg-white text-black rounded-lg shadow-lg w-48 py-3  `} onMouseLeave={()=>{setOpen(false)}}>
                <p className='px-5 hover:bg-gray-500 '>FAQs</p>
                <p className='px-5 hover:bg-gray-500'>Services Details</p>
                <p className='px-5 hover:bg-gray-500'>Services Details</p>
              </div>
             )}

            </li>
            <li>Contact</li>
           </ul>
        </div>
        <div className='flex gap-4 items-center'>
        <div className='relative inline-flex' >
          <BsTelephoneOutboundFill className='text-white text-3xl relative z-10'/>
           <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
        </div>
         <span>
            <p className='font-bold'>Have Any Questions?</p>
            <p>+123 456 78998</p>
         </span>
        
       
         </div>
     </div>
    </nav>
    </>
  )
}

export default NavBar