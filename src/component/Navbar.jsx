import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNab = () => {
    setNav(!nav)
    console.log(nav)
  }
  return (
    <div className='flex justify-between h-24 max-w-[1240px] mx-auto px-4 text-white'>
      
        <div>
        <h1 className='w-full hover:text-white text-3xl font-bold text-[#00df9a] mt-1 hover:scale-105 duration-300'>Learn Tech</h1>
        </div>
        <ul className='hidden md:flex'>
            <li className='p-4 hover:text-[rgb(91,201,166)] hover:scale-105 duration-300'><a href="/">Home</a></li>
            <li className='p-4 hover:text-[rgb(91,201,166)] hover:scale-105 duration-300'><a href="#message">Message From Director</a></li>
            <li className='p-4 hover:text-[rgb(91,201,166)] hover:scale-105 duration-300'><a href="#newsletter">Newsletter</a></li>
            <li className='p-4 hover:text-[rgb(91,201,166)] hover:scale-105 duration-300'><a href="#packages">Packages</a></li>
        </ul>
        <div onClick={handleNab} className='block md:hidden'>
          
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
          
        </div> 
        <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out' : 'fixed left-[-100%]'}>
        
        <h1 className='w-full md:hidden hover:text-white text-3xl font-bold px-4 text-[#00df9a] mt-1'>Learn Tech</h1>
        <ul className='p-4 uppercase'>
            <li className='p-4 border-b border-gray-600 hover:text-[rgb(91,201,166)]'>Home</li>
            <li className='p-4 border-b border-gray-600 hover:text-[rgb(91,201,166)]'><a href="#message">Message From Director</a>r</li>
            <li className='p-4 border-b border-gray-600 hover:text-[rgb(91,201,166)]'><a href="#newsletter">Newsletter</a>r</li>
            <li className='p-4 hover:text-[rgb(91,201,166)]'><a href="#packages">Packages</a></li>
        </ul> 
        </div>
    </div>
  )
}

export default Navbar