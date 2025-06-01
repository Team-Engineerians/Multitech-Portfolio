import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/hero1.png",
  "/hero2.png",
  "/hero3.png",
  "/hero4.png",
  "/hero5.png"
];

const HeroSection = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-screen min-h-[100vh] flex items-stretch justify-start bg-black overflow-hidden z-[40]"
      style={{ minHeight: '100dvh', width: '100vw' }}
    >
      {/* Background Image Only */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={images[bgIndex]}
          alt="Background"
          fill
          className="object-cover w-full h-full transition-all duration-700"
          priority
        />
      </div>

      {/* Top Navigation Bar */}
      <div className="absolute top-0 left-0 w-full z-30 flex items-center justify-between px-12 py-5">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-white font-bold text-base tracking-wide">MULTI-TECH</span>
        </div>
        {/* Nav Links */}
        <nav className="hidden md:flex gap-16 text-white/80 text-[15px] font-normal">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#career" className="hover:text-white transition">Job roles</a>
          <a href="#gallery" className="hover:text-white transition">Gallery</a>
        </nav>
        {/* Buttons */}
        <div className="flex gap-3">
          <button className="bg-white text-black rounded-full px-6 py-1.5 font-medium text-xs shadow hover:bg-[#e6e6e6] transition min-w-[100px]">Brochure</button>
          <button className="bg-[#19170f] text-white rounded-full px-6 py-1.5 font-medium text-xs border border-white/20 hover:bg-[#23201a] transition min-w-[80px]">Mail us</button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-30 flex flex-col items-start justify-center h-full pl-[8vw] pt-[8vh]" style={{ minHeight: '100vh' }}>
        <div className="mb-8 mt-8">
          <span className="text-[#e3d7a2] text-[28px] font-normal leading-tight block">Multi Tech<br />Testing and Training</span>
        </div>
        <h1 className="text-white text-[56px] md:text-[64px] lg:text-[68px] xl:text-[72px] 2xl:text-[76px] font-semibold leading-[1.08] mb-8 max-w-[700px]" style={{letterSpacing: '-1.5px'}}>
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
