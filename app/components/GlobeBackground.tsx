import Image from "next/image";
import React from "react";

const GlobeBackground = () => {
  return (
    <div className="top-100 
                    w-full 
                    h-[200px] sm:h-[350px] md:h-[450px] lg:h-[620px] 
                    mt-4 sm:mt-6 md:mt-8
                    flex justify-center 
                    z-0 
                    pointer-events-none">
      <Image
        src="/globe.png"
        alt="Globe"
        width={1100}
        height={600}
        className="object-contain sm:object-cover md:object-fill 
                   opacity-75 sm:opacity-80 md:opacity-90
                   w-[280px] sm:w-[600px] md:w-[800px] lg:w-[1100px]
                   h-auto"
        priority
      />
    </div>
  );
};

export default GlobeBackground;