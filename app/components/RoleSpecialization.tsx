import React from "react";

const roles = [
  {
    title: "Skilled & Technical",
    tags: [
      "Electricians",
      "Plumbers",
      "HVAC",
      "Welders",
      "CNC Operators",
      "MEP Technicians",
    ],
  },
  {
    title: "Construction",
    tags: [
      "Masons",
      "Steel Fixers",
      "Shuttering Carpenters",
      "Painters",
      "Operators",
    ],
  },
  {
    title: "Facility & Maintenance",
    tags: ["Cleaners", "Janitors", "Pest Technicians", "HVAC Maintenance"],
  },
  {
    title: "Administration",
    tags: ["Drivers", "Receptionists"],
  },
];

export default function RoleSpecialization() {
  return (
    <div className="w-full px-4 py-16 bg-white font-sans text-gray-800 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
        Roles We Specialize In
      </h2>
      <p className="text-center text-gray-500 mb-10">
        Skilled, Semi-Skilled, and Unskilled workforce for various sectors.
      </p>

      <div className="w-full overflow-x-auto">
        <div className="flex gap-6 px-1 min-w-max">
          {roles.map((category, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[376px] h-[276px] bg-white border border-gray-200 rounded-2xl p-5 shadow-sm transition-all duration-300 group hover:border-blue-400 hover:bg-blue-50"
            >
              <h3 className="text-md font-semibold mb-4 text-gray-800 group-hover:text-blue-600">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-sm text-gray-700 px-3 py-1 rounded-full transition-all duration-300 group-hover:bg-blue-200 group-hover:text-blue-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
