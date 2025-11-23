import type { RootState } from "@/app/store";
import { addToCart, decreaseQuantity, decrement, removeFromCart } from "@/features/BookSlice";
import { IoCloseSharp } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function BagPopup({ isOpenBag }: { isOpenBag: () => void }) {
  const dispatch = useDispatch();
  const navigate = useNavigate ()
  const cart = useSelector((state: RootState) => state.cart.cart);

  const totalPrice = cart.reduce((acc, item) => {
    const priceNumber =
      Number(item.price.toString().replace(/[^\d]/g, "")) || 0;
    return acc + priceNumber * item.quantity;
  }, 0);

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex justify-center items-start p-4 overflow-y-auto">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl border border-gray-200 mt-20 relative animate-slideDown p-5">
        {/* Close Button */}
        <IoCloseSharp
          onClick={() => isOpenBag()}
          className="absolute top-3 right-3 text-3xl cursor-pointer text-gray-700 hover:text-red-600 transition-all"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* LEFT SIDE */}
       {/* LEFT SIDE */}
<div className="lg:col-span-2 space-y-4">

  {cart.length === 0 ? (
    <div className="text-center py-10 text-gray-600 text-lg font-semibold">
      📚 বই নেই
    </div>
  ) : (
    cart.map((item) => (
      <div
        key={item.id}
        className="flex items-center bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition"
      >
        {/* Image */}
        <img
          src={item.image}
          className="w-20 h-20 rounded-lg object-cover"
          alt="product"
        />

        {/* Details */}
        <div className="ml-4 flex-1">
          <h4 className="font-semibold text-[15px] leading-5">
            {item.name}
          </h4>

          <div className="flex items-center gap-2 mt-1">
            <span className="text-red-600 font-semibold">
              ৳ {item.price}
            </span>
          </div>
        </div>

        {/* Quantity */}
        <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 mr-4">
          <button
            onClick={() => dispatch(decreaseQuantity(item.id))}
            className="px-2 text-lg font-bold"
          >
            −
          </button>

          <div className="px-3 font-medium">{item.quantity}</div>

         <button
            onClick={() =>
              dispatch(
                addToCart({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  image: item.image,
                })
                 )
               }
  className="px-2 text-lg font-bold"
>
  +
</button>

        </div>

        {/* Delete */}
        <MdDeleteForever
          onClick={() => {
            dispatch(decrement());
            dispatch(removeFromCart(item.id));
       // ⬇️ Success Toast
            toast.success("পণ্য কার্ট থেকে সফলভাবে মুছে ফেলা হয়েছে", {
              autoClose: 1200,
              className: "my-toast",
              pauseOnHover: false,
            });
          }}
          className="text-2xl text-red-500 cursor-pointer hover:text-red-700 transition"
        />
      </div>
    ))
  )}

</div>


          {/* RIGHT: SUMMARY */}
          <div className="bg-white border rounded-2xl shadow-md p-5 h-fit">
            <h3 className="text-lg font-semibold mb-3">অর্ডারের সারসংক্ষেপ</h3>
            <hr className="border-gray-300 mb-4" />

            <div className="flex justify-between text-gray-700 mb-4">
              <span>সাবটোটাল</span>
              <span className="font-semibold text-blue-600">
                ৳ {totalPrice}
              </span>
            </div>

          <button
            onClick={() => navigate("/from")}
            className="w-full bg-red-700 text-white py-2 rounded-md font-medium hover:bg-red-800 transition mb-3"
          >
              চেক আউট
          </button>


            <button className="w-full bg-blue-900 text-white py-2 rounded-md font-medium hover:bg-blue-950 transition flex items-center justify-center gap-2">
              🎁 উপহার হিসাবে অর্ডার করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BagPopup;
