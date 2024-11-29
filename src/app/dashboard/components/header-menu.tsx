import React from 'react'
import { CiSearch } from "react-icons/ci";


export default function headerMenu() {
  return (
    <div className='flex justify-between bg-black rounded-3xl px-4 py-2 items-center'>
        <div className='text-white'>Movie</div>
        <div className='text-gray-400'>Series</div>
        <div className='text-gray-400'>Originals</div>
        <div className='text-white'><CiSearch/></div>
    </div>
  )
}
