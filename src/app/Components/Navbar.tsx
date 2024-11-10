import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-black'>
    <div className='text-black-700 flex justify-between items-center'>
      <h1 className='text-3xl m-2 cursor-pointer hover:not-italic font-extrabold text-green-400'>MY PORTFOLIO</h1> 

      <nav>
        <ul className='flex gap-3 mr-4'>
          <li>
            <Link className='text-green-400 hover:text-white font-serif text-2xl' href="/">Home</Link>
          </li>
          <li>
            <Link className='text-green-400  hover:text-white font-serif text-2xl'href="/about">About</Link>
          </li>
          <li>
            <Link className='text-green-400  hover:text-white font-serif text-2xl' href="/contact">Contact</Link>
          </li>
          <li>
            <Link className='text-green-400  hover:text-white font-serif text-2xl' href="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>


  
  )
}



export default Navbar
