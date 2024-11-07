import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
      <p>ABOUT <span className='text-primary font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[300px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, quis aperiam veritatis esse alias explicabo ratione recusandae? Sapiente deleniti voluptatum atque velit magni, ipsum dolorum eligendi culpa et nulla rerum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque iste quaerat quibusdam aliquam voluptatum distinctio! Voluptates, iure a. Itaque aspernatur officia officiis earum quaerat, veniam voluptates quibusdam odit similique facilis.</p>
          <b className='text-gray-800'>our vision</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatem itaque architecto laudantium ducimus ipsam delectus sint, hic minus veniam tenetur ad perspiciatis dignissimos velit id eos sunt praesentium molestiae.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p className='text-center mt-2 mb-2'>WHY<span className='text-primary'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas iste corporis eaque ut asperiores nam expedita praesentium voluptatum laudantium assumenda. Laboriosam nam nesciunt laudantium modi perferendis commodi assumenda quo similique.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>CONVINIENCE:</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus mollitia ipsum officiis, iste nisi libero. Dignissimos labore consectetur quod rem modi assumenda reiciendis qui corporis eos ut. Distinctio, inventore aut!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>PERSONILAZATION:</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At optio numquam non vitae cum in maiores ducimus esse culpa. Odio, delectus officia quos molestiae assumenda eaque minima neque quas cumque.</p>
        </div>
      </div>

        
    </div>
  )
}

export default About