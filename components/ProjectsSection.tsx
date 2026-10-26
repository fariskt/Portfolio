"use client";

import Image from "next/image";
import Link from "next/link";
import { featuredProjects, allProjects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="space-y-8 pt-10">
      {/* Stacked Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <h2 className="title-primary">RECENT</h2>
          <h3 className="title-secondary">PROJECTS</h3>
        </div>
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-xs font-mono text-white/50 hover:text-lime-400 transition"
        >
          <span>All ({allProjects.length})</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="portfolio-card p-5 md:p-6 group flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            {/* Left: Thumbnail Preview */}
            <div className="relative w-full md:w-44 h-32 md:h-28 rounded-2xl overflow-hidden bg-[#1a1a20] shrink-0 border border-white/5 flex items-center justify-center p-2">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 180px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex flex-col justify-between p-2.5 bg-gradient-to-br from-white/5 to-transparent rounded-xl">
                  <span className="text-[10px] font-mono text-lime-400 uppercase font-bold tracking-wider">
                    {project.category}
                  </span>
                  <div className="text-[11px] font-mono text-white/70 line-clamp-2 leading-tight">
                    {project.tags.slice(0, 3).join(" • ")}
                  </div>
                </div>
              )}
            </div>

            {/* Middle: Details */}
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-lime-400 font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                {project.date && (
                  <span className="text-xs font-mono text-white/30">• {project.date}</span>
                )}
              </div>

              <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-lime-300 transition-colors leading-snug">
                {project.title}
              </h4>

              <p className="text-xs md:text-sm text-white/60 line-clamp-2 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-white/50 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Circular CTA Button */}
            <div className="self-end md:self-center shrink-0">
              {project.webapp ? (
                <Link
                  href={project.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open live site for ${project.title}`}
                  className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-lime-400 group-hover:text-black text-white flex items-center justify-center border border-white/10 group-hover:border-lime-400 transition-all duration-200"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </Link>
              ) : project.github ? (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open GitHub repo for ${project.title}`}
                  className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-white group-hover:text-black text-white flex items-center justify-center border border-white/10 transition-all duration-200"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </Link>
              ) : (
                <div className="w-12 h-12 rounded-full bg-white/5 text-white/30 flex items-center justify-center border border-white/5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="pt-4 flex justify-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black hover:bg-lime-400 font-bold text-sm transition-all duration-300 shadow-md group"
        >
          <span>View All Projects ({allProjects.length})</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
