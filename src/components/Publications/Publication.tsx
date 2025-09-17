
"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
//   CarouselNext,
//  CarouselPrevious
} from "@/components/ui/carousel"
import { pbData } from "@/components/HSCBOOk/HscData"



export function Publication() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: false })
  )
  const pData = pbData;

  return (
    <div className="bg-white">
           <div className="text-center text-[#6C757D] mt-8 mb-4">
                <h4 className="text-4xl mb-4">
                   Publications
                </h4>
                <p> PublicationsNavigate the World of Publications</p>
           </div>

            <Carousel
            plugins={[plugin.current]}
            opts={{ loop: true }}  // ✅ Infinite Loop চালু
            className="w-full max-w-screen-xl mx-auto"
            >
            <CarouselContent className="flex">
                {pData.map((logo, index) => (
                <CarouselItem
                    key={index}
                    className="basis-1/1 md:basis-1/1 lg:basis-1/1 flex-shrink-0"
                >
                    <Card className="border-none shadow-none">
                    <CardContent className="flex items-center justify-center p-4">
                        <div className="flex flex-col items-center border border-sky-200 p-4 shadow shadow-white rounded-2xl">
                        <a href="">   <img
                            src={logo.image}
                            alt={`Institute picture`}
                            className=" h-[300px] w-[300px]"
                        /></a>   
                        </div>
                    </CardContent>
                    </Card>
                </CarouselItem>
                ))}
            </CarouselContent >
            {/* <CarouselPrevious  className="ml-[50px] bg-red-500 text-white"/>
            <CarouselNext  className="mr-[50px] bg-red-500 text-white" /> */}
            </Carousel>

    </div>
  )
}
