"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function AboutUs() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mt-[40px] w-screen min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-16">
      {/* Logo + Brand Text */}
      <div className="flex-shrink-0 mr-16 text-center text-white">
        <Image
          src="/multitech.svg"
          alt="Multi-Tech Logo"
          width={200}
          height={200}
        />
      </div>

      {/* Content */}
      <div className="max-w-xl space-y-8">
        {/* Info Box */}
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6">
          <p className="text-orange-400 text-sm text-center uppercase">
            We are
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-orange-400 text-center leading-tight">
            Empowering Global Workforce
            <br />
            Solutions Since 2009
          </h2>
        </div>

        {/* Body Text */}
        <div className="space-y-4 relative">
          <p className="text-sm leading-relaxed">
            A trusted name in overseas manpower recruitment since 2009, approved
            by the Ministry of External Affairs, Govt. of India (Lic. No.
            B-1458/JP/PER/100+/5/9908/2021).
          </p>
          <p className="text-sm leading-relaxed">
            Headquartered in New Delhi with a branch in Gorakhpur, our global
            reach spans India, Nepal, and Bangladesh, supported by a strong
            network of associate offices in major cities.
          </p>

          <div
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
              showMore ? "max-h-64" : "max-h-32"
            }`}
          >
            <p className="mt-4 text-sm leading-relaxed">
              We specialize in sourcing top-tier talent — skilled, semi-skilled,
              and unskilled — across blue and white-collar categories to meet
              the diverse workforce needs of industries worldwide.
            </p>
            <p className="mt-4 text-sm leading-relaxed">
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
