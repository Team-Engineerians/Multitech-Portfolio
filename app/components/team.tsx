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
    <section className="w-screen h-[838px] bg-[#E1ECF7] py-16 flex items-center justify-center">
      {/* Content Container */}
      <div className="text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-semibold text-gray-800">
            Meet the Team
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Leadership That Drives Excellence
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-25 px-4">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              {/* Image container only */}
              <div className="bg-white rounded-lg w-[262px] h-[312px] mx-auto mb-4 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Title */}
              <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-md text-gray-500 mb-2">{member.title}</p>

              {/* Bio matching image width */}
              <div className="w-[232px] mx-auto">
                <p className="text-lg text-blue-600 text-center break-words">
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
