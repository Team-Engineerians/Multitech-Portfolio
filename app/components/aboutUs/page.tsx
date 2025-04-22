"use client";

import Image from "next/image";
import React, { useState } from "react";
import { GlobeDemo } from "../globeDemo";

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {/* Section 1: About Us */}
      <div className="w-screen bg-[#dceaf7] mt-15 pt-16 pb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-6">
          {/* Left: Logo */}
          <div className="flex flex-col items-center text-center md:w-1/2">
            <Image
              src="/multitech.svg"
              alt="Multi-Tech Logo"
              width={250}
              height={250}
              className="mb-4"
            />
          </div>

          {/* Right: Text */}
          <div className="md:w-1/2 text-center md:text-left relative">
            <h2 className="text-lg sm:text-2xl font-medium bg-[radial-gradient(85.92%_337.04%_at_60.4%_0%,#125FB7_21.92%,#031731_100%)] bg-clip-text text-transparent">
              We are
            </h2>

            <h1 className="text-1xl sm:text-3xl font-medium bg-[radial-gradient(85.92%_337.04%_at_60.4%_0%,#125FB7_21.92%,#031731_100%)] bg-clip-text text-transparent mb-4">
              Empowering Global Workforce
              <br className="hidden sm:block" />
              Solutions Since 2009
            </h1>

            <p className="text-gray-800 mb-4">
              A trusted name in overseas manpower recruitment since 2009,
              approved by the Ministry of External Affairs, Govt. of India (Lic.
              No. B-1458/JP/PER/100+/5/9908/2021).
            </p>

            <p className="text-gray-800">
              Headquartered in New Delhi with a branch in Gorakhpur, our global
              reach spans India, Nepal, and Bangladesh, supported by a strong
              network of associate offices in major cities.
            </p>

            {/* Toggleable paragraph */}
            <div className="relative mt-4">
              <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                  showMore ? "max-h-[1000px]" : "max-h-[4.5rem]"
                }`}
              >
                <p className="text-gray-800 mb-4">
                  We specialize in sourcing top-tier talent — skilled,
                  semi-skilled, and unskilled — across blue and white-collar
                  categories to meet the diverse workforce needs of global
                  organizations.
                </p>

                <p className="text-gray-800">
                  More than recruiters, we are architects of human capital,
                  committed to building enduring partnerships and delivering
                  workforce solutions that empower global success.
                </p>
              </div>

              {/* Fade overlay & toggle button */}
              <div
                className={`absolute bottom-0 left-0 w-full h-20 transition-opacity duration-300 ${
                  showMore ? "opacity-0 pointer-events-none" : "opacity-100"
                } bg-gradient-to-t from-[#dceaf7] to-transparent flex items-end justify-center`}
              ></div>

              {/* Centered toggle button */}
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="bg-[#E5EAF1] text-[#333] w-[48px] h-[38px] flex items-center justify-center rounded-full shadow-[inset_0_1px_3px_rgba(0,0,0,0.1),_0_2px_4px_rgba(0,0,0,0.06)] hover:shadow-md transition"
                >
                  <span className="text-2xl leading-none">
                    {showMore ? "⌃" : "⌄"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen h-[360px] bg-white py-20 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-6xl mx-auto">
          {/* Vision */}
          <div className="md:w-1/3 mt-10 md:mt-10 md:self-start">
            <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
              Vision
            </h2>
            <p className="text-gray-700 text-center md:text-left">
              To deliver unmatched quality through expert training and testing,
              building futures rooted in skill and excellence.
            </p>
          </div>

          {/* Replace Globe Image with GlobeDemo */}
          <div className="md:w-1/3 flex justify-center">
            <div className="w-[320px] h-[320px]">
              <GlobeDemo />
            </div>
          </div>

          {/* Mission */}
          <div className="md:w-1/3 mb-10 md:mb-20 md:self-end">
            <h2 className="text-2xl font-semibold mb-4 text-center md:text-right">
              Mission
            </h2>
            <p className="text-gray-700 text-center md:text-right">
              To create lasting impact through effective placements, value-added
              services, and a focus on empowering people and industries alike.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
