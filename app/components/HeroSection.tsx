import React from "react";
import { FlipWords } from "./ui/flip-words";

const words = ["Workforce,", "Videsh Jaye,", "اذهب إلى الخارج"];
const wordsdown = ["Without Borders.", "Paise Kamaye.", "واكسب المال"];

const HeroSection = () => {
  return (
    <div className="text-center z-10">
      <h1 className="text-7xl font-extrabold text-[#115FB6] mt-4 mb-4">
        <FlipWords words={words} />
        <br />
        <FlipWords words={wordsdown} />
      </h1>
      <p className="font-medium text-gray-600 text-2xl">
        Unlock Global Opportunities with Expert Manpower Solutions
      </p>
    </div>
  );
};

export default HeroSection;