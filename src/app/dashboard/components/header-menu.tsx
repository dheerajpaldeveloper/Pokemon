import React from 'react'
import { CiSearch } from "react-icons/ci";

export default function HeaderMenu() {
  return (
    <div className='flex justify-between bg-black rounded-3xl px-3 py-1.5 items-center'>
        {/* Menu Items */}
        <div className='text-white text-xs  px-2'>Movie</div>
        <div className='text-gray-400 text-xs  px-2'>Series</div>
        <div className='text-gray-400 text-xs  px-2'>Originals</div>

        {/* Search Icon */}
        <div className='text-white text-xs '>
          <CiSearch />
        </div>
    </div>
  )
}
