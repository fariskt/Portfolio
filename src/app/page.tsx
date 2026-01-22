"use client";

import React, { useEffect, useState } from "react";
import HeroSection from "../components/layouts/HeroSection";
import AboutSection from "../components/layouts/AboutSection";
import WorkSection from "../components/layouts/WorkSection";
import ScrollWheel from "../components/ui/ScrollWheel";
import LenisProvider from "../lib/useLenisGsap";
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [open, setOpen] = useState(false);

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
    <>
      <LenisProvider />
      <div className="w-full h-full">
        <Cursor />
        {!open && <ScrollWheel />}
        <HeroSection open={open} setOpen={setOpen} />
        <AboutSection />
        <WorkSection />
      </div>
    </>
  );
};

export default HomePage;
