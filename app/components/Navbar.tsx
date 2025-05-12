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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-screen bg-white/60 backdrop-blur-[50px] py-4 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a href="#top" className="flex-shrink-0">
          <Image src="/navbar-logo.svg" alt="Logo" width={120} height={40} />
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Center Links - Desktop */}
        <div className="hidden md:flex flex-1 justify-center">
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

        {/* Right Actions - Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="mailto:you@yourdomain.com"
            className="flex items-center bg-orange-400 hover:bg-orange-500 text-black font-bold text-sm px-5 py-2 rounded-full transition-colors duration-300"
          >
            <MailIcon size={16} className="mr-2" />
            Mail us
          </a>
          <a
            href="#"
            className="flex items-center bg-blue-800 hover:bg-blue-900 text-white text-sm px-5 py-2 rounded-full transition-colors duration-300"
          >
            Brochure
          </a>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col p-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-2 text-gray-900 hover:text-orange-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <a
                  href="mailto:you@yourdomain.com"
                  className="flex items-center justify-center bg-orange-400 hover:bg-orange-500 text-black font-bold text-sm px-5 py-2 rounded-full"
                >
                  <MailIcon size={16} className="mr-2" />
                  Mail us
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center bg-blue-800 hover:bg-blue-900 text-white text-sm px-5 py-2 rounded-full"
                >
                  Brochure
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
