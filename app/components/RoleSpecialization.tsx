import React, { useRef } from "react";

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
  {
    title: "Semi‑Skilled",
    tags: ["Packers", "Assemblers", "Warehouse Staff"],
  },
  {
    title: "Unskilled",
    tags: ["Helpers", "Labourers", "Site Assistants"],
  },
];

export default function RoleSpecialization() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (distance: number) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({
      left: distance,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full px-4 py-16 bg-white font-sans text-gray-800 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
        Roles We Specialize In
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Skilled, Semi-Skilled, and Unskilled workforce for various sectors.
      </p>

      {/* Carousel Container */}
      <div className="w-full relative max-w-5xl">
        <div
          ref={carouselRef}
          className="w-full overflow-x-auto overflow-y-visible carousel-scroll"
        >
          <div className="flex gap-6 px-6 min-w-max">
            {roles.map((category, idx) => (
              <div key={idx} className="group flex-shrink-0 overflow-visible">
                <div
                  className="w-[376px] h-[276px] bg-white border border-gray-200 rounded-2xl p-5 shadow-sm 
                             transition-all duration-300 transform group-hover:scale-105 
                             group-hover:border-blue-400 group-hover:bg-blue-50"
                >
                  <h3 className="text-md font-semibold mb-4 text-gray-800 group-hover:text-blue-600">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-sm text-gray-700 px-3 py-1 rounded-full 
                                   transition-all duration-300 group-hover:bg-blue-200 group-hover:text-blue-900"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Buttons */}
      <div className="mt-4 flex gap-4">
        <button
          onClick={() => scroll(-400)}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Prev
        </button>
        <button
          onClick={() => scroll(400)}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}
