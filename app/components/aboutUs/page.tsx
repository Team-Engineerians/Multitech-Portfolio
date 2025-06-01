"use client";

import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full min-h-screen lg:min-h-[554px] bg-[#EFF0F1] flex flex-col items-center py-16">
      <div className="w-full max-w-4xl px-4 lg:pl-16">
        {/* Heading and Bullets */}
        <div className="mb-10">
          <h2 className="text-3xl font-normal text-black mb-4 text-left">Our Value Proposition</h2>
          <ul className="text-lg text-black list-disc pl-5 space-y-2">
            <li>Govt. Licensed Since 2009</li>
            <li>Tailored Workforce for Every Industry</li>
          </ul>
        </div>
        {/* Value Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[8px] max-w-fit bg-transparent">
          {/* Card 1 */}
          <div className="bg-[#D3D5D866] hover:bg-[#97B7E833] transition-colors p-8 h-[100px] w-[416px] flex flex-col justify-center border-l-[3px] border-l-black">
            <span className="text-[22px] font-bold text-black mb-1">1,000+</span>
            <span className="text-[18px] font-normal text-black">Happy Clients</span>
          </div>
          {/* Card 2 */}
          <div className="bg-[#D3D5D866] hover:bg-[#97B7E833] transition-colors p-8 h-[100px] w-[416px] flex flex-col justify-center border-l-[3px] border-l-black">
            <span className="text-[22px] font-bold text-black mb-1">2,00,000+</span>
            <span className="text-[18px] font-normal text-black">People Deployed</span>
          </div>
          {/* Card 3 */}
          <div className="bg-[#D3D5D866] hover:bg-[#97B7E833] transition-colors p-8 h-[100px] w-[416px] flex flex-col justify-center border-l-[3px] border-l-black">
            <span className="text-[22px] font-bold text-black mb-1">20+</span>
            <span className="text-[18px] font-normal text-black">Industries Served</span>
          </div>
          {/* Card 4 */}
          <div className="bg-[#D3D5D866] hover:bg-[#97B7E833] transition-colors p-8 h-[100px] w-[416px] flex flex-col justify-center border-l-[3px] border-l-black">
            <span className="text-[22px] font-bold text-black mb-1">12 +</span>
            <span className="text-[18px] font-normal text-black">Branches</span>
          </div>
        </div>
      </div>
    </section>
  );
}
