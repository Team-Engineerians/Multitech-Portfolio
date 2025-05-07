"use client";

import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="w-screen min-h-screen bg-[#171B23] text-white flex items-center justify-center mt-12 px-6 py-16">
      <div className="flex flex-col gap-30 md:flex-row items-center justify-center max-w-7xl text-center">
        {/* Left: Logo and Text */}
        <div className="md:w-[280px] text-center">
          <Image
            src="/multitech.svg"
            alt="Multi-Tech Logo"
            width={260}
            height={260}
            className="mx-auto mb-6 invert"
          />
        </div>

        {/* Right: Text Content - Centered */}
        <div className="max-w-xl text-center">
          {/* Highlight Box */}
          <div className="bg-[#2e2f31] rounded-md px-6 py-4 mb-6 max-w-md mx-auto">
            <p className="text-orange-400 text-lg font-semibold leading-snug">
              We are
              <br />
              Empowering Global Workforce
              <br />
              Solutions Since 2009
            </p>
          </div>

          {/* Body Text */}
          <div className="space-y-8 text-sm text-gray-200 leading-relaxed">
            <p>
              A trusted name in overseas manpower recruitment since 2009,
              approved by the Ministry of External Affairs, Govt. of India (Lic.
              No. B-1458/JP/PER/100+/5/9908/2021).
            </p>
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
  );
}
