import React from "react";

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

const ClientsSection: React.FC = () => {
  return (
    <section className="h-[774px] bg-white flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl font-semibold mb-6">Our Clients</h2>

      {/* Logo grid container */}
      <div className="w-[764px] h-[450px] overflow-hidden">
        <div className="grid grid-cols-5 gap-x-8 gap-y-4">
          {clients.map((logo, index) => (
            <div
              key={index}
              className="w-[100px] h-[100px] flex items-center justify-center m-auto"
            >
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="object-contain max-w-[100px] max-h-[110px]"
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>

      <p className="mt-10 text-gray-800">and many more...</p>
    </section>
  );
};

export default ClientsSection;
