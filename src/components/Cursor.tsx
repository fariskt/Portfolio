"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const move = (e: MouseEvent) => {
      if (!cursor.current) return;
      cursor.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursor}
      className=" hidden md:block
      fixed
        pointer-events-none
         left-0 top-0 z-50
        h-4 w-4
        -translate-x-1/2 -translate-y-1/2
        rounded-full
        bg-lime-400
        will-change-transform
      "
    />
  );
}
