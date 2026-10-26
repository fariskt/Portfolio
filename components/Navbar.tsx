"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface NavbarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ open, setOpen }: NavbarProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (menuRef.current) {
      timelineRef.current = gsap.timeline({ paused: true });
      timelineRef.current
        .fromTo(
          menuRef.current,
          { x: "100%" },
          { x: "0%", duration: 0.8, ease: "power4.out" }
        )
        .from(
          ".nav-link",
          { y: 40, opacity: 0, stagger: 0.1, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        );
    }
  }, []);

  const toggle = () => {
    if (timelineRef.current) {
      if (open) {
        timelineRef.current.reverse();
      } else {
        timelineRef.current.play();
      }
      setOpen(!open);
    }
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#contact" },
    { name: "Experience", href: "#experience" },
    { name: "Work", href: "#work" },
    { name: "Contact Me", href: "#contact" },
  ];

  return (
    <>
      <nav className="absolute top-0 right-0 z-50 items-center justify-between px-10 py-6">
        <button
          onClick={toggle}
          aria-label="Toggle navigation"
          className="relative z-50 flex md:h-10 md:w-10 h-7 w-7 flex-col justify-between"
        >
          <span
            className={`block h-[2px] w-full bg-white transition ${
              open ? "rotate-45 translate-y-[9px]" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-full bg-white transition ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-full bg-white transition ${
              open ? "-rotate-45 -translate-y-[9px]" : ""
            }`}
          />
        </button>
      </nav>

      <div
        ref={menuRef}
        style={{ transform: "translateX(100%)" }}
        className="fixed top-0 right-0 z-40 h-screen w-full md:w-[25%] backdrop-blur-xl"
      >
        <div className="flex h-full flex-col items-end justify-center gap-8 px-16">
          {navLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                const id = item.href.replace("#", "");
                if (window.location.pathname !== "/") {
                  window.location.href = `/${item.href}`;
                  return;
                }
                if (id === "") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  const target = document.getElementById(id);
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }
                toggle();
              }}
              className="nav-link text-white text-4xl font-medium tracking-tight hover:opacity-70 transition"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
