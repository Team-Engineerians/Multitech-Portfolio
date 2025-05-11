import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-screen h-[660px] text-black pt-25 px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-screen-xl mx-auto">
        {/* Logo and Socials */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="/multitech.png"
            alt="Multi-Tech Logo"
            className="w-[300px] h-auto mb-2"
          />
          <div className="flex gap-14 mt-8 text-2xl">
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
            <div className="text-sm text-center mt-6 md:text-left">
              <h4 className="text-blue-700 font-semibol mb-2">
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

      <div className="text-center font-semibold text-md mt-25">
        © 2025 Multi-Tech Testing and Training Center
      </div>
    </footer>
  );
};

export default Footer;
