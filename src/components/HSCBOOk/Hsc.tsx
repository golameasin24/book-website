

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { IoIosStar } from "react-icons/io";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { bookData } from "@/components/HSCBOOk/HscData"

export default function HSC() {
  const book = bookData

  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-10 mb-4">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-7xl xl:w-[1000px] xl:mr-[10px]"
      >
        <CarouselContent className="mt-6">
          {book.map((bookItem, index) => (
            <CarouselItem
              key={index}
              className="basis-1/1 sm:basis-1/3 md:basis-1/4 lg:basis-1/4 xl:basis-1/5"
            >
              <div className="p-2">
                <Card className="h-full shadow-md hover:shadow-lg transition-shadow border-none">
                  <CardContent className="flex flex-col items-center justify-between p-4">
                    <img
                      src={bookItem.image}
                      alt={bookItem.name}
                      className="w-full h-40 object-contain"
                    />
                    <h1 className="text-center font-semibold mt-3">{bookItem.name}</h1>
                    <p className="text-center text-sm text-gray-600">{bookItem.category}</p>
                    <div className="text-amber-300 flex m-1">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    </div>
                    <p className="text-center font-medium text-red-600">
                      {bookItem.price}
                    </p>
                    <p className="text-center text-yellow-600">{bookItem.rating}</p>
                    <div className="text-center mt-4">
                      <button className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition">
                        ADD To Cart
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-red-700 ml-10 sm:ml-5.5 lg:ml-4 text-white" />
        <CarouselNext className=" bg-red-500 mr-10 sm:mr-6 lg:mr-4 text-white" />
      </Carousel>
    </div>
  )
}

