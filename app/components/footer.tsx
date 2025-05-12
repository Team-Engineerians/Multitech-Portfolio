import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-screen min-h-[660px] text-black pt-25 px-4 sm:px-6 lg:px-10">
      {/* Desktop: 3 columns, Tablet: 2 columns, Mobile: 1 column */}
      <div className="max-w-screen-xl mx-auto">
        {/* Mobile and Tablet Layout */}
        <div className="block lg:hidden">
          {/* Logo and Socials for Mobile/Tablet */}
          <div className="text-center mb-10">
            <img
              src="/multitech.png"
              alt="Multi-Tech Logo"
              className="w-[200px] sm:w-[250px] mx-auto h-auto mb-6"
            />
            <div className="flex justify-center gap-8 text-2xl">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">🔗</a>
              <a href="#" aria-label="YouTube">▶️</a>
            </div>
          </div>

          {/* Quick Links for Mobile/Tablet */}
          <div className="text-center sm:text-left mb-10">
            <h4 className="text-blue-700 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>About</li>
              <li>Services</li>
              <li>Roles & Jobs</li>
              <li>Gallery</li>
              <li>Team</li>
              <li>Clients</li>
              <li>Testimonials</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* License and Contact for Mobile/Tablet */}
          <div className="text-center sm:text-left mb-10">
            <h4 className="text-blue-700 font-semibold mb-4">License</h4>
            <p className="mb-4">
              Approved by Govt. Of India, Ministry Of External Affairs
              <br />
              License No. UP/PART/100/5/9908/2021
            </p>
            <h4 className="text-blue-700 font-semibold mb-4">Contact</h4>
            <p className="mb-1">+91-8467826648</p>
            <p className="mb-1">+91-9316763631</p>
            <p className="mb-1">srivastava.aman.umc@gmail.com</p>
            <p>aditi.unitesmanpower@gmail.com</p>

            {/* Address Section */}
            <div className="mt-6">
              <h4 className="text-blue-700 font-semibold mb-2">
                Gorakhpur Branch Office
              </h4>
              <p>
                MULTI-TECH TESTING AND TRAINING CENTER
                <br />
                Jungle Sikari (Khorabar), PO– Jungle Chauri,
                <br />
                Near Kesharwani Petrol Pump,
                <br />
                Gorakhpur, Uttar Pradesh – 273010
                <br />
                +91-9839865723, +91-8467826648
              </p>
            </div>
          </div>
        </div>

        {/* Original Desktop Layout - Preserved Exactly */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Logo and Socials */}
          <div className="flex flex-col items-start text-left">
            <img
              src="/multitech.png"
              alt="Multi-Tech Logo"
              className="w-[300px] h-auto mb-2"
            />
            <div className="flex gap-14 mt-8 text-2xl">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">🔗</a>
              <a href="#" aria-label="YouTube">▶️</a>
            </div>
          </div>

          {/* Middle Section: Links & License */}
          <div className="grid grid-cols-2 gap-6 text-md">
            <div className="ml-20">
              <h4 className="text-blue-700 font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-6">
                <li>About</li>
                <li>Services</li>
                <li>Roles & Jobs</li>
                <li>Gallery</li>
                <li>Team</li>
                <li>Clients</li>
                <li>Testimonials</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="ml-30 w-[400px]">
              <h4 className="text-blue-700 font-semibold mb-6">License</h4>
              <p className="mb-4">
                Approved by Govt. Of India, Ministry Of External Affairs
                <br />
                License No. UP/PART/100/5/9908/2021
              </p>
              <h4 className="text-blue-700 font-semibold mb-6">Contact</h4>
              <p className="mb-1">+91-8467826648</p>
              <p className="mb-1">+91-9316763631</p>
              <p className="mb-1">srivastava.aman.umc@gmail.com</p>
              <p>aditi.unitesmanpower@gmail.com</p>
              
              {/* Address Section */}
              <div className="text-sm text-left mt-6">
                <h4 className="text-blue-700 font-semibold mb-2">
                  Gorakhpur Branch Office
                </h4>
                <p>
                  MULTI-TECH TESTING AND TRAINING CENTER
                  <br />
                  Jungle Sikari (Khorabar), PO– Jungle Chauri, Near Kesharwani
                  Petrol Pump,
                  <br />
                  Gorakhpur, Uttar Pradesh – 273010
                  <br />
                  +91-9839865723, +91-8467826648
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center font-semibold text-md mt-10 lg:mt-25 pb-6 lg:pb-0">
        © 2025 Multi-Tech Testing and Training Center
      </div>
    </footer>
  );
};

export default Footer;
