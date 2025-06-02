"use client";

import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-screen lg:min-h-[554px] bg-[#EFF0F1] flex flex-col items-center py-4 pb-10 px-4 sm:px-0 md:px-0 -mx-4">
      <div className="w-full max-w-4xl px-2 sm:px-4 md:px-8 lg:pl-16">
        {/* Heading and Bullets */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-normal text-black mb-4 text-left">Our Value Proposition</h2>
          <ul className="text-base sm:text-lg text-black list-disc pl-5 space-y-2">
            <li>Govt. Licensed Since 2009</li>
            <li>Tailored Workforce for Every Industry</li>
          </ul>
        </div>
        {/* Value Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-full bg-transparent">
          {/* Card 1 */}
          <div className="bg-[#D3D5D866] hover:bg-[#97B7E833] transition-colors p-4 sm:p-6 md:p-8 h-[90px] sm:h-[100px] w-full sm:w-[320px] md:w-[416px] flex flex-col justify-center border-l-[3px] border-l-black">
            <span className="text-lg sm:text-[22px] font-bold text-black mb-1">1,000+</span>
            <span className="text-base sm:text-[18px] font-normal text-black">Happy Clients</span>
          </div>
          {/* Card 2 */}
          <div className="bg-[#D3D5D866] hover:bg-[#97B7E833] transition-colors p-4 sm:p-6 md:p-8 h-[90px] sm:h-[100px] w-full sm:w-[320px] md:w-[416px] flex flex-col justify-center border-l-[3px] border-l-black">
            <span className="text-lg sm:text-[22px] font-bold text-black mb-1">2,00,000+</span>
            <span className="text-base sm:text-[18px] font-normal text-black">People Deployed</span>
          </div>
          {/* Card 3 */}
          <div className="bg-[#D3D5D866] hover:bg-[#97B7E833] transition-colors p-4 sm:p-6 md:p-8 h-[90px] sm:h-[100px] w-full sm:w-[320px] md:w-[416px] flex flex-col justify-center border-l-[3px] border-l-black">
            <span className="text-lg sm:text-[22px] font-bold text-black mb-1">20+</span>
            <span className="text-base sm:text-[18px] font-normal text-black">Industries Served</span>
          </div>
          {/* Card 4 */}
          <div className="bg-[#D3D5D866] hover:bg-[#97B7E833] transition-colors p-4 sm:p-6 md:p-8 h-[90px] sm:h-[100px] w-full sm:w-[320px] md:w-[416px] flex flex-col justify-center border-l-[3px] border-l-black">
            <span className="text-lg sm:text-[22px] font-bold text-black mb-1">12 +</span>
            <span className="text-base sm:text-[18px] font-normal text-black">Branches</span>
          </div>
        </div>
      </div>
    </section>
  );
}
