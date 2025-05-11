import React from "react";
import { FlipWords } from "./ui/flip-words";
import { FaYoutube, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const words = ["Trained Here, Deployed Globally."];

const HeroSection = () => {
  return (
    <div className="text-center z-10 relative">
      <h1 className="text-6xl font-bold pt-20 mt-4 mb-4">
        <FlipWords words={words} />
      </h1>
      <p className="font-medium text-gray-600 text-2xl">
        Unlock Global Opportunities with Expert Manpower Solutions
      </p>

      {/* Floating Social Icons */}
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-4 z-50">
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:scale-110 transition-all"
        >
          <FaYoutube className="text-red-600 text-xl" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:scale-110 transition-all"
        >
          <FaFacebookF className="text-blue-600 text-xl" />
        </a>
        <a
          href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:scale-110 transition-all"
        >
          <FaWhatsapp className="text-green-500 text-xl" />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
