// // import React from 'react'

// "use client"

// import * as React from "react"
// import Autoplay from "embla-carousel-autoplay"

// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import { logoData } from "@/components/HSCBOOk/HscData"

// export function SMPicture() {
    
//   const plugin = React.useRef(
//     Autoplay({ delay: 1000, stopOnInteraction: true })
//   )
//   const pData = logoData;
      

//   return (
//     <Carousel
//       plugins={[plugin.current]}
//       className="w-[100px] flex justify-center"
//     //   onMouseEnter={plugin.current.stop}
//     //   onMouseLeave={plugin.current.reset}
//     //  onMouseEnter={() => plugin.current.stop()}   // ✅ ফাংশন কল করুন
//     //   onMouseLeave={() => plugin.current.reset()} // ✅ ফাংশন কল করুন
//     >
//       <CarouselContent>
//         {pData.map((logo, index) => (
//           <CarouselItem key={index}>
//             <div className="p-1">
//               <Card className="border-none shadow-none">
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <div>
//                        <img src={logo.image} alt= {`Institute picture`}/>
//                        <p>{logo.name}</p>
//                 </div>  
                 
                 
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   )
// }



"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
 CarouselPrevious
} from "@/components/ui/carousel"
import { logoData } from "@/components/HSCBOOk/HscData"

export function SMPicture() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )
  const pData = logoData

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ loop: true }}  // ✅ Infinite Loop চালু
      className="w-[200px] mx-auto sm:w-[450px] md:w-[600px] lg:w-[800px] xl:w-[1000px] mt-0"
    >
      <CarouselContent className="flex">
        {pData.map((logo, index) => (
          <CarouselItem
            key={index}
            className="basis-1/1 sm:basis-1/3 md:basis-1/3 lg:basis-1/5 xl:basis-1/5 flex-shrink-0"
          >
            <Card className="border-none shadow-none">
              <CardContent className="flex items-center justify-center p-4">
                <div className="flex flex-col items-center">
                  <img
                    src={logo.image}
                    alt={`Institute picture`}
                    className="h-300px w-[300px] xl:w-[80px]"
                  />
                  <p className="text-sm  text-center">{logo.name}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent >
      <CarouselPrevious  className="ml-[2px]  sm:mr-5  pb-5 sm:ml-[60px] xl:ml-2 text-black size-0"/>
     <CarouselNext  className="mr-[10px] pb-5 sm:mr-[60px]  text-black size-0 xl:mr-[40px]" />
    </Carousel>
  )
}
