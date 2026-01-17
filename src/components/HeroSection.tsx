"use client";

import { useEffect, useRef } from "react";
import { splitReveal } from "../lib/splitText";
import Parallax from "./Parallax";
import ParallaxText from "./ParallaxText";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) splitReveal(titleRef.current);
  }, []);

  return (
    <section className="relative min-h-screen bg-black text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-2">
        <div className="flex flex-col justify-start">
          <div className="mb-6 h-px w-full bg-white/10" />

          <span className="mb-6 inline-flex items-center gap-2 text-xs tracking-[0.35em] text-white/60">
            <span className="h-2 w-2 rounded-full bg-lime-400" />
            SOFTWARE DEVELOPER
          </span>

          <h1
            ref={titleRef}
            className="font-display text-[clamp(3rem,7vw,6.5rem)] font-medium leading-[0.95] tracking-tight"
          >
            BUILDING
            <br />
            DIGITAL
            <br />
            EXPERIENCES.
          </h1>
        </div>
        <Parallax speed={0.25}>
          <div className="relative aspect-square w-full max-w-md justify-self-end overflow-hidden rounded-2xl bg-black">
            <video
              src="/hero-preview.webm"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
          </div>
        </Parallax>
      </div>
      <ParallaxText speed={0.06}>
        <div className="-bottom-[6vw] overflow-hidden">
          <h2 className="text-center font-display text-[20vw] font-medium leading-none tracking-tight text-white/5">
            Faris
          </h2>
        </div>
      </ParallaxText>
    </section>
  );
}
