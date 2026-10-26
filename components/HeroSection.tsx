"use client";

import Link from "next/link";

export default function HeroSection() {

  const stats = [
    { value: "+2", label: "YEARS OF EXPERIENCE" },
    { value: "+20", label: "PROJECTS CONTRIBUTED TO" },
    { value: "+10", label: "PRODUCTION SYSTEMS" },
  ];

  return (
    <section id="hero" className="space-y-10 pt-2">
      {/* Big Stacked Hero Headline */}
      <div className="space-y-1">
        <h1 className="title-primary">FULL STACK</h1>
        <h2 className="title-secondary">DEVELOPER</h2>
      </div>

      {/* Subtitle / Intro */}
      <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed font-sans">
        Passionate about crafting fast, accessible, and resilient digital applications. Merging engineering rigor across frontend architectures and API backends with clean, motion-enhanced interactions.
      </p>

      {/* Stats Counter Row */}
      <div className="grid grid-cols-3 gap-4 pt-4 pb-2 border-y border-white/10">
        {stats.map((s, idx) => (
          <div key={idx} className="space-y-1">
            <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-mono">
              {s.value}
            </div>
            <div className="text-[10px] md:text-xs font-mono text-white/50 tracking-wider">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Two Accent Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
        {/* Card 1: Electric Lime Green (Faris Signature) */}
        <Link
          href="/#projects"
          className="group relative rounded-[28px] p-7 bg-lime-400 text-black flex flex-col justify-between min-h-[190px] shadow-lg hover:shadow-lime-400/20 transition-all duration-300"
        >
          <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>

          <div className="flex items-end justify-between gap-4 mt-6">
            <span className="font-extrabold text-lg md:text-xl tracking-tight uppercase leading-snug">
              BUILDING FAST, SCALABLE WEB EXPERIENCES
            </span>
            <div className="w-9 h-9 rounded-full bg-black text-lime-400 flex items-center justify-center shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </div>
        </Link>

        {/* Card 2: Dark Elevated Surface with Cyan Accent */}
        <Link
          href="/#experience"
          className="group relative rounded-[28px] p-7 bg-[#18181f] text-white border border-white/10 flex flex-col justify-between min-h-[190px] shadow-lg hover:border-cyan-400/40 transition-all duration-300"
        >
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>

          <div className="flex items-end justify-between gap-4 mt-6">
            <span className="font-extrabold text-lg md:text-xl tracking-tight uppercase leading-snug text-white">
              NEXT.JS, NODE.JS, EXPRESS & REACT
            </span>
            <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-cyan-400 group-hover:text-black text-white flex items-center justify-center shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
