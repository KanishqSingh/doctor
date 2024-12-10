import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="px-4 py-8 md:px-12">
      {/* About Header */}
      <div className="text-center text-3xl font-semibold text-gray-800 mb-10">
        <p>ABOUT <span className="text-primary">US</span></p>
      </div>

      {/* About Section */}
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <img className="w-full md:w-2/5 lg:w-1/3 rounded-lg shadow-lg" src={assets.about_image} alt="About Us" />
        <div className="md:w-2/3 lg:w-2/5 text-gray-700 space-y-6">
          <p className="text-lg leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, quis aperiam veritatis esse alias explicabo ratione recusandae? Sapiente deleniti voluptatum atque velit magni, ipsum dolorum eligendi culpa et nulla rerum.</p>
          <p className="text-lg leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque iste quaerat quibusdam aliquam voluptatum distinctio! Voluptates, iure a. Itaque aspernatur officia officiis earum quaerat, veniam voluptates quibusdam odit similique facilis.</p>
          <div>
            <b className="text-xl font-medium text-gray-900">Our Vision</b>
            <p className="text-lg leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptatem itaque architecto laudantium ducimus ipsam delectus sint, hic minus veniam tenetur ad perspiciatis dignissimos velit id eos sunt praesentium molestiae.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-2xl text-center font-semibold my-10">
        <p>WHY <span className="text-primary">CHOOSE US</span></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-gray-300 rounded-lg p-6 flex flex-col gap-4 hover:bg-primary hover:text-white transition-all duration-300">
          <b className="text-xl text-gray-800">EFFICIENCY:</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas iste corporis eaque ut asperiores nam expedita praesentium voluptatum laudantium assumenda. Laboriosam nam nesciunt laudantium modi perferendis commodi assumenda quo similique.</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-6 flex flex-col gap-4 hover:bg-primary hover:text-white transition-all duration-300">
          <b className="text-xl text-gray-800">CONVENIENCE:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus mollitia ipsum officiis, iste nisi libero. Dignissimos labore consectetur quod rem modi assumenda reiciendis qui corporis eos ut. Distinctio, inventore aut!</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-6 flex flex-col gap-4 hover:bg-primary hover:text-white transition-all duration-300">
          <b className="text-xl text-gray-800">PERSONALIZATION:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At optio numquam non vitae cum in maiores ducimus esse culpa. Odio, delectus officia quos molestiae assumenda eaque minima neque quas cumque.</p>
        </div>
      </div>

      {/* Privacy Policy Section */}
      <div className="my-16">
        <h2 className="text-3xl text-center font-semibold text-gray-800 mb-4">PRIVACY <span className="text-primary">POLICY</span></h2>
        <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-300 rounded-lg p-6 flex flex-col gap-4 hover:bg-primary hover:text-white transition-all duration-300">
            <b className="text-xl text-gray-800">Information Collection</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas iste corporis eaque ut asperiores nam expedita praesentium voluptatum laudantium assumenda. Laboriosam nam nesciunt laudantium modi perferendis commodi assumenda quo similique.</p>
          </div>
          <div className="border border-gray-300 rounded-lg p-6 flex flex-col gap-4 hover:bg-primary hover:text-white transition-all duration-300">
            <b className="text-xl text-gray-800">Data Usage</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus mollitia ipsum officiis, iste nisi libero. Dignissimos labore consectetur quod rem modi assumenda reiciendis qui corporis eos ut. Distinctio, inventore aut!</p>
          </div>
          <div className="border border-gray-300 rounded-lg p-6 flex flex-col gap-4 hover:bg-primary hover:text-white transition-all duration-300">
            <b className="text-xl text-gray-800">Data Protection</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At optio numquam non vitae cum in maiores ducimus esse culpa. Odio, delectus officia quos molestiae assumenda eaque minima neque quas cumque.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
