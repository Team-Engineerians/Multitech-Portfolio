"use client";

import React from "react";

const COLORS = ["black", "white", "gray-400", "blue-200"] as const;
const colorClassMap: Record<(typeof COLORS)[number], string> = {
  black: "bg-black",
  white: "bg-white",
  "gray-400": "bg-gray-400",
  "blue-200": "bg-blue-200",
};

// Responsive widths for different screen sizes
const WIDTHS = {
  desktop: [220, 260, 300],
  tablet: [180, 220, 260],
  mobile: [140, 180, 220],
} as const;

function makeRow(screenSize: keyof typeof WIDTHS) {
  const widths = WIDTHS[screenSize];
  return Array.from({ length: 6 }, (_, i) => ({
    color: COLORS[i % COLORS.length],
    width: widths[i % widths.length],
  }));
}

export default function Gallery() {
  return (
    <section className="w-full bg-gray-900 text-white overflow-hidden py-8 md:py-12 lg:py-16">
      {/* Header */}
      <div className="w-full text-center mb-8 md:mb-10 lg:mb-12 px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Our Gallery</h2>
        <p className="mt-2 text-sm md:text-base text-gray-300">
          A glimpse into our global workforce and operations.
        </p>
      </div>

      {/* Rows with infinite scroll */}
      <div className="space-y-4 md:space-y-6 lg:space-y-8">
        {[0, 1, 2].map((idx) => {
          const isEven = idx % 2 === 0;
          
          return (
            <div key={idx} className="overflow-hidden">
              <div
                className={`flex gap-4 ${isEven ? 'animate-scroll-left' : 'animate-scroll-right'}`}
                style={{
                  width: "max-content",
                }}
              >
                {/* Desktop row */}
                <div className="hidden lg:flex gap-4">
                  {[...makeRow('desktop'), ...makeRow('desktop')].map(({ color, width }, i) => (
                    <div
                      key={`desktop-${i}`}
                      className={`${colorClassMap[color]} h-[175px] rounded-lg flex-shrink-0 transition-all duration-300`}
                      style={{ width: `${width}px` }}
                    />
                  ))}
                </div>

                {/* Tablet row */}
                <div className="hidden md:flex lg:hidden gap-4">
                  {[...makeRow('tablet'), ...makeRow('tablet')].map(({ color, width }, i) => (
                    <div
                      key={`tablet-${i}`}
                      className={`${colorClassMap[color]} h-[150px] rounded-lg flex-shrink-0 transition-all duration-300`}
                      style={{ width: `${width}px` }}
                    />
                  ))}
                </div>

                {/* Mobile row */}
                <div className="flex md:hidden gap-3">
                  {[...makeRow('mobile'), ...makeRow('mobile')].map(({ color, width }, i) => (
                    <div
                      key={`mobile-${i}`}
                      className={`${colorClassMap[color]} h-[120px] rounded-lg flex-shrink-0 transition-all duration-300`}
                      style={{ width: `${width}px` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
