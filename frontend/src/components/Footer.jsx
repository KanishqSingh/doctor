import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate();
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                {/* first column left side */}
                <div>
                    <img className='mb-5 w-40' src={assets.logo1} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odio nulla beatae similique nisi ex esse consequatur, delectus molestias libero tenetur porro maiores explicabo aliquam recusandae vitae. Temporibus, corrupti obcaecati!
                    </p>
                </div>

                {/* second column center section */}
                <div>
                    <p className='text-xl font-medium mb-5'>company</p>
                    <ul className='flex flex-col gap-2 text-gray-600 cursor-pointer'>
                        <li onClick={()=>navigate('/')}>Home</li>
                        <li onClick={()=>navigate('/about')}>About Us</li>
                        <li onClick={()=>navigate('/contact')}>contact us</li>
                        <li onClick={()=>navigate('/about')}>privacy policy</li>
                    </ul>
                </div>
                {/* third column right section */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>98655554</li>
                        <li>kanishq2gmail.com</li>
                    </ul>
                </div>


                {/* copyright section */}
                <div>
                    <hr />
                    <p className='py-5 text-sm text-center'>copyright policy</p>
                </div>
            </div>





        </div>



    )
}

export default Footer