import { useEffect, useRef, useState } from "react";

export default function ScrollWheel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const thumbRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef<boolean>(false);

  const updateThumb = () => {
    if (!trackRef.current || !thumbRef.current) return;

    const scrollTop = window.scrollY;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    const trackHeight =
      trackRef.current.clientHeight - thumbRef.current.clientHeight;

    const progress = scrollTop / maxScroll;
    thumbRef.current.style.top = `${progress * trackHeight}px`;
  };

  useEffect(() => {
    updateThumb();
    window.addEventListener("scroll", updateThumb);
    return () => window.removeEventListener("scroll", updateThumb);
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging.current) return;
      if (!trackRef.current || !thumbRef.current) return;

      const rect = trackRef.current.getBoundingClientRect();
      let y = e.clientY - rect.top;

      const max = trackRef.current.clientHeight - thumbRef.current.clientHeight;

      y = Math.max(0, Math.min(y, max));

      const scrollRatio = y / max;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      window.scrollTo({
        top: scrollRatio * maxScroll,
        behavior: "smooth",
      });
    };

    const stopDrag = (): void => {
      dragging.current = false;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", stopDrag);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDrag);
    };
  }, []);

  return (
    <div className="scroll-wheel">
      <div ref={trackRef} className="scroll-track">
        <div
          ref={thumbRef}
          className="scroll-thumb"
          onMouseDown={() => (dragging.current = true)}
        />
      </div>
    </div>
  );
}
