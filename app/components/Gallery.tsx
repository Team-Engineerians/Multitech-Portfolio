"use client";

import React from "react";

const COLORS = ["black", "white", "gray-400", "blue-200"] as const;
const colorClassMap: Record<(typeof COLORS)[number], string> = {
  black: "bg-black",
  white: "bg-white",
  "gray-400": "bg-gray-400",
  "blue-200": "bg-blue-200",
};

const BASE_COUNT = 6;
const WIDTHS = [220, 260, 300] as const;

function makeRow() {
  return Array.from({ length: BASE_COUNT }, (_, i) => ({
    color: COLORS[i % COLORS.length],
    width: WIDTHS[i % WIDTHS.length],
  }));
}

export default function Gallery() {
  const rows = [makeRow(), makeRow(), makeRow()];
  const gap = 16;

  return (
    <section className="w-screen bg-gray-900 text-white overflow-hidden py-16">
      {/* Header */}
      <div className="w-screen text-center mb-12">
        <h2 className="text-3xl font-bold">Our Gallery</h2>
        <p className="mt-2 text-gray-300">
          A glimpse into our global workforce and operations.
        </p>
      </div>

      {/* Rows with infinite scroll */}
      <div className="space-y-8">
        {rows.map((row, idx) => {
          const isEven = idx % 2 === 0;
          const direction = isEven ? "scroll-left" : "scroll-right";

          return (
            <div key={idx} className="overflow-hidden">
              <div
                className={`flex gap-4 animate-${direction}`}
                style={{
                  width: "max-content",
                  animationDuration: "30s",
                  animationTimingFunction: "linear",
                  animationIterationCount: "infinite",
                }}
              >
                {/* Repeat items twice for smooth looping */}
                {[...row, ...row].map(({ color, width }, i) => (
                  <div
                    key={i}
                    className={`${colorClassMap[color]} h-[175px] rounded-lg flex-shrink-0`}
                    style={{ width: `${width}px` }}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-scroll-left {
          animation-name: scroll-left;
        }

        .animate-scroll-right {
          animation-name: scroll-right;
        }
      `}</style>
    </section>
  );
}
