import React from "react";

const clients = [
  "/clients/afaq.png",
  "/clients/sumistarr.png",
  "/clients/alsharafi.png",
  "/clients/lifco.png",
  "/clients/zenith.png",
  "/clients/dsi.png",
  "/clients/jd.png",
  "/clients/node.png",
  "/clients/bns.png",
  "/clients/mantrac.png",
  "/clients/riviera.png",
  "/clients/cbc.png",
  "/clients/arabiccalligraphy.png",
  "/clients/futuregulf.png",
  "/clients/rcc.png",
  "/clients/eta.png",
  "/clients/arabtec.png",
  "/clients/alashfaq.png",
  "/clients/rshk.png",
  "/clients/falconfire.png",
];

const ClientsSection: React.FC = () => {
  return (
    <section className="h-[774px] bg-white flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl font-semibold mb-6">Our Clients</h2>

      {/* Logo grid container */}
      <div className="w-[764px] h-[430px] overflow-hidden">
        <div className="grid grid-cols-5 gap-4">
          {clients.map((logo, index) => (
            <div
              key={index}
              className="w-[100px] h-[100px] flex items-center justify-center border border-gray-200 mx-auto"
            >
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="object-contain max-w-[100px] max-h-[100px]"
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 text-gray-500">and many more...</p>
    </section>
  );
};

export default ClientsSection;
