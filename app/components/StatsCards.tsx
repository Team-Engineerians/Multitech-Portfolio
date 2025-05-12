import Image from "next/image";
import React from "react";

const StatsCards = () => {
  return (
    <div className="relative z-10 w-full flex justify-center -mt-10 sm:-mt-15 md:-mt-20 lg:-mt-50">
      <div className="flex flex-col md:flex-row justify-center gap-6 max-w-7xl px-4 w-full">
        {/* Industry Card */}
        <div className="relative w-full sm:w-[80%] md:w-[220px] h-[180px] sm:h-[200px] md:h-[253px] mx-auto md:mx-0 -mt-0 md:-mt-10 rounded-[16px] overflow-hidden text-white shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
          <Image 
            src="/pipes.png" 
            alt="Industry" 
            fill 
            className="absolute inset-0 object-cover z-0" 
            priority
          />
          <div className="relative z-10 text-center p-4">
            <div className="text-4xl sm:text-5xl md:text-7xl font-bold">20+</div>
            <div className="text-base sm:text-lg md:text-xl">Industries served</div>
          </div>
        </div>

        {/* Happy Clients Card */}
        <div className="w-full sm:w-[80%] md:w-[220px] h-[180px] sm:h-[200px] md:h-[253px] mx-auto md:mx-0 -mt-0 md:-mt-5 rounded-[16px] bg-[#1F4F90] text-white shadow-lg text-center flex flex-col justify-center items-center transform hover:scale-105 transition-transform duration-300">
          <div className="text-4xl sm:text-6xl md:text-8xl font-bold">1K</div>
          <div className="text-base sm:text-lg md:text-xl">Happy Clients</div>
        </div>

        {/* People Deployed Card */}
        <div className="w-full sm:w-[80%] md:w-[260px] h-[160px] sm:h-[180px] md:h-[210px] mx-auto md:mx-0 mt-0 md:mt-5 rounded-[16px] bg-white shadow-lg text-center flex flex-col justify-center items-center transform hover:scale-105 transition-transform duration-300">
          <div className="text-4xl sm:text-5xl md:text-7xl font-bold text-black">200K</div>
          <div className="text-base sm:text-lg md:text-xl text-black mt-1">People Deployed</div>
        </div>

        {/* Branches Card */}
        <div className="relative w-full sm:w-[80%] md:w-[220px] h-[180px] sm:h-[200px] md:h-[253px] mx-auto md:mx-0 -mt-0 md:-mt-5 rounded-[16px] overflow-hidden text-white flex flex-col justify-end p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <Image 
            src="/map.jpeg" 
            alt="Branches" 
            fill 
            className="absolute inset-0 object-cover z-0" 
            priority
          />
          <div className="z-10">
            <div className="text-4xl sm:text-5xl md:text-7xl font-bold">12</div>
            <div className="text-sm sm:text-base md:text-lg">+ Branches</div>
          </div>
        </div>

        {/* Learn More Card */}
        <div className="w-full sm:w-[80%] md:w-[220px] h-[180px] sm:h-[200px] md:h-[253px] mx-auto md:mx-0 -mt-0 md:-mt-10 bg-[#1F4F90] rounded-[16px] shadow-lg flex flex-col justify-center items-center transform hover:scale-105 transition-transform duration-300">
          <button className="bg-[#041936] text-white text-sm px-5 py-2 rounded-full hover:scale-105 transition font-semibold">
            Learn more →
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
