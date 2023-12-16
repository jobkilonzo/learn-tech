import React from 'react'

const Newslatter = () => {
  return (
    <div id='newsletter' className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want to know our daily events?</h1>
          <p>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between gap-2 w-full'>
            <input type="email" name="" id="" placeholder='Enter Email' className='p-3 flex border border-[#218d6b] w-full rounded-md text-black focus:outline-none focus:border focus:border-[#00df9a]'/>
            <button className='bg-[#00df9a] w-[200px] hover:scale-105 duration-300 hover:text-white hover:bg-[#187e5d] rounded-md font-medium mx-auto my-6 md:mx-0 py-3 text-black'>Get Started</button>
          </div>
          <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy</span></p>
        </div>
      </div>
    </div>
  )
}

export default Newslatter