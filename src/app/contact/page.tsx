import React from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar'



const page = () => {
  return (
    <div className='bg-black'>
      <Navbar/>
      <h1 className='text-5xl text-center font-bold bg-black text-green-400 w-1/8'>
        CONTACT PAGE
      </h1>
      <br>
      </br>
      <br>
      </br>
      <form className=' mt-4'>
        <div className='mb-4'>
          <label className='block text-green-400 text-3xl' htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            className='border border-green-400 p-2 border-100 w-full outline'
            placeholder='Enter your name'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-green-400 text-3xl ' htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            className='border-green-400 p-2 border-100 w-full outline'
            placeholder='Enter your email'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-green-400 text-3xl' htmlFor='message'>Message</label>
          <textarea
            id='message'
            className='border p-2 w-full outline'
            placeholder='Enter your message'
            rows={4}
            required
          />
        </div>
        <button type='submit' className='bg-red-800 text-white p-2 rounded'>
          Send Message
        </button>
      </form>
      <Footer/>
      </div>

  );
}


export default page
