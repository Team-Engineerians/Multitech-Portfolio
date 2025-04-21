import Image from "next/image";
import React from "react";
import { FlipWords } from "./components/ui/flip-words";

const words = ["Workforce,", "Videsh Jaye", "اذهب إلى الخارج"];
const wordsdown = ["Without Borders.", "Paise Kamaye", "واكسب المال"];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-start relative overflow-hidden px-4 py-10">
      {/* Navigation */}
      <div className="relative w-full max-w-6xl mx-auto mb-8 h-12">
        <div className="absolute right-0 top-0">
          <button className="bg-gray-100 px-4 py-2 rounded-full shadow text-sm">
            Contact
          </button>
        </div>
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2">
          <div className="flex gap-12 text-sm font-medium">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Career</a>
            <a href="#">Gallery</a>
          </div>
        </div>
      </div>

      {/* Hero Text */}
      <div className="text-center z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#115FB6] mt-4 mb-4">
          <FlipWords words={words} />
          <br />
          <FlipWords words={wordsdown} />
        </h1>
        <p className="font-sf text-gray-600 text-lg">
          Unlock Global Opportunities with Expert Manpower Solutions
        </p>
      </div>

      {/* Globe Background */}
      <div className="top-100 w-full h-[580px] mt-8 flex justify-center z-0 pointer-events-none">
        <Image
          src="/global.png"
          alt="Globe"
          width={1000}
          height={500}
          className="object-fill opacity-90"
        />
      </div>

      {/* Floating Icons */}
      <div className="absolute left-10 top-56 z-10 space-y-4">
        <Image src="/visa.png" alt="Visa" width={240} height={260} />
        {/* <Image src="/coin.png" alt="Dollar" width={240} height={240} /> */}
      </div>
      <div className="absolute right-10 top-56 z-10 space-y-4 flex flex-col items-end">
        <Image src="/plane.png" alt="Plane" width={40} height={40} />
        <div className="w-16 h-3 bg-orange-500 rounded-full"></div>
      </div>

      {/* Stats Cards overlapping Globe */}
      <div className="relative z-10 w-full flex justify-center -mt-50">
        <div className="flex justify-center gap-6 max-w-7xl px-4">
          {/* Card 1 - Highest */}
          <div className="relative w-[220px] h-[253px] -mt-10 rounded-[16px] overflow-hidden text-white flex flex-col justify-end p-4 shadow-lg">
            <Image
              src="/pipes.png"
              alt="Industry"
              fill
              className="absolute inset-0 object-cover z-0"
            />
            <div className="z-10">
              <div className="text-3xl font-bold">20+</div>
              <div className="text-sm">Industries served</div>
            </div>
          </div>

          {/* Card 2 - Mid height */}
          <div className="w-[220px] h-[253px] -mt-5 rounded-[16px] bg-[#1F4F90] text-white shadow-lg text-center flex flex-col justify-center items-center">
            <div className="text-3xl font-bold">1K</div>
            <div className="text-sm">Happy Clients</div>
          </div>

          {/* Card 3 - Lowest */}
          <div className="w-[260px] h-[210px] mt-5 rounded-[16px] bg-white shadow-lg text-center flex flex-col justify-center items-center">
            <div className="text-4xl font-bold text-black">200K</div>
            <div className="text-sm text-gray-600 mt-1">People Deployed</div>
          </div>

          {/* Card 4 - Mid height */}
          <div className="relative w-[220px] h-[253px] -mt-5 rounded-[16px] overflow-hidden text-white flex flex-col justify-end p-4 shadow-lg">
            <Image
              src="/map.jpeg"
              alt="Branches"
              fill
              className="absolute inset-0 object-cover z-0"
            />
            <div className="z-10">
              <div className="text-3xl font-bold">12</div>
              <div className="text-sm">+ Branches</div>
            </div>
          </div>

          {/* Card 5 - Highest */}
          <div className="w-[220px] h-[253px] -mt-10 bg-[#1F4F90] rounded-[16px] shadow-lg flex flex-col justify-center items-center">
            <button className="bg-white text-[#1F4F90] text-sm px-5 py-2 rounded-full hover:scale-105 transition font-semibold">
              Learn more →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
