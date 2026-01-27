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
     <Swiper
  modules={[Autoplay, Pagination]}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
  pagination={{
    el: ".custom-pagination",
    clickable: true,
  }}
  spaceBetween={24}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
>
  {data.map((items) => (
    <SwiperSlide key={items.id}>
      {({ isActive }) => (
        <div
          className={`shadow-lg p-4 md:p-6 transition-all duration-300
          ${isActive ? "bg-white scale-105" : "bg-gray-300"}`}
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
            <img
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
              src={items.image}
              alt={items.name}
            />

            <span>
              <h1 className="text-blue-500 font-bold text-sm md:text-xl">
                {items.name}
              </h1>
              <h5 className="text-sm font-semibold">
                {items.profession}
              </h5>
              <p>{items.rating}</p>
            </span>
          </div>

          <p className="text-gray-600 py-3 md:py-4 text-sm md:text-base">
            {items.message}
          </p>
        </div>
      )}
    </SwiperSlide>
  ))}
</Swiper>

<div className="custom-pagination flex justify-center gap-3 mt-6"></div>

<style jsx>
{`
  .custom-pagination .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: #3b82f6;
    opacity: 0.5;
    border-radius: 9999px;
    transition: opacity 0.3s, transform 0.3s;
  }
  .custom-pagination .swiper-pagination-bullet-active {
    opacity: 1;
    transform: scaleX(1.5);
  }
`}
</style>

    </>
  )
}

export default GroupSwiper