import Image from "next/image";
import React from "react";

const StatsCards = () => {
  return (
    <div className="relative z-10 w-full flex justify-center -mt-50">
      <div className="flex justify-center gap-6 max-w-7xl px-4">
        <div className="relative w-[220px] h-[253px] -mt-10 rounded-[16px] overflow-hidden text-white shadow-lg flex items-center justify-center">
          <Image src="/pipes.png" alt="Industry" fill className="absolute inset-0 object-cover z-0" />
          <div className="relative z-10 text-center">
            <div className="text-7xl font-bold">20+</div>
            <div className="text-xl">Industries served</div>
          </div>
        </div>

        <div className="w-[220px] h-[253px] -mt-5 rounded-[16px] bg-[#1F4F90] text-white shadow-lg text-center flex flex-col justify-center items-center">
          <div className="text-8xl font-bold">1K</div>
          <div className="text-xl">Happy Clients</div>
        </div>

        <div className="w-[260px] h-[210px] mt-5 rounded-[16px] bg-white shadow-lg text-center flex flex-col justify-center items-center">
          <div className="text-7xl font-bold text-black">200K</div>
          <div className="text-xl text-black mt-1">People Deployed</div>
        </div>

        <div className="relative w-[220px] h-[253px] -mt-5 rounded-[16px] overflow-hidden text-white flex flex-col justify-end p-4 shadow-lg">
          <Image src="/map.jpeg" alt="Branches" fill className="absolute inset-0 object-cover z-0" />
          <div className="z-10">
            <div className="text-7xl font-bold">12</div>
            <div className="text-lg">+ Branches</div>
          </div>
        </div>

        <div className="w-[220px] h-[253px] -mt-10 bg-[#1F4F90] rounded-[16px] shadow-lg flex flex-col justify-center items-center">
          <button className="bg-[#041936] text-white text-sm px-5 py-2 rounded-full hover:scale-105 transition font-semibold">
            Learn more →
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
