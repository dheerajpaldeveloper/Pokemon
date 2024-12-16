"use client";
import React, { useState, useEffect } from "react";
import { VscStarFull } from "react-icons/vsc";
import { FaGripfire } from "react-icons/fa6";
import { MdFilterList } from "react-icons/md";
import { GrFilter } from "react-icons/gr";
import { FaHeart } from "react-icons/fa6";
import { GiCrossedSabres } from "react-icons/gi";
import { GiAnimalSkull } from "react-icons/gi";
import { GiStarKey } from "react-icons/gi";
import { BsMoonStarsFill } from "react-icons/bs";
import { LiaEarlybirds } from "react-icons/lia";


export default function page() {
  const [results, setResults] = useState([]);

  const API = "https://www.freetestapi.com/api/v1/movies";

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setResults(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col items-center mx-4">
      <div className="flex flex-row justify-between py-4 gap-4 w-full sm:flex-col drop-shadow-2xl">
        <img
          src="/banner1.jpg"
          alt="Banner 1"
          className="h-60 w-2/5  sm:w-full rounded-3xl"
        />
        <img
          src="/banner2.jpg"
          alt="Banner 2"
          className="h-60 w-full rounded-3xl " 
        />
      </div>
      
      <div className="flex w-full overflow-auto scrollbar-hide my-4 text-white  drop-shadow-lg">
        <ul className="flex gap-2  pl-2 ">
          <button className="flex bg-gray-400 px-9 py-4 gap-2 rounded-2xl transform transition-transform duration-200 hover:scale-95">
            <span>
              <FaGripfire size={25} />
            </span>
            Trending
          </button>
          <button className="flex bg-gray-400 px-9 py-4 gap-2 rounded-2xl transform transition-transform duration-200 hover:scale-95">
            <GiCrossedSabres size={25} />
            Action
          </button>
          <button className="flex bg-gray-400 px-9 py-4 gap-2 rounded-2xl transform transition-transform duration-200 hover:scale-95">
            <FaHeart size={25} />
            Romance
          </button>
          <button className="flex bg-gray-400 px-9 py-4 gap-2 rounded-2xl transform transition-transform duration-200 hover:scale-95">
            <GiAnimalSkull size={25} />
            Animation
          </button>
          <button className="flex bg-gray-400 px-9 py-4 gap-2 rounded-2xl transform transition-transform duration-200 hover:scale-95">
            <LiaEarlybirds size={25} />
            Horror
          </button>
          <button className="flex bg-gray-400 px-9 py-4 gap-2 rounded-2xl transform transition-transform duration-200 hover:scale-95">
            <GiStarKey size={25} />
            Special
          </button>
          <button className="flex bg-gray-400 px-9 py-4 gap-2 rounded-2xl transform transition-transform duration-200 hover:scale-95">
            <BsMoonStarsFill size={25} />
            Draker
          </button>
          <button className="flex bg-gray-400 px-9 py-4 gap-2 rounded-2xl transform transition-transform duration-200 hover:scale-95">
            <LiaEarlybirds size={25} />
            Comedy
          </button>
          <button className="flex bg-gray-400 px-9 py-4 gap-2 rounded-2xl transform transition-transform duration-200 hover:scale-95">
            <GiAnimalSkull size={25} />
            Thriller
          </button>
          <button className="flex bg-gray-400 px-9 py-4 gap-2 rounded-2xl transform transition-transform duration-200 hover:scale-95">
            <FaHeart size={25} />
            Comedy
          </button>
        </ul>
      </div>

      <div className="flex w-full my-6 justify-between">
        <h2 className="text-2xl text-gray-50 pl-3">Trending in Animation</h2>
        <div className="flex bg-black w-24 justify-center h-8 items-center gap-3 rounded-xl">
          <span>
            <MdFilterList />
          </span>{" "}
          |
          <span>
            <GrFilter />
          </span>
        </div>
      </div>

    </div>
  );
}