import React from 'react'
import NavBar from '../NavBar/NavBar'

function Home() {
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

          <div className='pt-20 mx-70'>
            <h3  className='text-green-500 text-center font-bold text-xl'>Best IT Solution</h3>
            <h1 className='text-7xl text-center font-bold text-black'>Quality Digital <br/>Services You Really <br/>Need</h1>
            <p className='text-center my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat id adipisci ex nam sunt quo minima autem nostrum, ut magni!</p>
            <div className='flex justify-center gap-10 mt-6'>
              <button className='rounded-full bg-green-600 px-8 py-3'>Read More</button>
              <button className='rounded-full bg-blue-600 px-8 py-3 text-white'>Contact Us</button>
            </div>
          </div>
         

      </section>
      </>
  )
}

export default Home