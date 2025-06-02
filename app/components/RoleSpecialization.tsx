import React from "react";

export default function RolesWeSpecializeIn() {
  return (
    <section className="w-full min-h-screen bg-[#EFF0F1] flex items-center justify-center py-8">
      <div
        className="mx-auto grid grid-cols-4 grid-rows-3 overflow-hidden"
        style={{ width: "calc(100vw - 40px)", maxWidth: "1264px", height: "675px", gap: 0 }}
      >
        {/* Row 1: Industries We Serve (2 cols), Scaffolding Image (1 col), Interior & Fitout (1 col) */}
        <div className="bg-white p-8 flex flex-col justify-center items-start col-span-2 row-span-1">
          <h2 className="text-2xl font-bold mb-4">Industries We Serve</h2>
          <ul className="text-base text-black list-disc pl-5 space-y-2">
            <li>Construction & Civil</li>
            <li>Mechanical & MEP</li>
          </ul>
        </div>
        <div className="col-span-1 row-span-1">
          <img src="/scaffolding.png" alt="Scaffolding" className="w-full h-full object-cover" />
        </div>
        <div className="bg-[#a6bbc7] p-8 flex flex-col justify-center items-start col-span-1 row-span-1">
          <ul className="text-base text-black list-disc pl-5 space-y-2">
            <li>Interior & Fitout</li>
            <li>Healthcare & Nursing</li>
          </ul>
        </div>
        {/* Row 2: Logistics (1 col), Lathe Worker (1 col), Hospitality (1 col, 2 rows), Construction Workers (1 col, 2 rows) */}
        <div className="bg-[#4a6173] p-8 flex flex-col justify-center items-start col-span-1 row-span-1">
          <ul className="text-base text-white list-disc pl-5 space-y-2">
            <li>Logistics & Drivers</li>
            <li>Industrial Support</li>
          </ul>
        </div>
        <div className="col-span-1 row-span-1">
          <img src="/lathe_worker.png" alt="Lathe Worker" className="w-full h-full object-cover" />
        </div>
        <div className="bg-[#d05c4e] p-8 flex flex-col justify-center items-start col-span-1 row-span-1">
          <ul className="text-base text-white list-disc pl-5 space-y-2">
            <li>Hospitality</li>
            <li>Facility Management</li>
          </ul>
        </div>
        <div className="col-span-1 row-span-2">
          <img src="/construction_workers.png" alt="Construction Workers" className="w-full h-full object-cover" />
        </div>
        {/* Row 3: Painting Wall (1 col), Skilled & Semi-Skilled (1 col), Hospitality Image (1 col) */}
        <div className="col-span-1 row-span-1">
          <img src="/painting_wall.png" alt="Painting Wall" className="w-full h-full object-cover" />
        </div>
        <div className="bg-[#a89d8d] p-8 flex flex-col justify-center items-start col-span-1 row-span-1">
          <ul className="text-base text-white list-disc pl-5 space-y-2">
            <li>Skilled & Semi-Skilled Workers</li>
          </ul>
        </div>
        <div className="col-span-1 row-span-1">
          <img src="/hospitality.png" alt="Hospitality" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
