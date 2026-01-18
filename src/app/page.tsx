"use client";

import React, { useEffect } from "react";
import HeroSection from "../components/layouts/HeroSection";
import AboutSection from "../components/layouts/AboutSection";
import WorkSection from "../components/layouts/WorkSection";
import Providers from "../components/LenisProvider";
import ScrollWheel from "../components/ui/ScrollWheel";

const HomePage = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = (e: MouseEvent) => {
      document.documentElement.style.setProperty(
        "--mx",
        `${(e.clientX / window.innerWidth - 0.5) * 40}px`,
      );
      document.documentElement.style.setProperty(
        "--my",
        `${(e.clientY / window.innerHeight - 0.5) * 40}px`,
      );
    };

    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <Providers>
      <div className="w-full h-full">
        <ScrollWheel />
        <HeroSection />
        <AboutSection />
        <WorkSection />
      </div>
    </Providers>
  );
};

export default HomePage;
