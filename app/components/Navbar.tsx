import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="block md:hidden fixed top-0 left-0 w-full z-50 bg-[#e7e2d0] border-b border-[#e7e2d0]">
        <div className="flex flex-col w-full">
          {/* Top Row: Logo and Buttons */}
          <div className="flex items-center justify-between px-8 py-5 gap-8">
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="/navbar-logo.svg" 
                alt="Logo" 
                width={120} 
                height={40} 
                className=""
              />
            </Link>
            <div className="flex gap-6">
              <button className="bg-white text-black rounded-full px-4 py-1.5 font-bold text-xs shadow-md">Brochure</button>
              <button className="bg-black text-white rounded-full px-4 py-1.5 font-bold text-xs">Mail us</button>
            </div>
          </div>
          {/* Bottom Row: Navigation Links */}
          <div className="flex justify-between px-8 py-3 gap-12 text-[16px] text-gray-800 font-medium">
            <Link href="#services">Services</Link>
            <Link href="#career">Job roles</Link>
            <Link href="#gallery">Gallery</Link>
          </div>
        </div>
      </nav>
      {/* Desktop/Tablet Navbar (unchanged) */}
      <nav className={`hidden md:block fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md bg-white/80' 
          : 'backdrop-blur-[2px]'
      }`}>
        <div className="container mx-auto px-12 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex-shrink-0">
                <Image 
                  src="/navbar-logo.svg" 
                  alt="Logo" 
                  width={160} 
                  height={50} 
                  className={`transition-all duration-300 ${isScrolled ? 'brightness-0' : 'brightness-0 invert'}`}
                />
              </Link>
            </div>
            {/* Navigation Links */}
            <nav className={`hidden md:flex gap-16 text-[15px] font-medium transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white/90'
            }`}>
              <Link href="#services" className={`hover:text-orange-500 transition ${isScrolled ? 'hover:text-orange-500' : 'hover:text-white'}`}>Services</Link>
              <Link href="#career" className={`hover:text-orange-500 transition ${isScrolled ? 'hover:text-orange-500' : 'hover:text-white'}`}>Job roles</Link>
              <Link href="#gallery" className={`hover:text-orange-500 transition ${isScrolled ? 'hover:text-orange-500' : 'hover:text-white'}`}>Gallery</Link>
            </nav>
            {/* Buttons */}
            <div className="flex gap-4">
              <button className="bg-white text-black rounded-full px-8 py-2.5 font-bold text-sm shadow-md hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 min-w-[120px]">
                Brochure
              </button>
              <button className={`rounded-full px-8 py-2.5 font-bold text-sm border transition-all duration-300 ease-in-out transform hover:scale-105 min-w-[100px] ${
                isScrolled 
                  ? 'bg-orange-500 text-white border-orange-500 hover:bg-white hover:text-orange-500 hover:border-orange-500' 
                  : 'bg-[#19170f] text-white border-white/20 hover:bg-white hover:text-black'
              }`}>
                Mail us
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
