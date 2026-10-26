"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProfileSidebar() {
  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/fariskt",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/muhammedfariskt",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://instagram.com/farizkt",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: "mailto:fariskt00@gmail.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
  ];

  return (
    <aside className="w-full lg:w-[350px] shrink-0 lg:sticky lg:top-8 self-start">
      <div className="bg-[#141418] text-white rounded-[32px] p-7 md:p-8 flex flex-col justify-between shadow-2xl border border-white/[0.08] relative overflow-hidden group">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute -top-24 -left-24 w-52 h-52 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />

        <div>
          {/* Avatar Container with Sleek Frame */}
          <div className="relative mb-6 pt-2 flex flex-col items-center">
            <div className="relative w-44 h-48 rounded-[28px] overflow-hidden bg-gradient-to-b from-white/10 to-white/[0.02] p-1 border border-white/10 shadow-xl group-hover:border-lime-400/40 transition-all duration-300">
              <Image
                src="/faris-me.png"
                alt="Muhammed Faris"
                width={180}
                height={220}
                priority
                className="w-full h-full object-cover object-top rounded-[24px]"
              />
            </div>
          </div>

          {/* Name & Title */}
          <div className="text-center space-y-1.5 mb-5">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white font-mono">
              Muhammed Faris
            </h1>
            <p className="text-xs font-mono text-lime-400 tracking-wider">
              FULL STACK DEVELOPER
            </p>
          </div>

          {/* Status Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-lime-400/10 text-lime-400 border border-lime-400/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
              </span>
              Full Stack Developer
            </span>
          </div>

          {/* Bio Description */}
          <p className="text-white/70 text-sm leading-relaxed text-center mb-6 px-1 font-sans">
            Specializing in high-performance web applications, scalable backend systems, and motion-driven user interfaces using Next.js, TypeScript, and Node.js.
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap justify-center gap-1.5 mb-6">
            {["Next.js", "TypeScript", "Node.js", "Express", "React", "Tailwind"].map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] text-white/60 border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links & Footer CTA */}
        <div className="space-y-5 pt-5 border-t border-white/[0.08]">
          <div className="flex items-center justify-center gap-2.5">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full bg-white/[0.04] text-white/70 border border-white/10 flex items-center justify-center hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all duration-200 shadow-sm"
              >
                {s.icon}
              </Link>
            ))}
          </div>

          <div className="text-center">
            <p className="text-[11px] font-mono text-white/40 uppercase tracking-wider">
              Full Stack Developer • Based in India
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
