import { Card, CardContent } from "@/components/ui/card";
import { IoIosStar } from "react-icons/io";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import ProductDetailsPopup from "@/pages/ProductDetailsPopup";
import { useDispatch } from "react-redux";
import { addToCart, increment } from "@/features/BookSlice";
import { bookData, type bookType } from "./HscData";

// ⬇️ Toastify Import
import { toast } from "react-toastify";
import { LgPicture } from "../HeroSectoin/LgPicture";
import { SMPicture } from "../SmPicture/SMPicture";
import { Publication } from "../Publications/Publication";
import Dwonload from "../DownloadSite/Dwonload";

export default function HSC() {
  const dispatch = useDispatch();

  const [isShow, setIsShow] = useState(false);
  const [selectedBook, setSelectedBook] = useState<bookType | null>(null);

  const handleShow = () => setIsShow(false);

  return (
    <div>
      <LgPicture/>
      <SMPicture/>
      
    <div className="flex justify-center px-4 sm:px-6 lg:px-10 mb-4">
      <Carousel
        opts={{ align: "start" }}
        className="w-full max-w-7xl xl:w-[1000px] xl:mr-[10px]"
      >
        <CarouselContent className="mt-6">
          {bookData.map((bookItem, index) => {
            const { id, name, image, price, category, rating } = bookItem;

            return (
              <CarouselItem
                key={index}
                className="basis-1/1 sm:basis-1/3 md:basis-1/4 lg:basis-1/4 xl:basis-1/5"
              >
                <div className="p-2">
                  <Card className="h-full shadow-md hover:shadow-lg transition-shadow border-none">
                    <CardContent className="flex flex-col items-center justify-between p-4">
                      
                      {/* Image Click */}
                      <img
                        onClick={() => {
                          setSelectedBook(bookItem);
                          setIsShow(true);
                        }}
                        src={image}
                        alt={name}
                        className="w-full h-40 object-contain cursor-pointer"
                      />

                      <h1 className="text-center font-semibold mt-3">{name}</h1>

                      <p
                        onClick={() => {
                          setSelectedBook(bookItem);
                          setIsShow(true);
                        }}
                        className="text-center text-sm text-gray-600 cursor-pointer"
                      >
                        {category}
                      </p>

                      {/* Rating */}
                      <div className="flex gap-x-1 my-2 text-yellow-500">
                        {[...Array(Number(rating) || 5)].map((_, i) => (
                          <IoIosStar key={i} />
                        ))}
                      </div>

                      <p className="text-center font-medium text-red-600">{price}</p>

                      <div className="text-center mt-4">
                        <button
                          onClick={() => {
                            dispatch(increment());
                            dispatch(addToCart({ id, name, price, image }));

                            // ⬇️ Success Toast
                            toast.success("পণ্য কার্টে সফলভাবে যোগ করা হয়েছে", {
                              autoClose: 1200,
                              className: "my-toast",
                              pauseOnHover: false,
                            });
                          }}
                          className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition"
                        >
                          ADD To Cart
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious className="bg-red-700 ml-5 text-white" />
        <CarouselNext className="bg-red-600 mr-5 text-white" />
      </Carousel>

      {/* Popup */}
      {isShow && selectedBook && (
        <ProductDetailsPopup onBook={selectedBook} isOpen={handleShow} />
      )}
    </div>
       <Publication/>
       <Dwonload/>
    </div>
  );
}
