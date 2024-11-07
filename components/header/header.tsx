import React from "react";
import { FaHeart, FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
export default function Header() {
  return (
    <header className="flex items-center justify-between bg-[#A29875] px-6 py-4 ">
      <div>
        <p className="text-3x1 font-bold text-white px-4">MANZZARI</p>
      </div>
      <div className="flex w-3/6 bg-white rounded-lg border-white border-2 h-10">
        <div className="flex pr-2 w-full">
          <input
            type="text"
            name="search"
            placeholder="Search for Gold Jewellery,Diamond Jewelry and more"
            className="w-full text-xs px-2 text-gray-700 focus:outline-none" 
          />
          <div className="flex items-center ">
          <FaSearch className="cursor-pointer text-gray-500 hover:text-gray-300 w-4" />
        </div>
        </div>
        
      </div>

      <div className="flex space-x-4 text-white">
        <FaHeart className="cursor-pointer hover:text-gray-300 w-6" />
        <FaUser className="cursor-pointer hover:text-gray-300 w-6" />
        <FaShoppingCart className="cursor-pointer hover:text-gray-300 w-6" />
      </div> 
    </header>
  );
}
