import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>

      {/* left side */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[5vw] md:mb-[3vw]' >
        <p className='text3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Appointment <br /> With Trusted Doctors</p>
        <div><img src={assets.group_profiles} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, perspiciatis!
            <br />repellat voluptas sit pariatur tenetur laboriosam est, porro natus voluptatum.</p>
        </div>
        <a href='#speciality' className='flex item-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-10s transition-all duration-300'>
          Book Appointment <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>

      </div>


      {/* right side */}
      <div className='md:w-1/2 relative'>
        <img className='w-full ml-10 md:absolute bottom-0 h-auto rounded-lg' src={assets.logo_cartoon1} alt="" />

      </div>



    </div>
  )
}

export default Header