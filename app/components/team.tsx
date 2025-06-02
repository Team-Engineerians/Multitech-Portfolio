"use client";

import React from "react";

const team = [
  {
    name: "Mr. Aman Srivastava",
    title: "Managing Director",
    bio: "Visionary behind UMC, committed to global manpower excellence.",
    img: "/images/aman.jpg",
  },
  {
    name: "Mr. Manoj Srivastava",
    title: "Founder & CEO",
    bio: "Dedicated to client success and operational perfection.",
    img: "/images/manoj.jpg",
  },
  {
    name: "Aditi Srivastava",
    title: "BD Manager",
    bio: "Driving growth through strategic partnerships and innovative outreach.",
    img: "/images/aditi.jpg",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="w-screen bg-[#EFF0F1] py-12 md:py-16 lg:py-20 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-0">
        {/* Header */}
        <div className="mb-8 text-left">
          <h2 className="text-2xl md:text-2xl lg:text-2xl font-semibold text-black mb-4">About Us & Leadership</h2>
          <p className="text-base md:text-lg text-black font-normal max-w-3xl">
            Trusted overseas manpower recruitment firm since 2009, licensed by the Ministry of External Affairs, Govt. of India (Lic. No. B-1458/JP/PER/100+/5/9908/2021). Headquartered in New Delhi with a branch in Gorakhpur, we source skilled, semi-skilled, and unskilled talent across borders offering workforce solutions for global success.
          </p>
        </div>
        {/* Team Cards */}
        <div className="flex flex-row justify-center items-start gap-20 w-full mt-2">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center h-[400px]">
              {/* Image Card */}
              <div className="bg-white w-[252px] h-[300px] rounded-xl overflow-hidden flex items-center justify-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  style={{ display: 'block' }}
                />
              </div>
              {/* Name & Title below card */}
              <h3 className="text-base font-bold text-black mt-3 mb-0 text-center">{member.name}</h3>
              <p className="text-sm text-gray-400 font-normal mt-1 text-center">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
