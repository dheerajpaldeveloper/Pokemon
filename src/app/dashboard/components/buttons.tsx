'use client';  // Mark this as a client-side component

import React, { useRef, useState } from 'react';
import { FaPlay, FaPause, FaStop, FaForward, FaBackward } from 'react-icons/fa';  // Import different icons
import "./buttons.css";
import * as GiIcons from "react-icons/gi";

export default function ButtonList() {
  // Updated buttons array with name and icon
  const buttons = [
    { name: "Trending", icon: <GiIcons.GiFireBowl /> },
    { name: "Action", icon: <GiIcons.GiCrossedSwords /> },
    { name: "Romance", icon: <GiIcons.GiLovers /> },
    { name: "Animation", icon: <GiIcons.GiPlasticDuck /> },
    { name: "Horror", icon: <GiIcons.GiPorcupinefish /> },
    { name: "Special", icon: <GiIcons.GiSaberToothedCatHead /> },
    { name: "Drakor", icon: <FaBackward /> },
    { name: "Anime", icon: <FaPlay /> },
    { name: "Fight", icon: <FaPlay /> },
    { name: "Champion", icon: <FaForward /> },
    { name: "Replay", icon: <FaPlay /> },
    { name: "Pause", icon: <FaPause /> },
    { name: "Stop", icon: <FaStop /> },
    { name: "Next Track", icon: <FaForward /> },
    { name: "Previous Track", icon: <FaBackward /> },
    { name: "Shuffle", icon: <FaPlay /> },
    { name: "Loop", icon: <FaPlay /> },
    { name: "Volume", icon: <FaPlay /> },
    { name: "Mute", icon: <FaPause /> }
  ];

  const containerRef = useRef<HTMLDivElement>(null);  // Reference to the container
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handle mouse down event
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.clientX);  // Store the starting X position
    setScrollLeft(containerRef.current?.scrollLeft || 0);  // Store current scroll position
  };

  // Handle mouse move event
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;  // If not dragging, do nothing
    const x = e.clientX;
    const scrollAmount = (x - startX) * 2;  // Multiply by a factor to control speed
    containerRef.current!.scrollLeft = scrollLeft - scrollAmount;
  };

  // Handle mouse up and mouse leave events (to stop dragging)
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative px-3">
      {/* Container for buttons with drag functionality */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto no-scrollbar cursor-ew-resize"
        onMouseDown={handleMouseDown}   // Trigger on mouse down
        onMouseMove={handleMouseMove}   // Trigger on mouse move
        onMouseUp={handleMouseUp}       // Trigger on mouse up
        onMouseLeave={handleMouseLeave} // Trigger when mouse leaves container
      >
        {buttons.map((button, index) => (
          <button
            key={index}
            className="flex items-center justify-between bg-white bg-opacity-10 text-white bg-gradient-to-r from-transparent to-gray-400 w-32 h-12 px-6 mx-1 m-1 rounded-2xl hover:bg-blue-200 transition duration-300 shadow-sm"
          >
            {React.cloneElement(button.icon, { className: "text-2xl" })}  {/* Increase icon size */}

            <span className="ml-3 text-xs">{button.name}</span>  {/* Add margin-left for spacing between icon and text */}
          </button>
        ))}
      </div>
    </div>
  );
}
