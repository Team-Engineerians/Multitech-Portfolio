import React from "react";

const categories = [
  {
    title: "Construction",
    imgRoles: [
      { label: "Masons", img: "/images/masons.jpg" },
      { label: "Steel Fixers", img: "/images/steel-fixers.jpg" },
      {
        label: "Shuttering Carpenters",
        img: "/images/shuttering-carpenters.jpg",
      },
      { label: "Painters", img: "/images/painters.jpg" },
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
      { label: "Mechanical Fitters", img: "/images/mechanical-fitters.jpg" },
      { label: "Machine Operators", img: "/images/machine-operators.jpg" },
      { label: "Industrial Welders", img: "/images/industrial-welders.jpg" },
      { label: "Fabricators", img: "/images/fabricators.jpg" },
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
      { label: "HVAC Technicians", img: "/images/hvac-technicians.jpg" },
      { label: "Electricians", img: "/images/electricians.jpg" },
      { label: "Plumbers", img: "/images/plumbers.jpg" },
      { label: "Pipe Fitters", img: "/images/pipe-fitters.jpg" },
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
      { label: "Cooks", img: "/images/cooks.jpg" },
      { label: "Waiters", img: "/images/waiters.jpg" },
      { label: "Housekeeping", img: "/images/housekeeping.jpg" },
      { label: "Delivery Staff", img: "/images/delivery-staff.jpg" },
    ],
    textRoles: ["Cooks", "Waiters", "Housekeeping", "Delivery Staff", "+ more"],
  },
  {
    title: "Interior and Decor",
    imgRoles: [
      { label: "Carpenters", img: "/images/carpenters.jpg" },
      { label: "Gypsum Carpenters", img: "/images/gypsum-carpenters.jpg" },
      { label: "Painters & Polishers", img: "/images/painters-polishers.jpg" },
      { label: "Tiles & Marble Fixer", img: "/images/tiles-marble-fixer.jpg" },
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
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-2">
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