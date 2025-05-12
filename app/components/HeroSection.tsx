import React from "react";
import { FlipWords } from "./ui/flip-words";
import { FaYoutube, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const words = ["Trained Here, Deployed Globally."];

const HeroSection = () => {
  return (
    <div className="text-center relative px-3 sm:px-4 md:px-6">
      {/* Main Content */}
      <h1 className="text-[28px] sm:text-[40px] md:text-[52px] lg:text-6xl 
                     font-bold 
                     pt-16 sm:pt-18 md:pt-20 
                     mt-2 sm:mt-3 md:mt-4 
                     mb-3 sm:mb-4 md:mb-4">
        <FlipWords words={words} />
      </h1>
      <p className="font-medium 
                    text-gray-600 
                    text-[16px] sm:text-[20px] md:text-[24px] lg:text-2xl
                    max-w-[300px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[800px]
                    mx-auto 
                    leading-[1.6] sm:leading-[1.7] md:leading-[1.8]
                    px-2 sm:px-3 md:px-4">
        Unlock Global Opportunities with Expert Manpower Solutions
      </p>

      {/* Floating Social Icons - Increased z-index and improved visibility */}
      <div className="fixed top-1/2 -translate-y-1/2
                      right-2 sm:right-3 md:right-4 lg:right-4
                      flex flex-col gap-3 sm:gap-4
                      z-[999999]
                      drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
        {/* YouTube */}
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12
                     flex items-center justify-center 
                     rounded-full 
                     bg-white
                     shadow-lg hover:shadow-xl
                     transform hover:scale-110 hover:-translate-x-1
                     transition-all duration-300
                     ring-1 ring-gray-100"
        >
          <FaYoutube className="text-red-600 text-xl sm:text-2xl md:text-2xl" />
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12
                     flex items-center justify-center 
                     rounded-full 
                     bg-white
                     shadow-lg hover:shadow-xl
                     transform hover:scale-110 hover:-translate-x-1
                     transition-all duration-300
                     ring-1 ring-gray-100"
        >
          <FaFacebookF className="text-blue-600 text-xl sm:text-2xl md:text-2xl" />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12
                     flex items-center justify-center 
                     rounded-full 
                     bg-white
                     shadow-lg hover:shadow-xl
                     transform hover:scale-110 hover:-translate-x-1
                     transition-all duration-300
                     ring-1 ring-gray-100"
        >
          <FaWhatsapp className="text-green-500 text-xl sm:text-2xl md:text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
