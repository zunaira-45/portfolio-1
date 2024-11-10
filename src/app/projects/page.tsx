import React from 'react'
import Link from 'next/link'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar'

const page = () => {
  return (
    <div className='bg-black text-green-400'>
      <Navbar />
      <h1 className='text-5xl text-center font-serif font-bold'>
        MY PROJECTS
      </h1>
      <br></br>
      <div className='text-1xl font-bold text-center'>
      <h2 className='text-2xl'>CALCULATOR</h2>
      <p>
        This is a simple calculator that can perform basic arithmetic operations like addition, subtraction, multiplication, and
        division.
        <br></br>
        <br></br>
        <div className=' flex justify-center items-center'>
     <img src={'/images/calculator.jpg'} alt='profile' className='left-5 rounded-full  border-2 border-green-500 cursor-pointer w-1/4' ></img>
    </div>
        <div>
        <li>
            <Link className='text-white hover:text-green-400 font-serif text-2xl' href="https://github.com/zunaira-45/simple-Calculator.git">
            <button className='bg-red-700 text-white px-4 py-2 rounded-md flex justify-center items-center font-sans'>Click Here to see</button></Link>
          </li>
        </div>
      </p>

      </div>
      <br></br>
      <br></br>

      <div className='text-1xl font-bold text-center'>
      <h2 className='text-2xl'>NUMBER GUESSING GAME</h2>
      <p>
        This is a simple number guessing game where the user has to guess a number between 1 and
        50. The user gets 6 chances to guess the number. If the user guesses the
        number correctly, the user wins. If the user runs out of chances, the user loses.
        </p>
        <br></br>
        <div className=' flex justify-center items-center'>
     <img src={'/images/guess.jpg'} alt='profile' className='left-5 rounded-full border-2 border-green-500 cursor-pointer' ></img>
    </div>
        <div>
        <li>
            <Link className='text-white hover:text-green-400 font-serif text-2xl' href="https://github.com/zunaira-45/number-guessing-game.git">
            <button className='bg-red-700 text-white px-4 py-2 rounded-md flex justify-center items-center font-sans'>Click Here to see</button></Link>
          </li>
          </div>
          </div>
         <br></br>
         <br></br>

         <div className='text-1xl font-bold text-center'>
      <h2 className='text-2xl'> STATIC RESUME BUILDER</h2>
      <p>
        This is a simple static resume builder where the user can input their details and the resume will be
        generated 
        </p>
        <br></br>
        <div className='flex justify-center items-center'>
     <img src={'images/resume.jpg'} alt='profile' className='left-5 rounded-full border-2 border-green-500 cursor-pointer w-1/3' ></img>
    </div>
        <div>
        <li>
            <Link className='text-white hover:text-green-400 font-serif text-2xl' href="https://github.com/zunaira-45/HACKATHON-MILESTONE78.git">
            <button className='bg-red-700 text-white px-4 py-2 rounded-md flex justify-center items-center font-sans'>Click Here to see</button></Link>
          </li>
          </div>
          </div>
         <br></br>
         <br></br>

         <div className='text-1xl font-bold text-center'>
      <h2 className='text-2xl'> DYAMIC RESUME BUILDER</h2>
      <p>
        This is a simple dynamic resume builder where the user can input their details and the resume will be
        generated dynamically
        </p>
        <br></br>
        <div className='flex justify-center items-center'>
     <img src={'images/dyn.jpg'} alt='profile' className='left-5 rounded-full w-1/3 border-2 border-green-500 cursor-pointer' ></img>
    </div>
        <div>
        <li>
            <Link className='text-white hover:text-green-400 font-serif text-2xl' href="https://github.com/zunaira-45/Hackathon-milestone-3.git">
            <button className='bg-red-700 text-white px-4 py-2 rounded-md flex justify-center items-center font-sans'>Click Here to see</button></Link>
          </li>
          </div>
          </div>
          <br></br>
          <br></br>

          <div className='text-1xl font-bold text-center'>
      <h2 className='text-2xl'> EIDITABLE RESUME BUILDER</h2>
      <p>
        This is a simple editable resume builder where the user can input their details and the resume will be
        generated dynamically and you can edit it
        </p>
        <br></br>
        <div className='flex justify-center items-center'>
     <img src={'images/zu.webp'} alt='profile' className='left-5 rounded-full w-1/4 border-2 border-green-500 cursor-pointer' ></img>
    </div>
        <div>
        <li>
            <Link className='text-white hover:text-green-400 font-serif text-2xl' href="https://github.com/zunaira-45/milestone-4.git">
            <button className='bg-red-700 text-white px-4 py-2 rounded-md flex justify-center items-center font-sans'>Click Here to see</button></Link>
          </li>
          </div>
          </div>
          <br></br>
          <br></br>

          <div className='text-1xl font-bold text-center'>
      <h2 className='text-2xl'> SHAREABLE RESUME BUILDER</h2>
     <p>
      This is a simple shareable resume builder where the user can input their details and the resume will be
      generated in pdf form you can also edit it
     </p>
        <br></br>
        <div className='flex justify-center items-center'>
     <img src={'images/li.webp'} alt='profile' className='left-5 rounded-full w-1/3 border-2 border-green-500 cursor-pointer' ></img>
    </div>
        <div>
        <li>
            <Link className='text-white hover:text-green-400 font-serif text-2xl' href="https://github.com/zunaira-45/milestone-5.git">
            <button className='bg-red-700 text-white px-4 py-2 rounded-md flex justify-center items-center font-sans'>Click Here to see</button></Link>
          </li>
          </div>
          </div>
     <Footer/>
    </div>
    
  )
}

export default page
