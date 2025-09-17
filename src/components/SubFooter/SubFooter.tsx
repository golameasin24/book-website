// import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";




export default function SubFooter() {
  return (
    <div className=''>
        <div className='bg-[#6C757D] px-5 py-10 sm:py-6 md:py-2 lg:flex justify-between items-center lg:px-10 xl:w-full'>
            <div className='flex gap-3 justify-center order-1'>
                    <a href=""><FaFacebookSquare className='text-blue-500 w-7 h-7 bg-white rounded-[50%]'/></a>
                    <a href=""> <FaLinkedin className='text-blue-400 w-7 h-7 bg-white rounded-[50%]' /></a>
                    <a href=""> <IoLogoInstagram className='text-red-400 w-7 h-7 bg-white rounded-[50%]' /></a>
                    <a href=""> <FaYoutube   className='text-red-400 w-7 h-7 bg-white rounded-[50% rounded-[50%]' /></a>
            </div>
            <div className='text-white my-5 text-center order-3'>
                <p>Developed by <span className='text-[#59FF07]'>Bintel Future Tech</span></p>
            </div>
            <div className='order-2'>
                <p className='text-white text-justify sm:text-center'>Copyright © 2025 BDBOOKS. All Rights</p>
                <p className='text-center text-white'> Reserved</p>
            </div>
         </div>
    </div>
  )
}
