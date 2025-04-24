"use client";

import React from "react";

const COLORS = ["black", "white", "gray-400", "blue-200"] as const;
const colorClassMap: Record<(typeof COLORS)[number], string> = {
  black: "bg-black",
  white: "bg-white",
  "gray-400": "bg-gray-400",
  "blue-200": "bg-blue-200",
};

// Base row length
const BASE_COUNT = 6;
// Card width options
const WIDTHS = [220, 260, 300] as const;

// Build a row of BASE_COUNT items, each with a color and width
function makeRow() {
  return Array.from({ length: BASE_COUNT }, (_, i) => ({
    color: COLORS[i % COLORS.length],
    width: WIDTHS[i % WIDTHS.length],
  }));
}

export default function Gallery() {
  const rows = [makeRow(), makeRow(), makeRow()];

  // Gap between cards
  const gap = 16;
  // For each row we compute halfOffset per card widths
  const halfOffsets = rows.map((row) => {
    const firstWidth = row[0].width;
    return (firstWidth + gap) / 2;
  });

  return (
    <section className="w-screen bg-gray-900 text-white overflow-hidden py-16">
      {/* Header */}
      <div className="w-screen text-center mb-12">
        <h2 className="text-3xl font-bold">Our Gallery</h2>
        <p className="mt-2 text-gray-300">
          A glimpse into our global workforce and operations.
        </p>
      </div>

      {/* Rows */}
      <div className="space-y-8">
        {rows.map((row, idx) => (
          <div
            key={idx}
            className="flex space-x-4"
            style={{
              width: "100vw",
              transform:
                idx % 2 === 0
                  ? `translateX(-${halfOffsets[idx]}px)`
                  : `translateX(${halfOffsets[idx]}px)`,
            }}
          >
            {row.map(({ color, width }, i) => (
              <div
                key={i}
                className={`${colorClassMap[color]} h-[175px] rounded-lg flex-shrink-0`}
                style={{ width: `${width}px` }}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
