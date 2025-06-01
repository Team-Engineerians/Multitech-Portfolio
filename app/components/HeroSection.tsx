import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const HeroSection = () => {
  const images = [
    "/hero1.png",
    "/hero2.png",
    "/hero3.png",
    "/hero4.png",
    "/hero5.png",
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Fade
        duration={5000}
        transitionDuration={1000}
        infinite
        arrows={false}
        pauseOnHover={false}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Skilled manpower for every need, across the globe.
                </h1>
                <p className="text-lg md:text-2xl">
                  Trusted overseas recruitment firm licensed by the Ministry of
                  External Affairs, India.
                </p>
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default HeroSection;
