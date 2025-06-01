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
      className="relative w-screen min-h-[100vh] flex items-stretch justify-start overflow-hidden z-[40]"
      style={{ minHeight: '100dvh', width: '100vw' }}
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

      {/* Hero Content */}
      <div className="relative z-30 flex flex-col items-start justify-center h-full pl-[30vw] pt-[8vh]" style={{ minHeight: '100vh' }}>
        <div className="mb-8 mt-8">
          <span className="text-[#e3d7a2] text-[32px] font-normal leading-tight block">Multi Tech<br />Testing and Training</span>
        </div>
        <h1 className="text-white text-[42px] md:text-[60px] lg:text-[64px] xl:text-[68px] 2xl:text-[72px] font-medium leading-[1.08] mb-8 max-w-[700px]" style={{letterSpacing: '-1.5px'}}>
          Skilled manpower for<br />every need, across the<br />globe.
        </h1>
        <div className="mt-8 pt-6 w-full max-w-[600px]">
          <p className="text-[#e3d7a2] text-[18px] font-normal leading-tight">
            Trusted overseas recruitment firm<br />
            licensed by the Ministry of External Affairs, India.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
