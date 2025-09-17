import React from 'react'

export default function Cokolet() {
  return (
    <div>
        <div className=' grid grid-cols-2  lg:grid-cols-4 shadow-2xs shadow-blue-100 px-2 mt-2 lg:w-[1000px] lg:mx-auto'>
            <div className='border-2 mr-1 p-1'>
                <img  src="/AllBookImages/BOOKImage/cokolet1.png" alt="" />
            </div>
            <div className='border-2 mr-1 p-1'>
                <img  src="/AllBookImages/BOOKImage/cokolet2.png" alt="" />
            </div>
            <div className='border-2 mr-1 p-1'>
                <img  src="/AllBookImages/BOOKImage/cokolet3.png" alt="" />
            </div>
            <div className='border-2 mr-1 p-1'>
                <img className=' w-[140px] sm:w-[290px] md:w-[350px]' src="/AllBookImages/BOOKImage/cokolet4.png" alt="" />
            </div>
        </div>
    </div>
  )
}
