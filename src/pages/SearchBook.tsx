import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "@/app/store";
import { setQuery } from "@/features/SearchSlice";

const SearchBook = ({ isOpen }: { isOpen: () => void }) => {
  const dispatch = useDispatch();
  const { query, results } = useSelector((state: RootState) => state.search);

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20 p-4 flex justify-center">
      <div className="w-full max-w-xl bg-white rounded-xl mt-16 shadow-lg max-h-[85vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="relative px-5 mt-10 border-b border-gray-200">
          <IoSearch className="absolute left-7 top-1/2 -translate-y-1/2 text-gray-500" />

          <input
            value={query}
            onChange={(e) => dispatch(setQuery(e.target.value))}
            className="border w-full pl-10 pr-10 py-2 bg-gray-50 rounded-md outline-none"
            type="text"
            placeholder="Search book..."
          />

          <IoMdClose
            onClick={isOpen}
            className="absolute right-7 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 text-xl hover:text-red-500"
          />
        </div>

        {/* No Data */}
        {results.length === 0 && (
          <div className="h-[120px] flex items-center justify-center text-gray-500 text-sm">
            No result found
          </div>
        )}

        {/* Results */}
        <div className="overflow-y-auto px-5 pb-4">
          {results.map((book, index) => (
            <div
              key={index}
              className="flex px-4 py-3 bg-gray-50 hover:bg-gray-100 transition rounded-lg mb-3 cursor-pointer"
            >
              <div className="w-[50px]">
                <img
                  className="w-[50px] h-[60px] object-cover rounded-md"
                  src={book.image}
                  alt={book.name}
                />
              </div>

              <div className="ml-4">
                <h4 className="text-sm font-semibold">{book.name}</h4>
                <span className="text-xs text-gray-500 block">{book.author}</span>
                <strong className="text-sm text-theme">BDT: {book.price} TK</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBook;
