import React from 'react'
import learn from '../images/learn.jpg'
import { message } from '.'
const Message = () => {
  return (
    <div className='w-full bg-white py-16 px-4' id='message'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img src={learn} alt="" className='w-[600px] h-[500px] rounded-lg mx-auto m-4' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>From Director</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Message</h1>
          <p className='font-mono'>{message}

          </p>
          <button className='bg-[#00df9a] w-[200px] hover:text-white hover:bg-[#187e5d] rounded-md font-medium mx-auto my-6 md:mx-0 py-3 text-black hover:scale-105 duration-300'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Message