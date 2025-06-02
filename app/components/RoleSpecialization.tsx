import React from "react";

export default function RolesWeSpecializeIn() {
  return (
    <section className="w-full min-h-screen bg-[#EFF0F1] flex items-center justify-center py-6 sm:py-8 md:py-12">
      <div
        className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-6 lg:grid-rows-3 overflow-hidden"
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
