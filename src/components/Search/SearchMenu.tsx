
// import { Input } from '@/components/ui/input'
// import React from 'react'
// import { IoSearchOutline } from "react-icons/io5";
// import { FiUser } from "react-icons/fi";
// import { CiHeart } from "react-icons/ci";
// import { IoBagRemove } from "react-icons/io5";
// function SearchMenu() {
//   return (
//     <div>
//          <form className='flex items-center justify-between mt-10'>
//                 <div className='ml-2'>
//                     <a href=""><img src="/AllBookImages/BOOKImage/bdBook.png" alt="picture" /></a>
//                 </div>
//                <div className='flex gap-x-[300px]'>

//                 <div className='w-[500px]  mx-auto relative'>
//                     <Input className='border border-red-600 focus:outline-sha shadow-none' type="search"  placeholder='Search products...' />
//                     <IoSearchOutline className='absolute  right-10 top-3 text-[20px]' />
//                 </div>

//                     <div className='flex gap-7 mr-2 text-3xl'>
//                         <a href=""><FiUser /></a>
//                         <a href=""><CiHeart /></a>
//                         <a href=""><IoBagRemove /></a>
//                     </div>
//                </div>
//          </form>
//     </div>
//   )
// }

// export default SearchMenu

import { Input } from '@/components/ui/input'
// import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { IoBagRemove } from "react-icons/io5";

function SearchMenu() {
  return (
    <div className="px-4 md:px-10 mt-10 sm:mt-[50px] xl:w-full">
      <h1 className='text-center mb-5 text-2xl font-bold text-red-400'>This Site made by Golam Yeasin</h1>
      <form className="flex items-center justify-between">
        {/* Left: Book Image */}
        <div className="flex-shrink-0">
          <a href="">
            <img  src="/AllBookImages/BOOKImage/bdBook.png" alt="picture" className="h-9 w-[100px]" />
          </a>
        </div>

        {/* Center: Search */}
        <div className="flex-1 mx-4 relative max-w-xl">
          <Input
            className="w-full border border-red-600 focus:outline-none shadow-none pr-10"
            type="search"
            placeholder="Search products..."
          />
          <IoSearchOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-600" />
        </div>

        {/* Right: Icons (hidden below 1000px) */}
        <div className="hidden sm:flex gap-7 text-3xl">
          <a href=""><FiUser /></a>
          <a href=""><CiHeart /></a>
          <a href=""><IoBagRemove /></a>
        </div>
      </form>
    </div>
  )
}

export default SearchMenu
