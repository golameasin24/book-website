import { Input } from '@/components/ui/input'
import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
export default function Footer() {
  return (
<div className='hidden lg:block'>

    <div className='bg-[#F8F9FA] flex justify-between mt-4 p-10 xl:w-full'>
         <div>
            <h4 className='border-b-2 border-red-400 mb-4 py-2 font-bold'>Connect with Us</h4>
            <p className='mb-3 text-[#6C757D] text-[14px]'>Purana Paltan, Dhaka 1000 </p>
            <p className='mb-3 text-[#6C757D] text-[14px]'><a href="">Customer Care:09639002255 </a></p>
            <p className='mb-3 text-[#6C757D] text-[14px]'><a href="">Sales:01896199102 </a></p>
            <p className='mb-3 text-[#6C757D] text-[14px]'>Email:</p>
            <p className='mb-3 text-[#6C757D] text-[14px]'><a href="">support@bdbooks.net</a></p>
            <p className='mb-3 text-red-500 text-[14px]'><a href="">Whatsapp </a></p>
         </div>

         <div>
            <h4 className='border-b-2 border-red-400 mb-4 py-2 font-bold'>Explore More</h4>
            <p className='mb-3 text-[#6C757D] text-[14px]'><a href="">About Us</a></p>
            <p className='mb-3 text-[#6C757D] text-[14px]'><a href="">Privacy & Policy</a></p>
            <p className='mb-3 text-[#6C757D] text-[14px]'><a href="">Terms & Conditions</a></p>
            <p className='mb-3 text-[#6C757D] text-[14px]'><a href="">Read Our Blogs</a></p>
            <p className='mb-3 text-[#6C757D] text-[14px]'><a href="">Contact Us</a></p>
         </div>

         
         <div>
            <h4 className='border-b-2 border-red-400 py-2 mb-4 font-bold'>My Account</h4>
            <p className='mb-3 text-[#6C757D] text-[14px]'><a href="">Log In</a></p>
            <p className='mb-3 text-[#6C757D] text-[14px]'><a href="">Register</a></p>
            <p className='mb-3 text-[#6C757D] text-[14px]'><a href="">Wish List</a></p>
            <p className='mb-3 text-[#6C757D] text-[14px]'><a href="">All orders</a></p>
            <p className='mb-3 text-[#6C757D] text-[14px]'><a href="">Track order</a></p>
         </div>

         <div>
            <h4 className='border-b-2 border-red-400 py-2 mb-4 font-bold'>Newsletter Signup</h4>
            <p className='mb-3 text-[#6C757D] text-[14px]'>Get instant updates on new </p>
            <p className='mb-3 text-[#6C757D] text-[14px]'>products and special promos!</p>
            <div className='relative mt-[100px]'>
                <Input className='border-2 border-red-500' type='email' placeholder='Enter Your Email here ...'/>
                 <FaTelegramPlane className='bg-red-500 p-1 text-white text-2xl absolute right-3 top-2' />
            </div>
         </div>
    </div>
</div>
  )
}
