import React from 'react'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white' id='packages'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h2 className='text-2xl font-bold text-center py-8 text-[#00df9a]'>Learn Basics</h2>
                <p className='text-center text-4xl font-bold font-mono'>Ksh.30,000</p>
                <div className='text-center font-medium'>
                    <p className='p-2 border-b mx-8 mt-8'>Intronduction</p>
                    <p className='p-2 border-b mx-8'>Language Structure</p>
                    <p className='p-2 border-b mx-8'>Basic Data Structure</p>
                    <p className='p-2 border-b mx-8'>Basic File Operations</p>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 md:my-0 bg-gray-100 my-4 rounded-lg hover:scale-105 duration-300'>
                <h2 className='text-2xl font-bold text-center py-8 text-[#00df9a]'>Learn Intermediate</h2>
                <p className='text-center text-4xl font-bold font-mono'>Ksh.75,000</p>
                <div className='text-center font-medium'>
                    <p className='p-2 border-b mx-8 mt-8'>Connect to network</p>
                    <p className='p-2 border-b mx-8'>Complete Language Structure</p>
                    <p className='p-2 border-b mx-8'>Intermediate Data Structure</p>
                    <p className='p-2 border-b mx-8'>Intermediate File Operations</p>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h2 className='text-2xl font-bold text-center py-8 text-[#00df9a]'>Learn Expert</h2>
                <p className='text-center text-4xl font-bold font-mono'>Ksh.100,000</p>
                <div className='text-center font-medium'>
                    <p className='p-2 border-b mx-8 mt-8'></p>
                    <p className='p-2 border-b mx-8'>Java, Kotlin: Android, Java Spring Boot, Networks</p>
                    <p className='p-2 border-b mx-8'>Javascript: React, Nodejs, Express, MongoDB</p>
                    <p className='p-2 border-b mx-8 mb-3'>Hosting of Apps</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards