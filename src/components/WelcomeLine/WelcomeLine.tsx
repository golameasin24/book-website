// import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";


export default function WelcomeLine() {
  return (
    <div className='hidden lg:block w-full'>
        <div className='bg-[#C31C37] flex justify-items-center justify-between p-1 text-[12px]'>
            <div className='flex justify-between gap-2'>
                    <a href=""><FaFacebookSquare className='text-blue-500 w-5 h-5 bg-white rounded-[50%]'/></a>
                    <a href=""> <FaLinkedin className='text-blue-400 w-5 h-5 bg-white rounded-[50%]' /></a>
                    <a href=""> <IoLogoInstagram className='text-red-400 w-5 h-5 bg-white rounded-[50%]' /></a>
                    <a href=""> <FaYoutube   className='text-red-400 w-5 h-5 bg-white rounded-[50% rounded-[50%]' /></a>
            </div>
            <div className='text-white'>
            <p>WELCOME  TO OUR BELOVED BD BOOKS - BUY BOOKS ONLINE!</p>
            </div>
            <div className='flex justify-between gap-1 '>
                <p className='text-white'><a href="">PRODUCT REQUEST</a></p>
                <a href=""><FaMobile /></a>
                <p className='text-white'><a href="">01947540267</a></p>
            </div>
         </div>
    </div>
  )
}
