// useLenisGSAP.ts
"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  lerp: 0.08,
  wheelMultiplier: 0.85,
  smoothWheel: true,
  syncTouch: true,
});

export function useLenisGSAP() {
  useEffect(() => {
    // GSAP ticker + lenis integration — most stable pattern 2024–2025
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // important: ×1000
    });

    // ← Almost always needed when using GSAP + Lenis
    gsap.ticker.lagSmoothing(0);

    // Force refresh after everything is mounted
    setTimeout(() => {
      ScrollTrigger.refresh(true);
    }, 500);

    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
