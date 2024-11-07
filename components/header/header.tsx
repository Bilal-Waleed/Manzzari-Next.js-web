
import React from "react"
import { FaHeart,FaUser, FaShoppingCart, FaSearch}from 'react-icons/fa';
export default function Header() {
    return(
        <header className="flex items-centre justify-between bg-[#c5b299] px-6 py-4 ">
        <h1 className="text-3x1 font-bold text-white">MANZZARI</h1>
        <div className='flex-1 mx-5'>
            <input
            type='text'
            name = "search"
            placeholder="search for gold jewellery,diamond jewelry and more"
            className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus"/>
            <FaSearch className = "cursor-pointer hover:text-gray-300"/>
        </div>
       
      <div className="flex space-x-4 text-white">
        <FaHeart className="cursor-pointer hover:text-gray-300"/>
        <FaUser className="cursor-pointer hover:text-gray-300"/>
        <FaShoppingCart className="cursor-pointer hover:text-gray-300"/>
      </div>
        </header>
    )
}
