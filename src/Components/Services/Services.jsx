import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import "aos/dist/aos.css";
import AOS from "aos";

function Services() {
     const [services, setServices] = useState([]);
      useEffect(() => {
        fetch("https://mocki.io/v1/0d0586a1-0568-4125-8438-fd1c44e0474a")
          .then((data) => data.json())
          .then((data) => setServices(data.services));
      });
    useEffect(() => {
        AOS.init({
          duration: 1000,
          offset: 100,
          easing: "ease",
          once: true,
        });
      }, []);
  return (
    <>
    <NavBar/>
    
    <section
        className="h-80 flex  justify-center "
        style={{
          backgroundImage:
            "url('https://www.shutterstock.com/shutterstock/videos/9408497/thumb/1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pt-20 mx-70 ">
          <span
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h3 className="text-green-500 text-center font-bold text-xl">
              Best IT Solution
            </h3>
            <h1 className="text-7xl text-center font-bold text-black">
               Services
            </h1>
            {" "}
          </span>
          <p className="text-center my-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat id
            adipisci ex nam sunt quo minima autem nostrum, ut magni!
          </p>
          <div className="flex justify-center gap-8 mt-6">
            
           
          </div>
        </div>
      </section>
      <div className="bg-blue-600 py-15">
        <div className=" container mx-auto flex items-center justify-between gap-4 px-20">
          <div className="flex items-center gap-3" data-aos="zoom-in">
            <span className="text-4xl text-blue-300 font-bold">99</span>
            <h1 className="text-xl text-white font-bold">
              Success in getting happy customer{" "}
            </h1>
          </div>
          <div className="flex items-center gap-3" data-aos="zoom-in">
            <span className="text-4xl text-blue-300 font-bold">99</span>
            <h1 className="text-xl text-white font-bold">
              Success in getting happy customer{" "}
            </h1>
          </div>
          <div className="flex items-center gap-3 font-bold" data-aos="zoom-in">
            <span className="text-4xl text-blue-300 font-bold">99</span>
            <h1 className="text-xl text-white">
              Success in getting happy customer{" "}
            </h1>
          </div>
          <div className="flex items-center gap-3" data-aos="zoom-in">
            <span className="text-4xl text-blue-300 font-bold">99</span>
            <h1 className="text-xl text-white font-bold">
              Success in getting happy customer{" "}
            </h1>
          </div>
        </div>
      </div>

       <section className='my-20'>
        <div className="container mx-auto">
          <span className="text-center " data-aos="zoom-in">
            <h3 className="text-blue-600 text-xl font-semibold">
              Our Services
            </h3>
            <h1 className="text-4xl font-bold">
              {" "}
              Services build Specifically For
              <br /> Your Business
            </h1>
          </span>

          <div className="grid grid-cols-3 grid-rows-2 gap-6 mx-20 mt-10">
            {services.map((item) => (
              <div
                key={item.id}
                className=" relative group shadow-lg shadow-gray-300  rounded-4xl overflow-hidden text-center p-6"
                data-aos="zoom-in"
              >
                <div className="absolute inset-0 bg-blue-500 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                <img
                  className=" w-30 h-30 mx-auto relative z-5  "
                  src={item.image}
                  alt={item.title}
                />
                <p className="font-bold py-3 text-xl relative z-5">
                  {item.title}
                </p>
                <p className="text-gray-600 relative z-5 group-hover:text-white">
                  {item.description}
                </p>
                <button className="my-3 rounded-full bg-blue-700 py-2 px-3 relative z-5">
                  {item.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default Services