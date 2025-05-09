import React from "react";
import { FaYoutube, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function ConnectUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-4">
      <h1 className="text-2xl font-semibold mb-1">Connect us</h1>
      <p className="text-sm text-gray-600 mb-10">
        Join our social pages and stay updated
      </p>

      <div className="grid grid-cols-2 gap-6 max-w-4xl w-full">
        {/* YouTube */}
        <div className="bg-[#F0F0F0] w-[368px] h-[230px] rounded-xl p-5 flex items-start gap-3 shadow-sm">
          <FaYoutube className="text-red-600 text-6xl ml-2" />
          <div>
            <h2 className="font-bold text-lg mt-3 mb-5">MultiTechGulfjob</h2>
            <p className="text-sm text-gray-800 mb-8 leading-snug">
              Stay updated with the latest overseas job openings by subscribing
              to our official YouTube channel.
            </p>
            <button className="bg-black text-white text-sm px-4 py-1.5 rounded-full">
              Subscribe
            </button>
          </div>
        </div>

        {/* Facebook */}
        <div className="bg-[#F0F0F0]  w-[368px] h-[230px] rounded-xl p-5 flex items-start gap-3 shadow-sm">
          <FaFacebookF className="text-blue-600 text-3xl ml-2 mt-3" />
          <div>
            <h2 className="font-bold text-lg mb-3 mt-3">
              MultiTech Testing &...
            </h2>
            <p className="text-sm text-gray-800 mb-15 leading-snug">
              Join our Facebook page for regular updates, news, and job alerts.
            </p>
            <button className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded-full">
              Follow
            </button>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="bg-[#F0F0F0]  w-[368px] h-[157px] rounded-xl p-5 flex items-start gap-3 shadow-sm">
          <FaWhatsapp className="text-green-600 text-4xl ml-2 mt-1" />
          <div>
            <h2 className="font-bold text-lg mb-7 mt-2">
              MultiTech Job Channel.
            </h2>
            <button className="bg-green-900 text-white text-sm px-4 py-1.5 rounded-full">
              Join
            </button>
          </div>
        </div>

        {/* Emails */}
        <div className="bg-[#F0F0F0]  w-[368px] h-[157px] rounded-xl p-5 shadow-sm flex items-center justify-center">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-[235px] bg-[#D1D1D1] text-sm rounded-full px-4 py-2 shadow-sm text-center">
              srivastava.aman.umc@gmail.com
            </div>
            <div className="bg-[#D1D1D1] w-[235px] text-sm rounded-full px-4 py-2 shadow-sm text-center">
              aditi.unitesmanpower@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
