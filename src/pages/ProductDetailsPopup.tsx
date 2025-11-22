import type { bookType } from "@/components/HSCBOOk/HscData";
import { addToCart, increment } from "@/features/BookSlice";
import { FaRegHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { useDispatch } from "react-redux";

function ProductDetailsPopup({
  isOpen,
  onBook,
}: {
  isOpen: () => void;
  onBook: bookType;
}) {
  const dispatch = useDispatch();
  const { id, name, image, price, category, rating } = onBook;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex justify-center items-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden animate-slideDown relative">

        {/* Close Button */}
        <button
          onClick={isOpen}
          className="absolute top-3 right-3 text-3xl p-1 rounded-full text-gray-700 hover:text-red-600 transition"
        >
          <IoClose />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Left: Image */}
          <div className="bg-gray-100 p-5 flex justify-center items-center">
            <img
              src={image}
              alt={name}
              className="w-full h-auto max-h-[380px] object-contain rounded-lg"
            />
          </div>

          {/* Right: Content */}
          <div className="p-6 flex flex-col justify-between">

            <div>
              {/* Title */}
              <h2 className="text-2xl font-bold leading-tight mb-1">{name}</h2>
              <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
                {category}
              </span>

              {/* ⭐ Rating Section */}
              <div className="flex gap-x-1 mt-3 text-yellow-500">
                {[...Array(Number(rating) || 5)].map((_, i) => (
                  <IoIosStar key={i} size={20} />
                ))}
              </div>

              <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                This is a high-quality HSC book that helps students understand the
                concepts easily and score well.
              </p>
            </div>

            {/* Add to Cart + Wishlist */}
            <div className="mt-6 flex items-center gap-3">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded flex-1 hover:bg-blue-600 transition"
                onClick={() => {
                  dispatch(increment());
                  dispatch(
                    addToCart({
                      id,
                      name,
                      price,
                      image,
                    })
                  );
                }}
              >
                {price} • Add to Cart
              </button>

              <button
                className="w-[45px] h-[45px] flex justify-center items-center border border-theme rounded-lg hover:bg-theme/10 transition"
              >
                <FaRegHeart className="text-theme text-lg" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductDetailsPopup;
