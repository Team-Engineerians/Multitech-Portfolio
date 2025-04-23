// import React from "react";

// export default function WhatWeDo() {
//   return (
//     <div className="bg-[#E1ECF7] w-screen h-[907px] py-16 px-4 font-sans text-gray-800 flex justify-center">
//       <div className="max-w-[1200px] w-full mx-auto">
//         <h2 className="text-3xl md:text-4xl mt-10 font-bold text-center mb-2 text-gray-900">
//           What we do
//         </h2>
//         <p className="text-center text-gray-600 mb-12">
//           Comprehensive Manpower & Support Services
//         </p>

//         {/* Row 1 */}
//         <div className="w-[1191px] flex gap-6">
//           {/* Recruitment Card */}
//           <div className="relative rounded-2xl overflow-hidden shadow-md w-[356px] h-[285px]">
//             <img
//               src="https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=600&q=80"
//               alt="Recruitment Background"
//               className="absolute inset-0 w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-[#183189]/90 p-6 flex flex-col justify-end">
//               <h3 className="text-lg font-semibold text-white mb-2">
//                 Recruitment for Overseas Jobs
//               </h3>
//               <p className="text-white">
//                 Connecting skilled workers with reputable employers globally.
//               </p>
//             </div>
//           </div>

//           {/* Visa Endorsement Card */}
//           <div className="relative rounded-2xl overflow-hidden shadow-md w-[353px] h-[285px]">
//             <img
//               src="https://images.unsplash.com/photo-1581093588401-22d8a1a7700b?auto=format&fit=crop&w=600&q=80"
//               alt="Visa Background"
//               className="absolute inset-0 w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-[#0D1A44]/90 p-6 flex flex-col justify-end">
//               <h3 className="text-lg font-semibold text-white mb-2">
//                 Visa Endorsement (Visit & Employment)
//               </h3>
//               <p className="text-white">
//                 Simplifying complex visa processes for work or travel.
//               </p>
//             </div>
//           </div>

//           {/* Emigration Assistance Card */}
//           <div className="relative rounded-2xl overflow-hidden shadow-md bg-white p-6 flex flex-col justify-center w-[450px] h-[285px]">
//             <div className="absolute right-[-20px] top-[-20px] w-[300px] h-[300px] border-2 border-gray-300 rounded-full opacity-30"></div>
//             <div className="absolute right-0 top-0 w-[200px] h-[200px] border-2 border-gray-300 rounded-full opacity-30"></div>
//             <div className="relative z-10">
//               <h3 className="text-lg font-semibold mb-2">
//                 Emigration Assistance
//               </h3>
//               <p className="text-gray-600">
//                 Handling all legal, document, and clearance procedures.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Row 2 */}
//         <div className="w-[1191px] flex gap-6 mt-6">
//           {/* Document Attestation */}
//           <div className="relative rounded-2xl overflow-hidden shadow-md bg-[#0B1A35] text-white p-6 flex flex-col justify-center w-[278px] h-[346px]">
//             <div className="flex items-center mb-4">
//               <div className="w-2 h-2 bg-orange-500 mr-2"></div>
//               <h3 className="text-lg font-semibold">Document Attestation</h3>
//             </div>
//             <p className="text-sm">
//               Fast and certified attestation of educational, personal, and
//               professional documents.
//             </p>
//           </div>

//           {/* Technical Services */}
//           <div className="relative rounded-2xl overflow-hidden shadow-md bg-white p-6 flex flex-col justify-center w-[603px] h-[346px] text-center">
//             <h3 className="text-lg font-semibold mb-2">Technical Services</h3>
//             <p className="text-sm text-gray-600 mb-4">
//               Comprehensive support across:
//             </p>
//             <div className="flex flex-wrap justify-center gap-2">
//               {[
//                 "Interior Renovation",
//                 "AC Maintenance",
//                 "MEP & HVAC",
//                 "Pest & Hygiene Control",
//                 "Civil Works",
//                 "Plumbing Works",
//                 "and more...",
//               ].map((service) => (
//                 <span
//                   key={service}
//                   className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap"
//                 >
//                   {service}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Air Ticketing */}
//           <div className="relative rounded-2xl overflow-hidden shadow-md h-[346px] w-[278px]">
//             <img
//               src="https://images.unsplash.com/photo-1583500179095-1e4c38808e1e?auto=format&fit=crop&w=600&q=80"
//               alt="Airplane"
//               className="absolute inset-0 w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-6 flex flex-col justify-end">
//               <h3 className="text-lg font-semibold text-white mb-2">
//                 Air Ticketing
//               </h3>
//               <p className="text-white text-sm">
//                 Booking flights with care and cost-efficiency.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function WhatWeDo() {
  return (
    <div className="bg-[#E1ECF7] w-screen h-[907px] py-16 px-4 font-sans text-gray-800 flex justify-center">
      <div className="max-w-[1200px] w-full mx-auto">
        <h2 className="text-3xl md:text-4xl mt-10 font-bold text-center mb-2 text-gray-900">
          What we do
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Comprehensive Manpower & Support Services
        </p>

        {/* Row 1 */}
        <div className="w-[1191px] flex gap-6">
          <div className="relative rounded-2xl overflow-hidden shadow-md w-[356px] h-[285px]">
            <img
              src="pic1.png"
              alt="Service 1"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-md w-[353px] h-[285px]">
            <img
              src="pic2.png"
              alt="Service 2"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-md w-[450px] h-[285px]">
            <img
              src="pic3.png"
              alt="Service 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="w-[1191px] flex gap-6 mt-6">
          <div className="relative rounded-2xl overflow-hidden shadow-md w-[278px] h-[346px]">
            <img
              src="pic4.png"
              alt="Service 4"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-md w-[603px] h-[346px]">
            <img
              src="pic5.png"
              alt="Service 5"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-md w-[278px] h-[346px]">
            <img
              src="pic6.png"
              alt="Service 6"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
