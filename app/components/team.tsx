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
    title: "Business Development Manager",
    bio: "Driving growth through strategic partnerships and innovative outreach.",
    img: "/images/aditi.jpg",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="w-screen bg-[#E1ECF7] py-8 md:py-12 lg:py-16 min-h-screen">
      {/* Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
            Meet the Team
          </h2>
          <p className="mt-2 text-base md:text-lg text-gray-600">
            Leadership That Drives Excellence
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {team.map((member) => (
            <div 
              key={member.name} 
              className="flex flex-col items-center mx-auto w-full max-w-[300px] md:max-w-[262px]"
            >
              {/* Image container */}
              <div className="bg-white rounded-lg w-full h-[280px] md:h-[300px] lg:h-[312px] overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Name & Title */}
              <div className="mt-4 md:mt-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm md:text-md text-gray-500 mt-1 mb-2">
                  {member.title}
                </p>
              </div>

              {/* Bio */}
              <div className="w-full md:w-[232px] px-4 md:px-0">
                <p className="text-base md:text-lg text-blue-600 text-center">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
