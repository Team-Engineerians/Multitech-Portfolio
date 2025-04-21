import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto mb-8 h-8 flex items-center justify-between px-4">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/navbar-logo.svg" alt="Logo" width={200} height={200} />
      </div>

      {/* Center Nav Links */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex gap-6 sm:gap-10 text-md font-medium text-gray-800">
          {["About", "Services", "Career", "Gallery"].map((link, index) => (
            <a
              key={index}
              href="#"
              className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full hover:text-orange-500"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Contact Button */}
      <div>
        <button className="bg-orange-400 hover:bg-orange-500 transition-colors duration-300 text-sm font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
