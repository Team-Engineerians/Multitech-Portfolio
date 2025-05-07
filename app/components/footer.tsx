import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-screen h-[573px] bg-[#E1ECF7] text-black pt-10 px-4">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Logo and Socials */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="/multitech.png"
            alt="Multi-Tech Logo"
            className="w-[100px] h-auto mb-2"
          />
          <h3 className="font-bold text-xl">MULTI-TECH</h3>
          <p className="text-sm mb-4">TESTING & TRAINING CENTER</p>
          <div className="flex gap-6 text-xl">
            <a href="#" aria-label="Facebook">
              📘
            </a>
            <a href="#" aria-label="Instagram">
              📷
            </a>
            <a href="#" aria-label="LinkedIn">
              🔗
            </a>
            <a href="#" aria-label="YouTube">
              ▶️
            </a>
          </div>
        </div>

        {/* Middle Section: Links & License */}
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="text-blue-700 font-medium mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>About</li>
              <li>Services</li>
              <li>Roles & Jobs</li>
              <li>Gallery</li>
              <li>Team</li>
              <li>Clients</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div>
            <h4 className="text-blue-700 font-medium mb-2">License</h4>
            <p className="mb-4">
              Approved by Govt. Of India, Ministry Of External Affairs
              <br />
              License No. UP/PART/100/5/9908/2021
            </p>
            <h4 className="text-blue-700 font-medium mb-2">Contact</h4>
            <p className="mb-1">+91-8467826648</p>
            <p className="mb-1">+91-9316763631</p>
            <p className="mb-1">srivastava.aman.umc@gmail.com</p>
            <p>aditi.unitesmanpower@gmail.com</p>
          </div>
        </div>

        {/* Address Section */}
        <div className="text-sm">
          <h4 className="text-blue-700 font-medium mb-2">
            Gorakhpur Branch Office
          </h4>
          <p>
            MULTI-TECH TESTING AND TRAINING CENTER
            <br />
            Jungle Sikari (Khorabar), PO– Jungle Chauri, Near Kesharwani Petrol
            Pump,
            <br />
            Gorakhpur, Uttar Pradesh – 273010
            <br />
            +91-9839865723, +91-8467826648
          </p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-600 mt-10">
        © 2025 Multi-Tech Testing and Training Center
      </div>
    </footer>
  );
};

export default Footer;
