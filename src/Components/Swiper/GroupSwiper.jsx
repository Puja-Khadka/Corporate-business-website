import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import "swiper/css/pagination";

function GroupSwiper() {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://mocki.io/v1/3d283e3a-a200-4bbe-97c3-c3636dafdbc6')
        .then(res=>res.json())
        .then(data=>setData(data))
    })
  return (
    <>
      <Swiper modules={[Autoplay,Pagination]}
       slidesPerView={3}
        
        autoplay={{
            delay:5000,
            disableOnInteraction: false
        }}
        pagination={{
             el: ".custom-pagination",
            clickable: true }}
      >
        {
            data.map((items)=>(
                <SwiperSlide key={items.id}>
                  {({ isActive }) => (
    <div className={`shadow-lg p-6
    ${isActive ? "bg-white" : "bg-gray-300"}`}>
          <div className='flex items-center gap-10 '>
             <img className='w-20 h-20 ' src={items.image} alt={items.name} />
             <span>
                <h1 className='text-blue-500 font-bold text-xl'>{items.name}</h1>
                <h5 className='text-sm font-semibold'>{items.profession}</h5>
                <p>{items.rating}</p>
             </span>
          </div>
          <p className='text-gray-600 py-4'>{items.message}</p>
    </div>
  )}
                
                </SwiperSlide>

            ))
        }
        
        </Swiper> 

        <div className='custom-pagination flex justify-center gap-3 mt-6'></div> 

        <style jsx>
            {`  .custom-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: #3b82f6; 
          opacity: 0.5;
          border-radius: 9999px;
          transition: opacity 0.3s, transform 0.3s;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scaleX(1.3);`}
        </style>
    </>
  )
}

export default GroupSwiper