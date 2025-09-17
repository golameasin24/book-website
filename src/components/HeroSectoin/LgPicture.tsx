




// "use client"

// import * as React from "react"
// import Autoplay from "embla-carousel-autoplay"

// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//  CarouselPrevious
// } from "@/components/ui/carousel"
// import { bigPicture } from "@/components/HSCBOOk/HscData"



// export function LgPicture() {
//   const plugin = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: false })
//   )
//   const lgData = bigPicture;

//   return (
//     <Carousel
//       plugins={[plugin.current]}
//       opts={{ loop: true }}  // ✅ Infinite Loop চালু
//       className="w-full max-w-screen-xl mx-auto"
//     >
//       <CarouselContent className="flex">
//         {lgData.map((LgPicture, index) => (
//           <CarouselItem
//             key={index}
//             className="basis-1/3 md:basis-1/6 lg:basis-1/8 flex-shrink-0"
//           >
//             <Card className="border-none shadow-none">
//               <CardContent className="flex items-center justify-center p-4">
//                 <div className="flex flex-col items-center">
//                   <img
//                     src={LgPicture.image}
//                     alt={`Institute picture`}
//                     className=" w-full object-contain"
//                   />
//                 </div>
//               </CardContent>
//             </Card>
//           </CarouselItem>
//         ))}
//       </CarouselContent >
//       <CarouselPrevious  className="ml-[50px] bg-red-500 text-white"/>
//      <CarouselNext  className="mr-[50px] bg-red-500 text-white" />
//     </Carousel>
//   )
// }


// "use client"

// import * as React from "react"
// import Autoplay from "embla-carousel-autoplay"

// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel"
// import { bigPicture } from "@/components/HSCBOOk/HscData"

// export function LgPicture() {
//   const plugin = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: false })
//   )
//   const lgData = bigPicture;

//   return (
//     <Carousel
//       plugins={[plugin.current]}
//       opts={{ loop: true }}
//       className="w-full max-w-screen-xl mx-auto"
//     >
//       <CarouselContent className="flex">
//         {lgData.map((LgPicture, index) => (
//           <CarouselItem
//             key={index}
//             // ✅ সব এক লাইনে দেখানোর জন্য flex-basis auto করা হয়েছে
//             className="basis-auto flex-shrink-0"
//           >
//             <Card className="border-none shadow-none">
//               <CardContent className="flex items-center justify-center p-2">
//                 <div className="flex flex-col items-center">
//                   <img
//                     src={LgPicture.image}
//                     alt={`Institute picture`}
//                     className="w-[1130px] h-auto object-cover rounded-md mr-[150px]"
//                   />
//                 </div>
//               </CardContent>
//             </Card>
//           </CarouselItem>
//         ))}
//       </CarouselContent>

//       {/* Navigation button */}
//     </Carousel>
//   )
// }




// "use client"

// import * as React from "react"
// import Autoplay from "embla-carousel-autoplay"

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious
// } from "@/components/ui/carousel"
// import { bigPicture } from "@/components/HSCBOOk/HscData"

// export function HeroSlider() {
//   const plugin = React.useRef(
//     Autoplay({ delay: 1000, stopOnInteraction: false })
//   )
//   const lgData = bigPicture;

//   return (
//     <div className="w-full">
//       <Carousel
//         plugins={[plugin.current]}
//         opts={{ loop: true }}
//         className="w-full"
//       >
//         <CarouselContent>
//           {lgData.map((LgPicture, index) => (
//             <CarouselItem key={index} className="w-full">
//               <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
//                 <img
//                   src={LgPicture.image}
//                   alt={`Hero picture ${index + 1}`}
//                   className="w-full h-full object-cover rounded-xl"
//                 />
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>

//         {/* Navigation button */}
//         <CarouselPrevious className="ml-4 bg-red-500 text-white rounded-full" />
//         <CarouselNext className="mr-4 bg-red-500 text-white rounded-full" />
//       </Carousel>
//     </div>
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
} from "@/components/ui/carousel"
import { bigPicture } from "@/components/HSCBOOk/HscData"

export function LgPicture() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )
  const lgData = bigPicture

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ loop: true }}
      className="w-full max-w-screen-xl mx-auto">
      <CarouselContent className="flex">
        {lgData.map((LgPicture, index) => (
          <CarouselItem
            key={index}
            className="basis-auto flex-shrink-0"
          >
            <Card className="border-none shadow-none">
              <CardContent className="flex items-center justify-center p-2">
                <div className="flex flex-col items-center w-full">
                  <img
                    src={LgPicture.image}
                    alt={`Institute picture`}
                    className="
                      w-[310px] h-auto object-cover rounded-md
                      sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1100px] xl:mr-20"/>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
