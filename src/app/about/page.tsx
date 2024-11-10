import React from 'react';
import Link from 'next/link'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar'

const Page = () => {
  return (
    <div className='text-green-400 bg-black'>
      <Navbar/>
      <h1 className='text-5xl text-center gap-x-3 mr-2'>About Me</h1>
      <br />

      <div className='text-5xl  text-center font-bold w-1/2 mx-auto hover:text-white cursor-pointer'>
        <h2>Zunaira Hussain</h2>
      </div>
      <br />

      <div className='text-1xl text-center border-white border-4 border-double hover:text-white cursor-pointer rounded-2xl w-1/2 mx-auto'>
        <p>Email:</p>
        <p>zunairahussain123@gmail.com</p>
      </div>

      <br />
      <br />

      <div className='text-center px-4 border-4 border-gray-200 border-double text-1xl gap-x-3 w-1/2 rounded-2xl hover:text-white cursor-pointer transition-all mx-auto'>
        <p>Education:</p>
        <p>
          Matric Completed in 2023
          <br />
          I am a student of Intermediate FSC Part 2 Pre-Medical 
        </p>
      </div>

      <br />
      <br />

      <div className='text-1xl text-center border-4 border-double border-white-400 cursor-pointer hover:text-white w-1/2 rounded-2xl mx-auto'>
        <p>Courses:</p>
        <p>
          Web 3 and Metaverse
          <br />
          Cloud-Native Computing
          <br />
          Artificial Intelligence
          <br />
          Ambient Computing and IoT
          <br />
          Genomics and Bioinformatics
          <br />
          Network Programmability and Automation
        </p>
      </div>

      <br />

      <div className='text-1xl text-center border-white border-4 rounded-2xl w-1/2 mx-auto border-double'>
        <p className='text-3xl'>Skills:</p>
        <p>
          MS Word, MS Excel, MS PowerPoint, React, Node.js, HTML, CSS, TypeScript, JavaScript, Bootstrap, Tailwind CSS, Next.js
        </p>
      </div>

      <br></br>
      <br></br>

      <div className='text-1xl flex text-center border-4 border-white border-double rounded-2xl w-1/2 p-6 mx-auto '>
        <p className='text-3xl'>Hobbies:</p>
        <p>Reading books,</p>
        
        <p> Playing games,</p> 
        <p>Listening to music,</p>
         <p>Travelling, Programming</p>
      </div>

      <br></br>
      <br></br>

      <div className='text-1xl text-center border-white border-shadow p-3  border-double border-4 rounded-2xl w-1/2 mx-auto'>
        <p className='text-3xl'>Social Media:</p>
        <p>Instagram: @zunairahussain123</p>
        <p>GitHub: @zunairahussain123</p>
      </div>
      <Footer/>
    </div>
  );
}

export default Page;