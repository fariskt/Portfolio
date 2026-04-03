"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ParallaxText({
  children,
  speed = 0.08,
}: {
  children: React.ReactNode;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      yPercent: speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        scrub: true,
      },
    });
  }, [speed]);

  return (
    <div
      ref={ref}
      className="pointer-events-none z-0"
    >
      {children}
    </div>
  );
}
