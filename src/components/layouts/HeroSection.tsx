"use client";

import { useEffect, useRef } from "react";
import { splitReveal } from "../../lib/splitText";
import Navbar from "../Navbar";
import WaveText from "../ui/WaveText";

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

      <section className="relative border-b border-b-gray-800 md:min-h-screen text-white">
        <div className="md:h-screen h-[75vh] flex flex-col justify-between">
          <div className="grid grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
            <div className="flex flex-col justify-start">
              <div className="mb-6 h-px w-full bg-white/10" />

              <span className="mb-6 inline-flex items-center gap-2 text-xs tracking-[0.35em] text-white/60">
                <span className="h-2 w-2 rounded-full bg-lime-400" />
                SOFTWARE DEVELOPER
              </span>

              <h1 ref={titleRef} className="heading-hero ">
                BUILDING
                <br />
                DIGITAL
                <br />
                EXPERIENCES.
              </h1>
            </div>

            {/* <div className="hero-3d-video-wrapper">
              <div className="hero-3d-video-object">
                <span className="hero-3d-video-glow" />

                <video
                  className="hero-3d-video"
                  src="/test-3d.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              {/* <small>testing</small> */}
            </div> */}
          </div>
          <WaveText
            className="heading-hero-secondary ml-5"
            text="MUHAMMED FARIS"
          />
        </div>
      </section>
    </>
  );
}
