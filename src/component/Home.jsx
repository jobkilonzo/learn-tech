import React from 'react'
import Typed from 'react-typed'
const Home = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center' >
            <p className='text-[#00df9a] font-bold p-2'>LEARN WITH TECHS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with the best</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Learn the following  
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-5' 
                strings = {['Java', 'Kotlin', 'Javascript']}
                typeSpeed={40}
                backSpeed={50}
                loop
                />
                </p>
                
            </div>
            <p className='md:text-zxl text-xl font-bold text-gray-500'>Learn Java, Kotlin android developement with its best practices, Javascript plus its frameworks</p>
            <button className='bg-[#00df9a] w-[200px] hover:text-white hover:bg-[#187e5d] rounded-md font-medium mx-auto my-6 py-3 text-black hover:scale-105 duration-300'>Get Started</button>
        </div>
    </div>
  )
}

export default Home