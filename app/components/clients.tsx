import React from "react";
import Image from "next/image";

const clients = [
  "/Frame273.png",
  "/Frame274.png",
  "/Frame275.png",
  "/Frame276.png",
  "/Frame277.png",
  "/Frame278.png",
  "/Frame279.png",
  "/Frame280.png",
  "/Frame281.png",
  "/Frame282.png",
  "/Frame283.png",
  "/Frame284.png",
  "/Frame285.png",
  "/Frame286.png",
  "/Frame287.png",
  "/Frame288.png",
  "/Frame289.png",
  "/Frame290.png",
  "/Frame291.png",
  "/Frame292.png",
];

const aspectRatio = 2; // width:height ratio for world map

const ClientsSection: React.FC = () => {
  return (
    <section
      className="w-screen min-h-[400px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center relative overflow-hidden pt-8 pb-8 px-2 sm:px-8 md:px-20"
      style={{
        aspectRatio: `${aspectRatio}/1`,
        background: `url('/worldmapscroll.svg') center center / 900px auto no-repeat`,
        minHeight: '400px',
        height: 'auto',
        maxHeight: '90vh',
      }}
    >
      {/* Overlay for better contrast and lighter map */}
      <div className="absolute inset-0 bg-white opacity-60 z-0 pointer-events-none" />
      <div className="relative w-full h-full max-w-[1600px] mx-auto flex flex-col items-center justify-center z-10 gap-8 sm:gap-12">
        {/* Row 1: 7 logos */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-10 w-full">
          {clients.slice(0, 7).map((logo, idx) => (
            <Image
              key={idx}
              src={logo}
              alt={`Client ${idx + 1}`}
              className="object-contain w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] rounded-md drop-shadow-md"
              width={90}
              height={90}
              loading="lazy"
            />
          ))}
        </div>
        {/* Row 2: 3 logos, Our Clients, 3 logos */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-10 w-full">
          {clients.slice(7, 10).map((logo, idx) => (
            <Image
              key={7+idx}
              src={logo}
              alt={`Client ${7+idx + 1}`}
              className="object-contain w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] rounded-md drop-shadow-md"
              width={90}
              height={90}
              loading="lazy"
            />
          ))}
          <span className="mx-2 sm:mx-8 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 text-center drop-shadow-lg whitespace-nowrap">Our Clients</span>
          {clients.slice(10, 13).map((logo, idx) => (
            <Image
              key={10+idx}
              src={logo}
              alt={`Client ${10+idx + 1}`}
              className="object-contain w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] rounded-md drop-shadow-md"
              width={90}
              height={90}
              loading="lazy"
            />
          ))}
        </div>
        {/* Row 3: 7 logos */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-10 w-full">
          {clients.slice(13, 20).map((logo, idx) => (
            <Image
              key={13+idx}
              src={logo}
              alt={`Client ${13+idx + 1}`}
              className="object-contain w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] rounded-md drop-shadow-md"
              width={90}
              height={90}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
