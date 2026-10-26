"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import WaveText from "./WaveText";

export default function Hero() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const words = textRef.current.innerText.split(" ");
      textRef.current.innerHTML = words
        .map(
          (word) =>
            `<span class="inline-block overflow-hidden"><span class="block translate-y-full">${word}&nbsp;</span></span>`
        )
        .join("");

      gsap.to(textRef.current.querySelectorAll("span > span"), {
        y: "0%",
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.05,
      });
    }
  }, []);

  return (
    <section className="relative border-b border-b-gray-800 md:min-h-screen text-white">
      <div className="md:h-screen h-[75vh] flex flex-col justify-between">
        <div className="grid grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
          <div className="flex flex-col justify-start">
            <div className="mb-6 h-px w-full bg-white/10" />
            <span className="mb-6 inline-flex items-center gap-2 text-xs tracking-[0.35em] text-white/60">
              <span className="h-2 w-2 rounded-full bg-lime-400" />
              FULL STACK DEVELOPER
            </span>
            <h1 ref={textRef} className="heading-hero">
              BUILDING<br />DIGITAL<br />EXPERIENCES.
            </h1>
          </div>
        </div>
        <WaveText className="heading-hero-secondary ml-5" text="MUHAMMED FARIS" />
      </div>
    </section>
  );
}
