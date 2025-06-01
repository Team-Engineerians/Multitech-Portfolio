import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-[2px]">
      <div className="container mx-auto px-12 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="/navbar-logo.svg" 
                alt="Logo" 
                width={120} 
                height={40} 
                className="brightness-0 invert"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex gap-16 text-white/80 text-[15px] font-normal">
            <Link href="#services" className="hover:text-white transition">Services</Link>
            <Link href="#career" className="hover:text-white transition">Job roles</Link>
            <Link href="#gallery" className="hover:text-white transition">Gallery</Link>
          </nav>

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="bg-white text-black rounded-full px-6 py-1.5 font-medium text-xs shadow hover:bg-[#e6e6e6] transition min-w-[100px]">Brochure</button>
            <button className="bg-[#19170f] text-white rounded-full px-6 py-1.5 font-medium text-xs border border-white/20 hover:bg-[#23201a] transition min-w-[80px]">Mail us</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
