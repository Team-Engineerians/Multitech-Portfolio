import Image from "next/image";
import React from "react";

const GlobeBackground = () => {
  return (
    <div className="top-100 w-full h-[620px] mt-8 flex justify-center z-0 pointer-events-none">
      <Image
        src="/globe.png"
        alt="Globe"
        width={1100}
        height={600}
        className="object-fill opacity-90"
      />
    </div>
  );
};

export default GlobeBackground;