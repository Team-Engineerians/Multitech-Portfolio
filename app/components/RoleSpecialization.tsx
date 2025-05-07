import React from "react";

const categories = [
  {
    title: "Construction",
    imgRoles: [
      { label: "Masons", img: "/masons.png" },
      { label: "Steel Fixers", img: "/steelfixer.png" },
      {
        label: "Shuttering Carpenters",
        img: "/Shuttering_carpenter.png",
      },
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
    <div className="px-4 py-16 font-sans text-gray-800 space-y-16">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Roles We Specialize In</h2>
        <p className="text-gray-600">
          Skilled, Semi-Skilled, and Unskilled workforce for various sectors.
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-12">
        {categories.map((cat) => (
          <div key={cat.title} className="relative max-w-[1396px] mx-auto">
            {/* Pill */}
            <span className="absolute -top-6 left-0 bg-gray-200 text-gray-600 text-sm px-4 py-1 rounded-[10px]">
              {cat.title}
            </span>

            {/* Cards (added pt-6 for spacing) */}
            <div className="flex justify-between gap-6 pt-6">
              {cat.imgRoles.map((r) => (
                <div
                  key={r.label}
                  className="relative w-[260px] h-[175px] rounded-[10px] overflow-hidden shadow-md"
                >
                  <img
                    src={r.img}
                    alt={r.label}
                    className="w-full h-full object-cover"
                  />
                  {/* Updated absolute positioning to center text at the bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-center p-2">
                    <span className="text-white text-sm">{r.label}</span>
                  </div>
                </div>
              ))}

              {/* + more */}
              <div className="flex items-center justify-center text-gray-400 text-sm">
                + more…
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom: Text Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="bg-white rounded-2xl p-6 shadow-sm flex flex-col"
          >
            <h4 className="font-semibold text-gray-800 mb-4">{cat.title}</h4>
            <div className="flex flex-wrap gap-2 mt-auto">
              {cat.textRoles.map((t, i) => (
                <span
                  key={i}
                  className={`text-sm px-3 py-1 rounded-full ${
                    t === "+ more"
                      ? "border border-gray-400 text-gray-500"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
