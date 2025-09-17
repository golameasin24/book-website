import { FaTelegramPlane } from "react-icons/fa";
import { Input } from '@/components/ui/input'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-[300px] mx-auto p-2 sm:w-[600px] md:w-[700px] lg:w-[900px] lg:hidden"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className=" text-2xl text-[#6C757D]" >Connect with Us</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
        <div className="text-[#6C757D]">
            <p className="text-[20px] mb-3">Purana Paltan, Dhaka 1000</p>
            <p className="text-[20px] mb-3">Customer Care:09639002255</p>
            <p className="text-[20px] mb-3">Sales:01896199102</p>
            <p className="text-[20px] mb-3">Email:support@bdbooks.net</p>
            <p className="text-[20px] mb-3 text-red-600">Whatsapp </p>
        </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-2xl text-[#6C757D]">Explore More</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">

            <div className="text-[#6C757D]">
                <p className="mb-3 text-[20px]"><a href="">  About Us</a></p>
                <p className="mb-3 text-[20px]"> <a href=""> Privacy & Policy</a></p>
                <p className="mb-3 text-[20px]"><a href="">Terms & Conditions</a></p>
                <p className="mb-3 text-[20px]"><a href="">Read Our Blogs</a></p>
                <p className="mb-3 text-[20px]"><a href=""> Contact Us</a></p>
            </div>

        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-2xl text-[#6C757D]">My Account</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
           
             <div className="text-[#6C757D]">
                <p className="mb-3 text-[20px]"><a href="">  Log In Us</a></p>
                <p className="mb-3 text-[20px]"> <a href="">Register</a></p>
                <p className="mb-3 text-[20px]"><a href="">Wish List</a></p>
                <p className="mb-3 text-[20px]"><a href="">All orders</a></p>
                <p className="mb-3 text-[20px]"><a href="">Track order</a></p>
            </div>
          
        </AccordionContent>
          </AccordionItem>
         <AccordionItem value="item-4">
        <AccordionTrigger className="text-2xl text-[#6C757D]">NewSletter Signup</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
             <div className="text-[#6C757D]">
                <p className="mb-3 text-[20px]"><a href="">Get instant updates on new products and special promos!</a></p>
                 <div className='relative mt-[50px]'>
                <Input className='border-2 border-red-500' type='email' placeholder='Enter Your Email here ...'/>
                 <FaTelegramPlane className='bg-red-500 p-1 text-white text-2xl absolute right-3 top-2' />
            </div>
            </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
