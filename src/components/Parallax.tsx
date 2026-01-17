"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Parallax({
  children,
  speed = 0.4,
}: {
  children: React.ReactNode;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.to(el, {
      yPercent: speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        scrub: true,
      },
    });
  }, [speed]);

  return <div ref={ref}>{children}</div>;
}
