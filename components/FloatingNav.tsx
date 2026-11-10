"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = ["hero", "projects", "experience", "tools", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navItems = [
    {
      id: "hero",
      label: "Home",
      href: "/#hero",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      id: "projects",
      label: "Projects",
      href: "/#projects",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
        </svg>
      ),
    },
    {
      id: "experience",
      label: "Experience",
      href: "/#experience",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      id: "tools",
      label: "Tools",
      href: "/#tools",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      id: "contact",
      label: "Contact",
      href: "/#contact",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
  ];

  return (
    <nav className="nav-dock fixed md:right-6 md:top-1/2 md:-translate-y-1/2 bottom-5 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 rounded-full px-3 py-2.5 flex md:flex-col items-center gap-1.5 shadow-2xl">
      {navItems.map((item) => {
        const isActive = pathname === "/" && activeSection === item.id;
        return (
          <Link
            key={item.id}
            href={item.href}
            aria-label={item.label}
            className={`p-3 rounded-full transition-all duration-200 relative group flex items-center justify-center ${
              isActive
                ? "bg-lime-400 text-black shadow-md shadow-lime-400/20"
                : "text-white/50 hover:text-white hover:bg-white/10"
            }`}
          >
            {item.icon}
            {/* Tooltip on hover */}
            <span className="hidden md:block absolute right-14 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 text-white text-[11px] font-mono px-2.5 py-1 rounded pointer-events-none whitespace-nowrap border border-white/10 shadow-lg">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
