import React from 'react'
import { FaPlay } from 'react-icons/fa';  // Import play icon

export default function Banner() {
  return (
    <div className='flex flex-col sm:flex-row'>
      {/* Banner 1 - Card Design */}
      <div className='w-full sm:w-2/5 py-4 pr-2 pl-4'>
        <div className='bg-white rounded-lg shadow-md overflow-hidden'>
          {/* Image with Overlay Text */}
          <div className='relative'>
            <img src="/your-image-1.jpg" alt="Banner 1" className='w-full h-28 sm:h-64 object-cover' />
            
            {/* Overlay Text */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center'>
              <span className='text-white text-xl sm:text-2xl font-semibold'>Your Text Here (Banner 1)</span>
            </div>

            {/* Play Button & Text */}
            <div className='absolute bottom-4 left-4 flex items-center space-x-2 z-10'>
              <FaPlay className='text-white text-3xl' /> {/* Play icon */}
              <span className='text-white text-lg font-medium'>Let's play movie</span>
            </div>
          </div>
        </div>
      </div>

      {/* Banner 2 - Card Design */}
      <div className='w-full sm:w-3/5 py-4 pr-4 pl-2'>
        <div className='bg-white rounded-lg shadow-md overflow-hidden'>
          {/* Image with Overlay Text */}
          <div className='relative'>
            <img src="/your-image-2.jpg" alt="Banner 2" className='w-full h-28 sm:h-64 object-cover' />
            
            {/* Overlay Text */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center'>
              <span className='text-white text-xl sm:text-2xl font-semibold'>Your Text Here (Banner 2)</span>
            </div>

            {/* Play Button & Text */}
            <div className='absolute bottom-4 left-4 flex items-center space-x-2 z-10'>
              <FaPlay className='text-white text-3xl' /> {/* Play icon */}
              <span className='text-white text-lg font-medium'>Let's play movie</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
