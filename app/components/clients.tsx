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
    <section className="w-screen bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
            Our Clients
          </h2>
        </div>

        {/* Logo grid container */}
        <div className="w-full max-w-[764px] mx-auto overflow-hidden px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
            {clients.map((logo, index) => (
              <div
                key={index}
                className="aspect-square flex items-center justify-center p-2 md:p-3 lg:p-4 bg-white rounded-lg transition-transform duration-300 hover:scale-105"
              >
                <div className="relative w-full h-full">
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="object-contain w-full h-full"
                    loading="lazy"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      width: "auto",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer text */}
        <p className="text-center mt-8 md:mt-10 lg:mt-12 text-base md:text-lg text-gray-800">
          and many more...
        </p>
      </div>
    </section>
  );
};

export default ClientsSection;
