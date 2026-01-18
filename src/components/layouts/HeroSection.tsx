"use client";

import { useEffect, useRef } from "react";
import { splitReveal } from "../../lib/splitText";
import Parallax from "../Parallax";
import ParallaxText from "../ParallaxText";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) splitReveal(titleRef.current);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/projects" },
    { name: "Work", href: "/work" },
    { name: "Contact Me", href: "/contact" },
  ];

  return (
    <section className="relative min-h-screen bg-black text-white">
      <div className="smooth-bg flex flex-col justify-between">
        <div className="mx-auto grid grid-cols-1 items-start gap-10 px-6  md:grid-cols-2">
          <div className="flex flex-col justify-start">
            <div className="mb-6 h-px w-full bg-white/10" />

            <span className="mb-6 inline-flex items-center gap-2 text-xs tracking-[0.35em] text-white/60">
              <span className="h-2 w-2 rounded-full bg-lime-400" />
              SOFTWARE DEVELOPER
            </span>

            <h1
              ref={titleRef}
              className="font-display text-[clamp(3rem,7vw,6.5rem)] font-medium leading-[0.95] tracking-tight"
            >
              BUILDING
              <br />
              DIGITAL
              <br />
              EXPERIENCES.
            </h1>
          </div>
          <div className="flex flex-col items-end gap-6 z-50 mt-5">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="link-animate group hover:underline flex items-center gap-2 font-medium text-title"
              >
                <span className="link-text">{item.name}</span>
                <ChevronRight className="link-icon" size={16} />
              </Link>
            ))}
          </div>
        </div>
        <ParallaxText speed={0.06}>
          <div>
            <h2 className="font-display text-[12vw] font-medium leading-none tracking-tight text-white">
              Muhammed Faris
            </h2>
          </div>
        </ParallaxText>
      </div>
    </section>
  );
}
