"use client";

import FloatingIcon from "./components/FloatingIcon";
import GlobeBackground from "./components/GlobeBackground";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import StatsCards from "./components/StatsCards";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-start relative overflow-hidden px-4 py-10">
      <Navbar />
      <HeroSection />
      <GlobeBackground />
      <FloatingIcon />
      <StatsCards />
    </div>
  );
}
