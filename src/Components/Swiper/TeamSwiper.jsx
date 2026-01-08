import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
function TeamSwiper() {
    const [team, setTeam]=useState([])
     const swiperRef = useRef(null);
    useEffect(()=>{
        fetch("https://mocki.io/v1/4b471272-16d6-425d-8e1d-4869492b13a7")
        .then(data=>data.json())
        .then(data=>setTeam(data))
    },[])

  return (
    <div className=" relative max-w-6xl mx-auto">
      <div className='flex gap-3  items-center absolute -top-15 z-10 right-4'>
        <button className='rounded-full bg-blue-600 h-10 w-10 flex items-center justify-center' onClick={() => swiperRef.current.slidePrev()}><FaArrowLeft  className='text-white'/></button>
        <button className='rounded-full bg-blue-600 h-10 w-10 flex items-center justify-center' onClick={() => swiperRef.current.slideNext()}><FaArrowRight  className='text-white'/></button>

      </div>
      <Swiper
        modules={[Autoplay,Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 5000 }}
         onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="py-20"
      >
        {team.map((item,index) => (
           <SwiperSlide key={index}>
          <div className=" relative group p-4 bg-gray-400 rounded-4xl text-center shadow-lg">
            <img
              src={item.image}
              className="w-40 h-40 rounded-full mx-auto outline-8 outline-green-500  group-hover:scale-110 transition-scale duration-300"
            />
            <h3 className="mt-4 font-bold text-2xl group-hover:text-blue-600">
              {item.name}
            </h3>
            <p className="text-xl text-gray-600">Team Member</p>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TeamSwiper