"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Navbar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/projects" },
    { name: "Work", href: "/work" },
    { name: "Contact Me", href: "/contact" },
  ];

  const menuRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!menuRef.current) return;

    tl.current = gsap.timeline({ paused: true });

    tl.current
      .fromTo(
        menuRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.8, ease: "power4.out" },
      )
      .from(
        ".nav-link",
        {
          y: 40,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4",
      );
  }, []);

  const toggleMenu = () => {
    if (!tl.current) return;

    if (!open) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
    setOpen(!open);
  };

  return (
    <>
      {/* TOP NAV */}
      <nav className="absolute top-0 right-0 z-50  items-center justify-between px-10 py-6">
        <button
          onClick={toggleMenu}
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
        className="fixed top-0 right-0 z-40 h-screen w-full md:w-[25%] backdrop-blur-xl"
      >
        <div className="flex h-full flex-col items-end justify-center gap-8 px-16">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={toggleMenu}
              className="text-white hover:underline text-4xl font-medium tracking-tight hover:opacity-70 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
