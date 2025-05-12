import Image from "next/image";
import React from "react";

const FloatingIcon = () => {
  return (
    <div className="absolute 
                    right-16 xl:right-23
                    top-36 xl:top-40 
                    z-20
                    w-[180px] xl:w-[200px]
                    h-[180px] xl:h-[200px]
                    transition-all duration-300 ease-in-out
                    pointer-events-none
                    opacity-90 hover:opacity-100
                    animate-float
                    hidden lg:block">
      <Image 
        src="/floating.png" 
        alt="Floating Icon" 
        fill
        className="object-contain"
        priority
      />
    </div>
  );
};

// Add this animation to your globals.css file
const floatingAnimation = `
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
`;

export default FloatingIcon;