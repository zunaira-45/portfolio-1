import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component

const Hero = () => {
  return (
    <div className='bg-black'>
      <h1 className='text-6xl text-center gap-y-7 text-green-400 font-serif hover:text-white cursor-pointer'>
        <div className='flex justify-center items-center'>
          <Image 
            src={'/images/Untitled.jpg'} 
            alt='profile' 
            className='left-5 rounded-full border-2 border-green-500 cursor-pointer' 
            width={200} // Specify the width of the image
            height={200} // Specify the height of the image
          />
        </div>
        <br />
        Hi 
        <br />
        My Name is Zunaira
      </h1>
      <p className='text-center text-red-400 mt-5 text-3xl font-bold hover:text-white'>
        Front End Developer
      </p>
      <p className='text-red-400 text-center mt-5 text-3xl font-bold hover:text-white'>
        Website Designer
      </p>
      <p className='text-center text-red-400 mt-5 text-3xl font-bold hover:text-white'>
        Website Developer
      </p>
      <p className='text-center text-red-400 mt-5 text-3xl font-bold hover:text-white'>
        Back End Developer
      </p>
      <p className='text-center text-red-400 mt-5 text-3xl font-bold hover:text-white'>
        UI/UX Designer
      </p>
      <br />
      <div className='flex justify-center'>
        <li>
          <Link className='text-green-400 hover:text-white font-serif text-2xl' href="/contact">
            <button className='bg-red-700 text-white px-4 py-2 rounded-md flex justify-center items-center'>Contact Me</button>
          </Link>
        </li>
      </div>
    </div>
  );
}

export default Hero;
