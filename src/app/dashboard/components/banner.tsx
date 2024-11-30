import React from 'react';
import { FaPlay } from 'react-icons/fa'; // Import play icon

export default function Banner() {
  return (
    <div className="flex flex-col sm:flex-row">
      {/* Banner 1 - Card Design */}
      <div className="w-full sm:w-2/5 py-4 pr-2 pl-2 sm:pl-4">
        <div className="bg-white rounded-lg shadow-xl shadow-slate-700 overflow-hidden">
          {/* Image with Overlay Text */}
          <div className="relative">
            <img
              src="/image2.jpg"
              alt="Banner 1"
              className="w-full h-48 sm:h-44 object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex flex-col justify-center items-end p-4">
              {/* Text aligned to the left and stacked vertically */}
              <span className="text-white text-xl sm:text-xl ">The Adventure</span>
              <span className="text-white text-lg sm:text-xl">of blue </span>
              <span className="text-white text-lg sm:text-xl">Sword </span>
            </div>

            {/* Play Button & Text */}
            <div className="absolute bottom-4 left-4 flex items-center space-x-2 z-10">
              <FaPlay className="text-white text-sm" /> {/* Play icon */}
              <span className="text-white text-sm font-medium">Let's play movie</span>
            </div>
          </div>
        </div>
      </div>

      {/* Banner 2 - Card Design */}
      <div className="w-full sm:w-3/5 py-4 pr-2 pl-2 sm:pr-4">
        <div className="bg-white rounded-lg shadow-xl shadow-slate-800 overflow-hidden">
          {/* Image with Overlay Text */}
          <div className="relative">
            <img
              src="/image.jpg"
              alt="Banner 2"
              className="w-full h-48 sm:h-44 object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 flex flex-col justify-center items-start p-3 pb-20">
              {/* Text aligned to the left and stacked vertically */}
              <span className="text-white text-xl sm:text-xl ">Recalling the </span>
              <span className="text-white text-lg sm:text-xl">Joourney of Dol's </span>
              <span className="text-white text-lg sm:text-xl">exciting story </span>
            </div>

            {/* Play Button & Text */}
            <div className="absolute bottom-4 left-4 flex items-center space-x-2 z-10">
              <FaPlay className="text-white text-sm" /> {/* Play icon */}
              <span className="text-white text-sm font-medium">Let's play movie</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
