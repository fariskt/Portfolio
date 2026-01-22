"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LiquidText({ text }: { text: string }) {
  const textRef = useRef<HTMLHeadingElement>(null);
  const filterRef = useRef<SVGFEComponentTransferElement | null>(null);

  useEffect(() => {
    if (!filterRef.current) return;

    const turbulence = filterRef.current;

    const tl = gsap.timeline({ paused: true });

    tl.to(turbulence, {
      attr: { baseFrequency: 0.02 },
      duration: 0.6,
      ease: "power2.out",
    }).to(
      turbulence,
      {
        attr: { baseFrequency: 0.01 },
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      },
      "-=0.2"
    );

    const el = textRef.current;
    el?.addEventListener("mouseenter", () => tl.play());
    el?.addEventListener("mouseleave", () => tl.pause(0));

    return () => {
      el?.removeEventListener("mouseenter", () => tl.play());
      el?.removeEventListener("mouseleave", () => tl.pause(0));
    };
  }, []);

  return (
    <>
      {/* SVG Filter */}
      <svg width="0" height="0">
        <filter id="liquid">
          <feTurbulence
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ref={filterRef as any}
            type="turbulence"
            baseFrequency="0"
            numOctaves="2"
            result="turbulence"
          />
          <feDisplacementMap
            in="SourceGraphic"
            scale="20"
          />
        </filter>
      </svg>

      {/* Text */}
      <h1
        ref={textRef}
        className="heading-hero cursor-pointer"
        style={{ filter: "url(#liquid)" }}
      >
        {text}
      </h1>
    </>
  );
}
