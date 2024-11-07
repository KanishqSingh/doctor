import React from 'react'
import { assets } from '../assets/assets'




const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className="text-gray-700 font-semibold">US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image } alt="" />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Our Office</p>
          <p className='text-lg text-gray-500'>6/3 D1-a shastri nagar khandari agra</p>
          <p className='text-lg text-gray-500'>98764132</p>
          <p className='font-semibold text-lg text-gray-600'>careers at this website</p>
          <p className='font-semibold text-lg text-gray-600'>hello world hello world</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white translate-all duration-500'>Explore Jobs</button>
        </div>
      </div>
        
    </div>
  )
}

export default Contact