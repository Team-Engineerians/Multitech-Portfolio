import React from "react";

export default function RolesWeSpecializeIn() {
  return (
    <section className="w-screen min-h-screen bg-[#EFF0F1] flex items-center justify-center py-6 sm:py-8 md:py-12 -mx-4">
      {/* Mobile layout: block on mobile, hidden on sm+ */}
      <div className="block sm:hidden w-full mx-auto py-4">
        <div className="grid grid-cols-2 grid-rows-6 gap-0 w-full px-4 border border-gray-300">
          {/* 1. Industries We Serve (spans 2 cols, row 1) */}
          <div className="bg-white p-4 flex flex-col justify-center items-start col-span-2 row-span-1">
            <h2 className="text-lg font-semibold text-black mb-2">Industries We Serve</h2>
            <ul className="text-sm text-black list-disc pl-5 space-y-1">
              <li>Construction & Civil</li>
              <li>Mechanical & MEP</li>
            </ul>
          </div>
          {/* 2. Logistics & Drivers (blue, left, row 2) */}
          <div className="bg-[#4a6173] p-4 flex flex-col justify-center items-start col-span-1 row-span-1 h-[150px]">
            <ul className="text-sm text-white list-disc pl-5 space-y-1">
              <li>Logistics & Drivers</li>
              <li>Industrial Support</li>
            </ul>
          </div>
          {/* 3. Lathe Worker image (right, row 2) */}
          <div className="col-span-1 row-span-1 h-[150px]">
            <img src="/lathe_worker.png" alt="Lathe Worker" className="w-full h-full object-cover" />
          </div>
          {/* 4. Painting Wall image (left, row 3) */}
          <div className="col-span-1 row-span-1 h-[150px]">
            <img src="/painting_wall.png" alt="Painting Wall" className="w-full h-full object-cover" />
          </div>
          {/* 5. Skilled & Semi-Skilled Workers (tan, right, row 3) */}
          <div className="bg-[#a89d8d] p-4 flex flex-col justify-center items-start col-span-1 row-span-1 h-[150px]">
            <ul className="text-sm text-white list-disc pl-5 space-y-1">
              <li>Skilled & Semi-Skilled Workers</li>
            </ul>
          </div>
          {/* 6. Scaffolding image (left, row 4) */}
          <div className="col-span-1 row-span-1 h-[150px]">
            <img src="/scaffolding.png" alt="Scaffolding" className="w-full h-full object-cover" />
          </div>
          {/* 7. Interior & Fitout (light blue, right, row 4) */}
          <div className="bg-[#a6bbc7] p-4 flex flex-col justify-center items-start col-span-1 row-span-1 h-[150px]">
            <ul className="text-sm text-black list-disc pl-5 space-y-1">
              <li>Interior & Fitout</li>
              <li>Healthcare & Nursing</li>
            </ul>
          </div>
          {/* 8. Hospitality (red, left, row 5) */}
          <div className="bg-[#d05c4e] p-4 flex flex-col justify-center items-start col-span-1 row-span-1 h-[150px]">
            <ul className="text-sm text-white list-disc pl-5 space-y-1">
              <li>Hospitality</li>
              <li>Facility Management</li>
            </ul>
          </div>
          {/* 9. Construction Workers image (right, spans rows 5-6) */}
          <div className="col-start-2 row-span-2 flex flex-col h-full">
            <img src="/construction_workers.png" alt="Construction Workers" className="w-full h-full min-h-[300px] object-cover" />
          </div>
          {/* 10. Hospitality image (left, row 6) */}
          <div className="col-span-1 row-span-1 h-[150px]">
            <img src="/hospitality.png" alt="Hospitality" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      {/* Tablet/Desktop layout: hidden on mobile, block on sm+ */}
      <div
        className="hidden sm:grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-6 lg:grid-rows-3 overflow-hidden"
        style={{ width: "100vw", maxWidth: "1264px", height: "auto", minHeight: '600px', gap: 0 }}
      >
        {/* Row 1 */}
        <div className="bg-white p-4 sm:p-8 flex flex-col justify-center items-start col-span-1 md:col-span-2 lg:col-span-2 row-span-1 lg:row-span-1">
          <h2 className="text-xl sm:text-2xl lg:text-2xl font-semibold text-black mb-2 sm:mb-4">Industries We Serve</h2>
          <ul className="text-sm sm:text-base lg:text-base text-black list-disc pl-5 space-y-1 sm:space-y-2">
            <li>Construction & Civil</li>
            <li>Mechanical & MEP</li>
          </ul>
        </div>
        <div className="col-span-1 row-span-1">
          <img src="/scaffolding.png" alt="Scaffolding" className="w-full h-[120px] sm:h-[180px] lg:h-full object-cover" />
        </div>
        <div className="bg-[#a6bbc7] p-4 sm:p-8 flex flex-col justify-center items-start col-span-1 row-span-1">
          <ul className="text-sm sm:text-base lg:text-base text-black list-disc pl-5 space-y-1 sm:space-y-2">
            <li>Interior & Fitout</li>
            <li>Healthcare & Nursing</li>
          </ul>
        </div>
        {/* Row 2 */}
        <div className="bg-[#4a6173] p-4 sm:p-8 flex flex-col justify-center items-start col-span-1 row-span-1">
          <ul className="text-sm sm:text-base lg:text-base text-white list-disc pl-5 space-y-1 sm:space-y-2">
            <li>Logistics & Drivers</li>
            <li>Industrial Support</li>
          </ul>
        </div>
        <div className="col-span-1 row-span-1">
          <img src="/lathe_worker.png" alt="Lathe Worker" className="w-full h-[120px] sm:h-[180px] lg:h-full object-cover" />
        </div>
        <div className="bg-[#d05c4e] p-4 sm:p-8 flex flex-col justify-center items-start col-span-1 row-span-1">
          <ul className="text-sm sm:text-base lg:text-base text-white list-disc pl-5 space-y-1 sm:space-y-2">
            <li>Hospitality</li>
            <li>Facility Management</li>
          </ul>
        </div>
        <div className="col-span-1 row-span-2">
          <img src="/construction_workers.png" alt="Construction Workers" className="w-full h-[120px] sm:h-[180px] lg:h-full object-cover" />
        </div>
        {/* Row 3 */}
        <div className="col-span-1 row-span-1">
          <img src="/painting_wall.png" alt="Painting Wall" className="w-full h-[120px] sm:h-[180px] lg:h-full object-cover" />
        </div>
        <div className="bg-[#a89d8d] p-4 sm:p-8 flex flex-col justify-center items-start col-span-1 row-span-1">
          <ul className="text-sm sm:text-base lg:text-base text-white list-disc pl-5 space-y-1 sm:space-y-2">
            <li>Skilled & Semi-Skilled Workers</li>
          </ul>
        </div>
        <div className="col-span-1 row-span-1">
          <img src="/hospitality.png" alt="Hospitality" className="w-full h-[120px] sm:h-[180px] lg:h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
