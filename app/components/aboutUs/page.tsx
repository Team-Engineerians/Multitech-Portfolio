"use client";

import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="w-full min-h-[400px] sm:min-h-[500px] md:min-h-[618px] 
                    text-black 
                    flex items-center justify-center 
                    mt-6 sm:mt-8 md:mt-12 
                    px-4 sm:px-5 md:px-6 
                    py-8 sm:py-12 md:py-16">
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-30 
                      md:flex-row 
                      items-center justify-center 
                      max-w-[330px] sm:max-w-[600px] md:max-w-7xl 
                      text-center">
        {/* Left: Logo and Text */}
        <div className="w-[180px] sm:w-[220px] md:w-[280px] text-center">
          <Image
            src="/multitech.svg"
            alt="Multi-Tech Logo"
            width={260}
            height={260}
            className="w-full h-auto 
                       mx-auto 
                       mb-4 sm:mb-5 md:mb-6"
            priority
          />
        </div>

        {/* Right: Text Content */}
        <div className="max-w-[300px] sm:max-w-[500px] md:max-w-2xl 
                        text-center md:text-left">
          {/* Highlight Box */}
          <div className="py-2 
                         mb-4 sm:mb-5 md:mb-6 
                         mx-auto">
            <p className="text-2xl sm:text-2xl md:text-3xl 
                         font-semibold 
                         leading-snug
                         tracking-tight">
              We are
              <br className="hidden sm:block" />
              Empowering Global Workforce
              <br className="hidden sm:block" />
              Solutions Since 2009
            </p>
          </div>

          {/* Body Text */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 
                         text-sm sm:text-base md:text-md 
                         font-medium sm:font-semibold 
                         leading-relaxed">
            <p className="text-gray-700">
              A trusted name in overseas manpower recruitment since 2009,
              approved by the Ministry of External Affairs, Govt. of India (Lic.
              No. B-1458/JP/PER/100+/5/9908/2021).
            </p>
            <div className="space-y-3 sm:space-y-4 md:space-y-5 text-gray-700">
              <p>
                Headquartered in New Delhi with a branch in Gorakhpur, our global
                reach spans India, Nepal, and Bangladesh, supported by a strong
                network of associate offices in major cities.
              </p>
              <p>
                We specialize in sourcing top-tier talent — skilled, semi-skilled,
                and unskilled — across blue and white-collar categories to meet
                the diverse workforce needs of industries worldwide.
              </p>
              <p>
                More than recruiters, we are architects of human capital,
                committed to building enduring partnerships and delivering
                workforce solutions that empower global success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
