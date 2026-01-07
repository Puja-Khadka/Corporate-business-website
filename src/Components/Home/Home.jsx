import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import TeamSwiper from "../Swiper/TeamSwiper";


function Home() {
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
      <NavBar />

      <section
        className="h-screen flex  justify-center "
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
              Quality Digital <br />
              Services You Really <br />
              Need
            </h1>{" "}
          </span>
          <p className="text-center my-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat id
            adipisci ex nam sunt quo minima autem nostrum, ut magni!
          </p>
          <div className="flex justify-center gap-8 mt-6">
            <button
              className="rounded-full bg-green-600 px-8 py-3"
              data-aos="fade-right"
            >
              Read More
            </button>
            <button
              className="rounded-full bg-blue-600 px-8 py-3 text-white"
              data-aos="fade-left"
            >
              Contact Us
            </button>
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

      <section className="my-30">
        <div className=" container mx-auto grid grid-cols-2 gap-2 px-20 ">
          <div className="relative" data-aos="zoom-in">
            <img
              className="w-90   rounded-2xl shadow-lg"
              src="https://media.istockphoto.com/id/541114144/photo/bound-by-business.jpg?s=612x612&w=0&k=20&c=sRpFWa216olf8SZkAK3MTwyNAfHNt4G5eGZPHNfOvvQ="
              alt=""
            />
            <img
              className="w-90  rounded-2xl shadow-lg absolute top-30 left-30"
              src="https://media.istockphoto.com/id/2103894533/photo/business-people-in-the-office.jpg?s=612x612&w=0&k=20&c=DrnqkuBHgk3_YicnJJwm45HopK626ZqWAmlgUpXaBRc="
              alt=""
            />
          </div>
          <div data-aos="zoom-in-up">
            <h2 className="text-blue-700 font-bold ">About Us</h2>
            <h1 className="text-5xl font-bold">
              About HighTech Agency and Its Innovative IT solution
            </h1>
            <p className="py-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              nobis harum illo? Architecto nobis ea aut fugiat vitae expedita
              adipisci unde facilis totam. Quasi pariatur molestias temporibus
              fugit voluptatum obcaecati!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores voluptatum alias molestias fuga facere ab doloribus hic
              nihil, optio culpa ipsam reiciendis adipisci, blanditiis suscipit.
            </p>
            <button className="bg-blue-700 text-white py-3 px-6 my-3 rounded-full">
              More Details
            </button>
          </div>
        </div>
      </section>
      <section>
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

      <section className="my-30">
        <div className="container mx-auto">
        <div className="text-center ">
          <h3 className="text-xl text-blue-600 font-semibold">Our Project</h3>
          <h1 className="font-bold text-4xl">
            Our Recently Completed <br /> Projects
          </h1>
        </div>
        <div className=" flex justify-center mx-20 mt-20 gap-20" >
          <div className="relative group inline-block" data-aos="zoom-in">
            <span className="relative ">
              <img
                className="w-72 relative z-10 rounded-md "
                src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg"
                alt=""
              />
              <div
                className="w-30 h-12 bg-blue-600 text-white rounded-md absolute top-20 left-22 
      opacity-0 scale-95
      group-hover:opacity-100 group-hover:scale-120
      transition-all duration-300 z-10"
              >
                <span className="text-center ">
                  <h1 className="font-bold">Web Design</h1>{" "}
                  <h5>Web Analysis</h5>
                </span>
              </div>
            </span>
            <div className="w-25 h-25  bg-green-600 rounded-md absolute -top-3 -left-3 group-hover:opacity-0 transition-opacity duration-300"></div>
            <div className="w-25 h-25  bg-blue-600 rounded-md absolute -bottom-3 -right-3 group-hover:opacity-0 duration-300"></div>
          </div>
           <div className="relative group inline-block" data-aos="zoom-in">
            <span className="relative ">
              <img
                className="w-72 relative z-10 rounded-md"
                src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg"
                alt=""
              />
              <div
                className="w-30 h-12 bg-blue-600 text-white rounded-md absolute top-20 left-22 
      opacity-0 scale-95
      group-hover:opacity-100 group-hover:scale-120
      transition-all duration-300 z-10"
              >
                <span className="text-center ">
                  <h1 className="font-bold">Web Design</h1>{" "}
                  <h5>Web Analysis</h5>
                </span>
              </div>
            </span>
            <div className="w-25 h-25  bg-green-600 rounded-md absolute -top-3 -left-3 group-hover:opacity-0 transition-opacity duration-300"></div>
            <div className="w-25 h-25  bg-blue-600 rounded-md absolute -bottom-3 -right-3 group-hover:opacity-0 duration-300"></div>
          </div>
           <div className="relative group inline-block" data-aos="zoom-in">
            <span className="relative ">
              <img
                className="w-72 relative z-10 rounded-md"
                src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg"
                alt=""
              />
              <div
                className="w-30 h-12 bg-blue-600 text-white rounded-md absolute top-20 left-22 
      opacity-0 scale-95
      group-hover:opacity-100 group-hover:scale-120
      transition-all duration-300 z-10"
              >
                <span className="text-center ">
                  <h1 className="font-bold">Web Design</h1>{" "}
                  <h5>Web Analysis</h5>
                </span>
              </div>
            </span>
            <div className="w-25 h-25  bg-green-600 rounded-md absolute -top-3 -left-3 group-hover:opacity-0 transition-opacity duration-300"></div>
            <div className="w-25 h-25  bg-blue-600 rounded-md absolute -bottom-3 -right-3 group-hover:opacity-0 duration-300"></div>
          </div>
        </div>
        <div className="flex justify-center mx-30 mt-20 gap-20">
          <div className="relative group inline-block" data-aos="zoom-in">
            <span className="relative ">
              <img
                className="w-72 relative z-10 rounded-md"
                src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg"
                alt=""
              />
              <div
                className="w-30 h-12 bg-blue-600 text-white rounded-md absolute top-20 left-22 
      opacity-0 scale-95
      group-hover:opacity-100 group-hover:scale-120
      transition-all duration-300 z-10"
              >
                <span className="text-center ">
                  <h1 className="font-bold">Web Design</h1>{" "}
                  <h5>Web Analysis</h5>
                </span>
              </div>
            </span>
            <div className="w-25 h-25  bg-green-600 rounded-md absolute -top-3 -left-3 group-hover:opacity-0 transition-opacity duration-300"></div>
            <div className="w-25 h-25  bg-blue-600 rounded-md absolute -bottom-3 -right-3 group-hover:opacity-0 duration-300"></div>
          </div>
           <div className="relative group inline-block" data-aos="zoom-in">
            <span className="relative ">
              <img
                className="w-72 relative z-10 rounded-md"
                src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg"
                alt=""
              />
              <div
                className="w-30 h-12 bg-blue-600 text-white rounded-md absolute top-20 left-22 
      opacity-0 scale-95
      group-hover:opacity-100 group-hover:scale-120
      transition-all duration-300 z-10"
              >
                <span className="text-center ">
                  <h1 className="font-bold">Web Design</h1>{" "}
                  <h5>Web Analysis</h5>
                </span>
              </div>
            </span>
            <div className="w-25 h-25  bg-green-600 rounded-md absolute -top-3 -left-3 group-hover:opacity-0 transition-opacity duration-300"></div>
            <div className="w-25 h-25  bg-blue-600 rounded-md absolute -bottom-3 -right-3 group-hover:opacity-0 duration-300"></div>
          </div>
           <div className="relative group inline-block" data-aos="zoom-in">
            <span className="relative ">
              <img
                className="w-72 relative z-10 rounded-md"
                src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg"
                alt=""
              />
              <div
                className="w-30 h-12 bg-blue-600 text-white rounded-md absolute top-20 left-22 
      opacity-0 scale-95
      group-hover:opacity-100 group-hover:scale-120
      transition-all duration-300 z-10"
              >
                <span className="text-center ">
                  <h1 className="font-bold">Web Design</h1>{" "}
                  <h5>Web Analysis</h5>
                </span>
              </div>
            </span>
            <div className="w-25 h-25  bg-green-600 rounded-md absolute -top-3 -left-3 group-hover:opacity-0 transition-opacity duration-300"></div>
            <div className="w-25 h-25  bg-blue-600 rounded-md absolute -bottom-3 -right-3 group-hover:opacity-0 duration-300"></div>
          </div>
        </div>
        </div>
      </section>

      <section >
        <div className="container mx-auto">
        <div className="text-center">
          <h3 className="text-blue-600 font-semibold text-xl">Our Blog</h3>
          <h1 className="text-4xl font-bold">Latest Blog & News</h1>
        </div>
        <div className="mt-20 flex items-center justify-center gap-15 mx-20">
           <div className="shadow-lg shadow-gray-500  w-80 relative " data-aos="zoom-out-right">
             <img className="w-80" src="https://media.istockphoto.com/id/1479759169/photo/data-science-and-big-data-technology-data-scientist-computing-analysing-and-visualizing.jpg?s=612x612&w=0&k=20&c=m5CzwqrVWCfTfYE7klKKth7CJ98uy0CBEiQGIKp-_X0=" alt="" />
            <span className="text-center p-3  ">
               <h1 className="font-bold pt-3">By Daniel Martin</h1>
               <h3 className="py-2 text-blue-400">5 January 2026</h3>
               <p className="text-gray-600 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, itaque.</p>
               <div className="bg-blue-700 w-full p-4 absolute bottom-0"></div>

               </span>
               <img className="w-20 object-cover rounded-full border-2 border-white outline-2 outline-white shadow-lg absolute top-45 left-30" src="https://www.uclawsf.edu/wp-content/uploads/2024/01/martin_d_cropped_low_res_transparent_19779.png" alt="" />
              <button className="rounded-full bg-green-400 px-4 py-2 absolute top-35  text-white">Read More</button>
             
             <span className="absolute top-35 right-4  "> 
               <button className="rounded-full bg-green-400 px-5 py-2  relative group inline-block  overflow-hidden"> <span className=" flex  items-center gap-3 text-white  group-hover:opacity-0">Share <FaArrowRight /></span>
                 <span className="flex justify-center items-center gap-2  absolute inset-0 -translate-x-full opacity-0 z-50 group-hover:translate-x-0 group-hover:opacity-100 transition-transform  duration-500 ease-in-out ">
                 <FaFacebookF className="text-white"/>
                 <FaFacebookF className="text-white" />
                 <FaFacebookF className="text-white"/>
              </span>
               </button>

            
             </span>

            
               <div className="bg-blue-700 text-white px-5 py-3 absolute  -top-5 right-4 rounded-2xl">
                Web Deissgn
               </div>
           </div>
           <div className="shadow-lg shadow-gray-500 w-80 relative " data-aos="zoom-out-right">
             <img className="w-80" src="https://media.istockphoto.com/id/1479759169/photo/data-science-and-big-data-technology-data-scientist-computing-analysing-and-visualizing.jpg?s=612x612&w=0&k=20&c=m5CzwqrVWCfTfYE7klKKth7CJ98uy0CBEiQGIKp-_X0=" alt="" />
            <span className="text-center p-3  ">
               <h1 className="font-bold pt-3">By Daniel Martin</h1>
               <h3 className="py-2 text-blue-400">5 January 2026</h3>
               <p className="text-gray-600 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, itaque.</p>
               <div className="bg-blue-700 w-full p-4 absolute bottom-0"></div>

               </span>
               <img className="w-20 object-cover rounded-full border-2 border-white outline-2 outline-white shadow-lg absolute top-45 left-30" src="https://www.uclawsf.edu/wp-content/uploads/2024/01/martin_d_cropped_low_res_transparent_19779.png" alt="" />
              <button className="rounded-full bg-green-400 px-4 py-2 absolute top-35  text-white">Read More</button>
             
             <span className="absolute top-35 right-4  "> 
               <button className="rounded-full bg-green-400 px-5 py-2  relative group inline-block  overflow-hidden"> <span className=" flex  items-center gap-3 text-white  group-hover:opacity-0">Share <FaArrowRight /></span>
                 <span className="flex justify-center items-center gap-2  absolute inset-0 -translate-x-full opacity-0 z-50 group-hover:translate-x-0 group-hover:opacity-100 transition-transform  duration-500 ease-in-out ">
                 <FaFacebookF className="text-white"/>
                 <FaFacebookF className="text-white" />
                 <FaFacebookF className="text-white"/>
              </span>
               </button>

            
             </span>

            
               <div className="bg-blue-700 text-white px-5 py-3 absolute  -top-5 right-4 rounded-2xl">
                Web Deissgn
               </div>
           </div>
           <div className="shadow-lg shadow-gray-500  w-80 relative " data-aos="zoom-out-right">
             <img className="w-80" src="https://media.istockphoto.com/id/1479759169/photo/data-science-and-big-data-technology-data-scientist-computing-analysing-and-visualizing.jpg?s=612x612&w=0&k=20&c=m5CzwqrVWCfTfYE7klKKth7CJ98uy0CBEiQGIKp-_X0=" alt="" />
            <span className="text-center p-3  ">
               <h1 className="font-bold pt-3">By Daniel Martin</h1>
               <h3 className="py-2 text-blue-400">5 January 2026</h3>
               <p className="text-gray-600 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, itaque.</p>
               <div className="bg-blue-700 w-full p-4 absolute bottom-0"></div>

               </span>
               <img className="w-20 object-cover rounded-full border-2 border-white outline-2 outline-white shadow-lg absolute top-45 left-30" src="https://www.uclawsf.edu/wp-content/uploads/2024/01/martin_d_cropped_low_res_transparent_19779.png" alt="" />
              <button className="rounded-full bg-green-400 px-4 py-2 absolute top-35  text-white">Read More</button>
             
             <span className="absolute top-35 right-4  "> 
               <button className="rounded-full bg-green-400 px-5 py-2  relative group inline-block  overflow-hidden"> <span className=" flex  items-center gap-3 text-white  group-hover:opacity-0">Share <FaArrowRight /></span>
                 <span className="flex justify-center items-center gap-2  absolute inset-0 -translate-x-full opacity-0 z-50 group-hover:translate-x-0 group-hover:opacity-100 transition-transform  duration-500 ease-in-out ">
                 <FaFacebookF className="text-white"/>
                 <FaFacebookF className="text-white" />
                 <FaFacebookF className="text-white"/>
              </span>
               </button>

            
             </span>

            
               <div className="bg-blue-700 text-white px-5 py-3 absolute  -top-5 right-4 rounded-2xl">
                Web Deissgn
               </div>
           </div>
           
        </div>
         </div>
      </section>

      <section className="my-30">
        <div className="container mx-auto">
        <div className="text-center">
          <h3 className="text-blue-600 text-xl font-semibold">Our Team</h3>
          <h1 className="font-bold text-4xl">Meet Our Expert Team</h1>
        </div>
          
          <div className="mt-10">
        <TeamSwiper/>
        </div>
        </div>
      </section>
    </>
  );
}

export default Home;
