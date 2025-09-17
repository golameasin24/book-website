// import React from 'react'

export default function Dwonload() {
  return (
    <div className='bg-[url("/AllBookImages/BOOKImage/offer_bg1.png")] mt-10 h-[700px] sm:h-[620px] md:h-[580px]  lg:h-[] text-center mb-10'>
         <div>
            <h4 className='text-5xl font-bold p-[30px]'>Download Our Mobile App</h4>
            <p className='font-bold text-4xl text-red-600'>BDBOOKS.NET</p>
            <div className='flex justify-center mb-6'>
                <a href=""><img className='w-[100px]' src="/AllBookImages/BOOKImage/scaner.png" alt="" /></a>  
            </div>
            <button className='bg-red-500 text-white font-bold px-10 py-3 hover:bg-black hover:scale-110'>Download</button>
            <div className='flex justify-center'>
                 <a href=""><img className='w-[180px]' src="/AllBookImages/BOOKImage/mobail.png" alt="" /></a>
            </div>
         </div>
    </div>
  )
}
