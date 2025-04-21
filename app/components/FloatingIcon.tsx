import Image from "next/image";
import React from "react";

const FloatingIcon = () => {
  return (
    <div className="absolute right-30 top-40 z-10">
      <Image src="/floating.png" alt="Floating Icon" width={200} height={200} />
    </div>
  );
};

export default FloatingIcon;