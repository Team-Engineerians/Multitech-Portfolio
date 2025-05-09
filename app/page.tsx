"use client";

import { useEffect, useState } from "react";
import AboutUs from "./components/aboutUs/page";
import FloatingIcon from "./components/FloatingIcon";
import GlobeBackground from "./components/GlobeBackground";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import StatsCards from "./components/StatsCards";
import { ArrowUp } from "lucide-react";
import WhatWeDo from "./components/services";
import RoleSpecialization from "./components/RoleSpecialization";
import Gallery from "./components/Gallery";
import TheTeam from "./components/team";
import ClientsSection from "./components/clients";
import TestimonialsSection from "./components/testimonials";
import Footer from "./components/footer";
import ConnectUs from "./components/connectUs";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-start relative overflow-hidden px-4">
      <Navbar />
      <HeroSection />
      <GlobeBackground />
      <FloatingIcon />
      <StatsCards />

      <section id="about">
        <AboutUs />
      </section>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-orange-400 text-white p-3 rounded-full shadow-lg hover:bg-orange-500 transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
      
        <WhatWeDo />
        <RoleSpecialization />
        <Gallery />
        <TheTeam />
        <ClientsSection />
      <TestimonialsSection />
      <ConnectUs />
        <Footer />
    </div>
  );
}
