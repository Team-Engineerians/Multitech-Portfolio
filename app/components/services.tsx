import React from "react";
import { GlobeDemo } from "./globeDemo";

export default function WhatWeDo() {
  return (
    <div className="font-sans text-gray-800">
      {/* What We Do Section */}
      <section
        className="w-screen 
                   min-h-screen 
                   py-8 sm:py-12 md:py-16 
                   px-4 sm:px-6 md:px-8"
        style={{
          background: "linear-gradient(190deg, #FFDCAD, #F7EADC, #CAD5E8)",
        }}
      >
        <div className="max-w-[1200px] w-full mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl 
                          font-extrabold 
                          text-white 
                          tracking-wide 
                          mb-2 sm:mb-3">
              WHAT WE DO
            </h2>
            <p className="text-white 
                         text-base sm:text-lg 
                         font-medium">
              Comprehensive Manpower & Support Services
            </p>
          </div>

          {/* Row 1 - Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                         gap-4 sm:gap-5 md:gap-6 
                         mb-4 sm:mb-5 md:mb-6">
            {["pic1.png", "pic2.png", "pic3.png", "pic4.png"].map((src, i) => (
              <div
                key={i}
                className="relative 
                          rounded-[20px] sm:rounded-[25px] md:rounded-[30px] 
                          overflow-hidden 
                          shadow-lg 
                          aspect-[4/4.2] sm:aspect-[4/4.5] md:aspect-[4/4.2]
                          hover:scale-[1.02] 
                          transition-transform duration-300
                          mx-auto
                          w-full max-w-[300px]"
              >
                <img
                  src={src}
                  alt={`Service ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Row 2 - Larger Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 
                         gap-4 sm:gap-5 md:gap-6">
            {["pic5.png", "pic6.png"].map((src, i) => (
              <div
                key={i}
                className="relative 
                          rounded-[20px] sm:rounded-[25px] md:rounded-[30px] 
                          overflow-hidden 
                          shadow-lg 
                          aspect-[16/9]
                          hover:scale-[1.02] 
                          transition-transform duration-300
                          mx-auto
                          w-full"
              >
                <img
                  src={src}
                  alt={`Service ${i + 5}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision + Globe + Mission Section */}
      <section className="w-screen bg-white 
                         min-h-screen 
                         py-12 lg:py-0 
                         relative">
        <div className="max-w-7xl mx-auto h-full">
          {/* Desktop Layout */}
          <div className="hidden lg:flex flex-col h-screen relative">
            {/* Vision - Top Left */}
            <div className="absolute top-24 left-8 
                           max-w-[400px] 
                           text-left 
                           z-10">
              <h2 className="text-3xl font-bold text-black mb-4">
                Vision
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To deliver unmatched quality through expert training and testing,
                building futures rooted in skill and excellence.
              </p>
            </div>

            {/* Centered Globe */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-[576px] h-[508px]">
                <GlobeDemo />
              </div>
            </div>

            {/* Mission - Bottom Right */}
            <div className="absolute bottom-24 right-8 
                           max-w-[400px] 
                           text-right 
                           z-10">
              <h2 className="text-3xl font-bold text-black mb-4">
                Mission
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To create lasting impact through effective placements, value-added
                services, and a focus on empowering people and industries alike.
              </p>
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden flex flex-col items-center px-4">
            {/* Vision */}
            <div className="w-full max-w-[500px] text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                Vision
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                To deliver unmatched quality through expert training and testing,
                building futures rooted in skill and excellence.
              </p>
            </div>

            {/* Centered Globe */}
            <div className="w-full flex justify-center my-8">
              <div className="w-[300px] h-[300px] 
                             sm:w-[400px] sm:h-[400px] 
                             md:w-[450px] md:h-[450px]">
                <GlobeDemo />
              </div>
            </div>

            {/* Mission */}
            <div className="w-full max-w-[500px] text-center mt-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                Mission
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                To create lasting impact through effective placements, value-added
                services, and a focus on empowering people and industries alike.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
