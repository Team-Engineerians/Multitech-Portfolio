"use client";

import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="w-screen h-[618px] text-black flex items-center justify-center mt-12 px-6 py-16">
      <div className="flex flex-col gap-30 md:flex-row items-center justify-center max-w-7xl text-center">
        {/* Left: Logo and Text */}
        <div className="md:w-[280px] text-center">
          <Image
            src="/multitech.svg"
            alt="Multi-Tech Logo"
            width={260}
            height={260}
            className="mx-auto mb-6"
          />
        </div>

        {/* Right: Text Content - Centered */}
        <div className="max-w-2xl text-left">
          {/* Highlight Box */}
          <div className="py-2 mb-6 max-w-2xl mx-auto">
            <p className="text-3xl font-semibold leading-snug">
              We are
              <br />
              Empowering Global Workforce
              <br />
              Solutions Since 2009
            </p>
          </div>

          {/* Body Text */}
          <div className="space-y-8 text-md font-semibold leading-relaxed">
            <p>
              A trusted name in overseas manpower recruitment since 2009,
              approved by the Ministry of External Affairs, Govt. of India (Lic.
              No. B-1458/JP/PER/100+/5/9908/2021).
            </p>
            <p>
              Headquartered in New Delhi with a branch in Gorakhpur, our global
              reach spans India, Nepal, and Bangladesh, supported by a strong
              network of associate offices in major cities.
            <br/>
              We specialize in sourcing top-tier talent — skilled, semi-skilled,
              and unskilled — across blue and white-collar categories to meet
              the diverse workforce needs of industries worldwide.
            <br/>
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
