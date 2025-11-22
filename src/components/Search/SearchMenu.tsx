
// import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { IoBagRemove } from "react-icons/io5";
import SearchBook from "@/pages/SearchBook";
import { useState } from "react";
import BagPopup from "@/pages/BagPopup";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { Input } from "../ui/input";

function SearchMenu() {
      const count = useSelector((state: RootState) => state.coutn.count);
  const [isShow,setIsShow] = useState (false)
  const [isShowBag,setIsShowBag] = useState (false)
  
  const handleShow = () => {
    setIsShow (!isShow)
  }

  
  const handleShowBag = () => {
    setIsShowBag (!isShowBag)
  }

  return (
    <div>
    <div className="px-4 md:px-10 mt-10 sm:mt-[50px] xl:w-full">
      <form className="flex items-center justify-between">
        {/* Left: Book Image */}
        <div className="flex-shrink-0">
          <a href="#">
            <img  src="/AllBookImages/BOOKImage/bdBook.png" alt="picture" className="h-9 w-[100px]" />
          </a>
        </div>
 
        {/* Center: Search */}
       <div onClick={()=> setIsShow (!isShow)}   className="flex-1 mx-4 relative max-w-xl">
          <Input
            className="w-full border border-red-600 focus:outline-none shadow-none pr-10"
            type="search"
            placeholder="Search products..."
          />
          <IoSearchOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-600" />
        </div>


        {/* Right: Icons (hidden below 1000px) */}
        <div className=" sm:flex gap-7 text-3xl">
            <button ><FiUser /></button>
          <button><CiHeart /></button>
      <button
       type="button"
       onClick={() => setIsShowBag(!isShowBag)}
      className="relative cursor-pointer"
      >
  <IoBagRemove className="text-2xl" />

  {count > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
      {count}
    </span>
  )}
</button>

        </div>
      </form>
     </div>
      { isShow && <SearchBook isOpen = {handleShow}/>}
          { isShowBag &&  <BagPopup isOpenBag={handleShowBag}/>}
    </div>
  )
}

export default SearchMenu
