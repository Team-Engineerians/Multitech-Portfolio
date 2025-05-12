import React from "react";

const categories = [
  {
    title: "Construction",
    imgRoles: [
      { label: "Masons", img: "/masons.png" },
      { label: "Steel Fixers", img: "/steelfixer.png" },
      { label: "Shuttering Carpenters", img: "/Shuttering_carpenter.png" },
      { label: "Painters", img: "/Painter.png" },
    ],
    textRoles: [
      "Masons",
      "Steel Fixers",
      "Shuttering Carpenters",
      "Painters",
      "+ more",
    ],
  },
  {
    title: "Mechanical",
    imgRoles: [
      { label: "Mechanical Fitters", img: "/mechanical_fitter.png" },
      { label: "Machine Operators", img: "/machine_operators.png" },
      { label: "Industrial Welders", img: "/Industrial_welders.png" },
      { label: "Fabricators", img: "/Fabricators.png" },
    ],
    textRoles: [
      "Mechanical Fitters",
      "Machine Operators",
      "Industrial Welders",
      "Fabricators",
      "+ more",
    ],
  },
  {
    title: "MEP Technician",
    imgRoles: [
      { label: "HVAC Technicians", img: "/HVAC_Technicians.png" },
      { label: "Electricians", img: "/Electricians.png" },
      { label: "Plumbers", img: "/Plumbers.png" },
      { label: "Pipe Fitters", img: "/Pipe_fitters.png" },
    ],
    textRoles: [
      "HVAC Technicians",
      "Electricians",
      "Plumbers",
      "Pipe Fitters",
      "+ more",
    ],
  },
  {
    title: "Hospitality",
    imgRoles: [
      { label: "Cooks", img: "/Cooks.png" },
      { label: "Waiters", img: "/Waiters.png" },
      { label: "Housekeeping", img: "/House_keeping.png" },
      { label: "Delivery Staff", img: "/Delivery_staff.png" },
    ],
    textRoles: ["Cooks", "Waiters", "Housekeeping", "Delivery Staff", "+ more"],
  },
  {
    title: "Interior and Decor",
    imgRoles: [
      { label: "Carpenters", img: "/Carpenter.png" },
      { label: "Gypsum Carpenters", img: "/Gypsm_carpenter.png" },
      { label: "Painters & Polishers", img: "/Painter_polisher.png" },
      { label: "Tiles & Marble Fixer", img: "/Tile_marble_fixer.png" },
    ],
    textRoles: [
      "Carpenters",
      "Gypsum Carpenters",
      "Painters & Polishers",
      "Tiles & Marble Fixer",
      "+ more",
    ],
  },
];

export default function RolesWeSpecializeIn() {
  return (
    <div className="px-4 sm:px-6 md:px-8 
                    py-8 sm:py-12 md:py-16 
                    font-sans text-gray-800 
                    bg-white">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl 
                      font-bold 
                      mb-2 sm:mb-3">
          Roles We Specialize In
        </h2>
        <p className="text-gray-600 
                      text-sm sm:text-base 
                      max-w-[600px] 
                      mx-auto">
          Skilled, Semi-Skilled, and Unskilled workforce for various sectors.
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-10 sm:space-y-12 md:space-y-16">
        {categories.map((cat) => (
          <div key={cat.title} 
               className="relative max-w-[1396px] mx-auto">
            {/* Category Title Pill */}
            <div className="mb-6 sm:mb-8">
              <span className="bg-gray-200 text-gray-600 
                             hover:bg-orange-400 hover:text-white 
                             text-sm 
                             px-4 py-1.5 
                             rounded-[10px]
                             inline-block">
                {cat.title}
              </span>
            </div>

            {/* Mobile View (1-2 columns) */}
            <div className="block sm:hidden">
              <div className="grid grid-cols-2 gap-3">
                {cat.imgRoles.map((r) => (
                  <div
                    key={r.label}
                    className="relative aspect-[4/3] 
                             rounded-[10px] 
                             overflow-hidden 
                             shadow-md"
                  >
                    <img
                      src={r.img}
                      alt={r.label}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 
                                  bg-gradient-to-t from-black/70 via-black/30 to-transparent 
                                  flex items-end 
                                  p-2">
                      <span className="text-white 
                                     text-xs 
                                     font-medium 
                                     line-clamp-2 
                                     text-center 
                                     w-full">
                        {r.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <button className="bg-orange-400 
                                 hover:bg-orange-500 
                                 text-white 
                                 text-sm 
                                 px-6 py-2 
                                 rounded-full 
                                 transition-colors 
                                 shadow-md">
                  More {cat.title} Roles
                </button>
              </div>
            </div>

            {/* Tablet View (2-3 columns) */}
            <div className="hidden sm:block md:hidden">
              <div className="grid grid-cols-3 gap-4">
                {cat.imgRoles.map((r) => (
                  <div
                    key={r.label}
                    className="relative aspect-[4/3] 
                             rounded-[10px] 
                             overflow-hidden 
                             shadow-md 
                             transform transition duration-300 
                             hover:scale-105"
                  >
                    <img
                      src={r.img}
                      alt={r.label}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 
                                  bg-gradient-to-t from-black/70 via-black/30 to-transparent 
                                  flex items-end 
                                  p-3">
                      <span className="text-white 
                                     text-sm 
                                     font-medium 
                                     text-center 
                                     w-full">
                        {r.label}
                      </span>
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-center text-gray-400 text-sm">
                  + more…
                </div>
              </div>
            </div>

            {/* Desktop View (4 columns) */}
            <div className="hidden md:block">
              <div className="grid grid-cols-4 gap-6">
                {cat.imgRoles.map((r) => (
                  <div
                    key={r.label}
                    className="relative aspect-[4/3] 
                             rounded-[10px] 
                             overflow-hidden 
                             shadow-md 
                             transform transition duration-300 
                             hover:scale-105"
                  >
                    <img
                      src={r.img}
                      alt={r.label}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 
                                  bg-gradient-to-t from-black/70 via-black/30 to-transparent 
                                  flex items-end 
                                  p-3">
                      <span className="text-white 
                                     text-sm 
                                     font-medium 
                                     text-center 
                                     w-full">
                        {r.label}
                      </span>
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-center text-gray-400 text-sm">
                  + more…
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
