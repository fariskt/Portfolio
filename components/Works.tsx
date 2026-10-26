"use client";

import Image from "next/image";
import Link from "next/link";
import { featuredProjects, allProjects } from "@/data/projects";

export type { Project } from "@/data/projects";
export const projects = featuredProjects;

export default function Works() {
  return (
    <section id="work" className="border-b border-b-gray-800 min-h-screen rounded-t-4xl">
      <div className="py-20 mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono tracking-widest text-lime-400 uppercase">
              Selected Works ({featuredProjects.length})
            </span>
            <h2 className="heading-section mt-1">Featured Projects</h2>
          </div>
          <Link
            href="/projects"
            className="group font-mono text-xs text-white/60 hover:text-lime-400 transition inline-flex items-center gap-1.5"
          >
            <span>Browse all {allProjects.length} projects</span>
            <span className="text-lime-400 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <div key={project.id}>
              <div className="relative p-6 w-full h-full border border-gray-800 overflow-hidden group flex flex-col justify-between hover:border-gray-700 transition">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-base font-mono font-medium">{project.title}</h3>
                    {project.date && (
                      <span className="text-xs font-mono text-white/40 shrink-0">{project.date}</span>
                    )}
                  </div>

                  {project.image ? (
                    <div className="relative w-full aspect-[4/2.1] hover-video rounded-xl overflow-hidden mb-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover video-image"
                      />
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-xs rounded-full border border-white/30 hover:bg-white hover:text-black transition font-mono"
                          >
                            GitHub
                          </Link>
                        )}
                        {project.webapp && (
                          <Link
                            href={project.webapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-xs rounded-full bg-lime-400 text-black hover:bg-lime-300 transition font-mono"
                          >
                            Live
                          </Link>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full aspect-[4/2.1] rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 p-5 flex flex-col justify-between group-hover:border-lime-400/40 transition">
                      <div className="space-y-2">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono tracking-wider uppercase text-lime-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                          {project.category}
                        </span>
                        <p className="text-xs font-mono text-white/70 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>
                      {project.highlights && project.highlights.length > 0 && (
                        <ul className="space-y-1 text-[11px] font-mono text-white/60">
                          {project.highlights.map((h, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 line-clamp-1">
                              <span className="text-lime-400 select-none">▸</span>
                              <span className="truncate">{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>

                {project.highlights && project.image && (
                  <ul className="space-y-1.5 font-mono text-xs text-white/60 mb-4">
                    {project.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-lime-400 select-none">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] font-mono rounded border border-white/10 text-white/50 bg-white/[0.02]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {(project.webapp || project.github) && (
                    <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                      {project.webapp && (
                        <Link
                          href={project.webapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 text-xs rounded-full bg-lime-400 text-black font-mono font-medium hover:bg-lime-300 transition inline-flex items-center gap-1"
                        >
                          <span>Live</span>
                          <span>↗</span>
                        </Link>
                      )}
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 text-xs rounded-full border border-white/20 text-white font-mono hover:bg-white hover:text-black transition inline-flex items-center gap-1"
                        >
                          <span>GitHub</span>
                          <span>↗</span>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-3">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-gray-800 hover:border-lime-400 bg-white/[0.02] hover:bg-lime-400/10 text-white font-mono text-sm transition-all duration-300"
          >
            <span>View All Projects ({allProjects.length})</span>
            <span className="text-lime-400 transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <span className="text-xs font-mono text-white/40">
            Explore personal projects across Web Apps, Full-Stack, and Interactive Platforms
          </span>
        </div>
      </div>
    </section>
  );
}
