"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const move = (e: MouseEvent) => {
      if (!cursor.current) return;
      cursor.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursor}
      className="pointer-events-none fixed left-0 top-0 z-50 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 backdrop-blur-md"
    />
  );
}
