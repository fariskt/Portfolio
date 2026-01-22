"use client";

import { useEffect, useRef } from "react";
import { splitReveal } from "../../lib/splitText";
import ParallaxText from "../ParallaxText";
import Navbar from "../Navbar";

export default function HeroSection({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) splitReveal(titleRef.current);
  }, []);

  return (
    <>
      <Navbar open={open} setOpen={setOpen} />

      <section className="relative md:min-h-screen bg-gradient-primary-dark text-white">
        <div className="md:h-screen h-[75vh] flex flex-col justify-between">
          <div className="mx-auto grid grid-cols-1 items-start gap-10 px-6  md:grid-cols-2">
            <div className="flex flex-col justify-start">
              <div className="mb-6 h-px w-full bg-white/10" />

              <span className="mb-6 inline-flex items-center gap-2 text-xs tracking-[0.35em] text-white/60">
                <span className="h-2 w-2 rounded-full bg-lime-400" />
                SOFTWARE DEVELOPER
              </span>

              <h1 ref={titleRef} className="heading-hero">
                BUILDING
                <br />
                DIGITAL
                <br />
                EXPERIENCES.
              </h1>
            </div>
          </div>
          <ParallaxText speed={0.06}>
            <div>
              <h2 className="ml-2 md:ml-0 font-display text-[12vw] font-medium leading-none tracking-tight text-white">
                Muhammed Faris
              </h2>
            </div>
          </ParallaxText>
        </div>
      </section>
    </>
  );
}
