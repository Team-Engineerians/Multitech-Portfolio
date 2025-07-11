import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  "/hero1.png",
  "/hero2.png",
  "/hero3.png",
  "/hero4.png",
  "/hero5.png"
];

const FADE_DURATION = 1500; // ms

const lineColors = [
  "#e3d7a2", // yellowish
  "#d05c4e", // reddish
  "#4a6173", // bluish
  "#ffffff"  // white
];

const HeroSection = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [fadeIn, setFadeIn] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setNextIndex((bgIndex + 1) % images.length);
      setFadeIn(true);
      fadeTimeoutRef.current = setTimeout(() => {
        setBgIndex((prev) => (prev + 1) % images.length);
        setFadeIn(false);
        setNextIndex(null);
      }, FADE_DURATION);
    }, 5000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    };
  }, [bgIndex]);

  return (
    <section
      className="relative w-screen min-h-[90vh] md:min-h-[100vh] flex items-stretch justify-start overflow-hidden z-[40]"
      style={{ minHeight: '90dvh', width: '100vw' }}
    >
      {/* Current Image (always visible) */}
      <Image
        src={images[bgIndex]}
        alt="Background"
        fill
        className="object-cover w-full h-full absolute inset-0 transition-opacity duration-[1500ms] ease-in-out opacity-100 z-0"
        priority
      />
      {/* Next Image (fades in on top) */}
      {nextIndex !== null && (
        <Image
          src={images[nextIndex]}
          alt="Background"
          fill
          className={`object-cover w-full h-full absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${fadeIn ? "opacity-100" : "opacity-0"} z-10`}
          priority
        />
      )}
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60 z-20" />
      {/* Vertical lines */}
      <div className="absolute top-0 left-[7vw] md:left-[12vw] lg:left-[16vw] h-full w-[1px] z-30 transition-colors duration-700" style={{backgroundColor: lineColors[bgIndex % 4]}} />
      <div className="absolute top-0 right-[7vw] md:right-[12vw] lg:right-[16vw] h-full w-[1px] z-30 transition-colors duration-700" style={{backgroundColor: lineColors[bgIndex % 4]}} />
      {/* Mobile Hero Content */}
      <div className="block md:hidden relative z-30 w-full h-full pt-[180px] px-6 pb-0 flex flex-col justify-start">
        {/* Subheadline */}
        <div className="mt-8 pl-6">
          <span className="block text-[#e3d7a2] text-lg font-normal leading-tight mb-6 text-left">Multi Tech<br />Testing and Training</span>
        </div>
        {/* Main headline */}
        <div className="mt-18 pl-6">
          <h1 className="text-white text-3xl md:text-[42px] lg:text-[60px] xl:text-[68px] 2xl:text-[72px] font-medium leading-[1.08] mb-8 max-w-full text-left" style={{letterSpacing: '-1.5px'}}>
            Skilled manpower for<br />every need, across the<br />globe.
          </h1>
        </div>
        {/* Supporting line */}
        <div className="mt-48 pl-6">
          <p className="text-[#e3d7a2] text-sm font-normal leading-tight text-left">
            Trusted overseas recruitment firm<br />
            licensed by the Ministry of External Affairs, India.
          </p>
        </div>
        {/* Horizontal line just below supporting text */}
        <div className="relative w-screen h-[1px] mt-6 left-1/2 -translate-x-1/2 transition-colors duration-700" style={{backgroundColor: lineColors[bgIndex % 4]}} />
      </div>
      {/* Tablet/Desktop Hero Content */}
      <div className="hidden md:flex relative z-30 flex-col items-start justify-center h-full pt-[8vh] lg:pt-[8vh]" style={{ minHeight: '100vh' }}>
        <div className="mb-8 mt-8" style={{marginLeft: 'calc(20vw + 8px)'}}>
          <span className="text-[#e3d7a2] text-2xl md:text-[32px] font-normal leading-tight block text-left">Multi Tech<br />Testing and Training</span>
        </div>
        <div style={{marginLeft: 'calc(20vw + 8px)'}}>
          <h1 className="text-white text-4xl md:text-[42px] lg:text-[60px] xl:text-[68px] 2xl:text-[72px] font-medium leading-[1.08] mb-8 max-w-[700px] text-left" style={{letterSpacing: '-1.5px'}}>
            Skilled manpower for<br />every need, across the<br />globe.
          </h1>
        </div>
        {/* Horizontal line just above supporting text for desktop/tablet */}
        <div className="absolute left-0 w-screen h-[1px] z-40 transition-colors duration-700" style={{position: 'absolute', top: 'calc(100% - 120px)', backgroundColor: lineColors[bgIndex % 4]}} />
        <div className="mt-8 pt-6 w-full max-w-[600px]" style={{marginLeft: 'calc(20vw + 8px)'}}>
          <p className="text-[#e3d7a2] text-base md:text-[18px] font-normal leading-tight">
            Trusted overseas recruitment firm<br />
            licensed by the Ministry of External Affairs, India.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
