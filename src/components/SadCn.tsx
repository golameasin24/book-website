
// import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function SadCn() {
  return (
    <div>
            <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-lg"
    >
      <CarouselContent className="mt-10 ml-10">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
            <div className="pl-5">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ) )}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
    </div>
  )
}
