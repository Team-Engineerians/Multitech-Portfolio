import Image from "next/image";
import React from "react";
import { PhoneIcon, MailIcon } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Job roles", href: "#career" },
  { name: "Gallery", href: "#gallery" },
];

export default function Navbar() {
  return (
    <nav className="w-screen bg-white py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a href="#top" className="flex-shrink-0">
          <Image src="/navbar-logo.svg" alt="Logo" width={120} height={40} />
        </a>

        {/* Center Links */}
        <div className="flex-1 flex justify-center">
          <div className="flex space-x-8 text-base font-medium text-gray-900">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-[width] after:duration-300 hover:after:w-full hover:text-orange-500"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-6">
          <a
            href="mailto:you@yourdomain.com"
            className="flex items-center bg-orange-400 hover:bg-orange-500 text-black font-bold text-sm px-5 py-2 rounded-full transition-colors duration-300"
          >
            <MailIcon size={16} className="mr-2" />
            Mail us
          </a>
          <a
            href="tel:+918467826648"
            className="flex items-center text-black font-bold"
          >
            <PhoneIcon size={16} className="mr-2" />
            +91‑84678 26648
          </a>
        </div>
      </div>
    </nav>
  );
}
