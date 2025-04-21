import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto mb-8 h-12 flex items-center justify-between px-4">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/navbar-logo.svg" alt="Logo" className="w-full h-full" />
      </div>

      {/* Center Nav Links */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex gap-12 text-md font-medium">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Career</a>
          <a href="#">Gallery</a>
        </div>
      </div>

      {/* Contact Button */}
      <div>
        <button className="bg-orange-400 hover:bg-orange-500 transition text-sm font-semibold px-6 py-2 rounded-full">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;