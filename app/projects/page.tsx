"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { allProjects, Project } from "@/data/projects";

const categories = ["All", "Web App", "Full-Stack", "Backend", "AI / LLM"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = allProjects.filter((project) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "AI / LLM") {
      return (
        project.tags.some((t) => t.toLowerCase().includes("ai") || t.toLowerCase().includes("llm")) ||
        project.category.toLowerCase().includes("ai")
      );
    }
    if (selectedCategory === "Backend") {
      return (
        project.category.toLowerCase().includes("backend") ||
        project.tags.some((t) => t.toLowerCase() === "fastapi" || t.toLowerCase() === "rest api" || t.toLowerCase() === "backend")
      );
    }
    if (selectedCategory === "Full-Stack") {
      return (
        project.tags.some((t) => t.toLowerCase().includes("full-stack")) ||
        project.category.toLowerCase().includes("full")
      );
    }
    if (selectedCategory === "Web App") {
      return (
        project.category.toLowerCase().includes("web") ||
        project.tags.some((t) => t.toLowerCase().includes("next.js") || t.toLowerCase().includes("react"))
      );
    }
    return true;
  });

  return (
    <main className="min-h-screen text-white bg-[#0c0c0e] selection:bg-lime-400 selection:text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12">
        {/* Navigation & Back Link */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/10">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-xs text-white/60 hover:text-lime-400 transition"
          >
            <span className="text-lime-400 transition-transform group-hover:-translate-x-1">←</span>
            <span>Back to Home</span>
          </Link>
          <span className="font-mono text-xs text-lime-400 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-lime-400 animate-pulse" />
            MUHAMMED FARIS • SELECTED PROJECTS
          </span>
        </div>

        {/* Stacked Page Header */}
        <div className="space-y-4">
          <div className="space-y-1">
            <h1 className="title-primary">SELECTED</h1>
            <h2 className="title-secondary">PROJECTS</h2>
          </div>
          <p className="text-sm md:text-base text-white/60 max-w-2xl font-sans leading-relaxed">
            A curated showcase of personal engineering projects and web applications developed with modern frontend frameworks, scalable backends, and interactive features.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 pt-2 pb-6 border-b border-white/10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-mono text-xs transition-all duration-200 ${
                  isActive
                    ? "bg-lime-400 text-black font-bold shadow-md shadow-lime-400/20"
                    : "border border-white/10 bg-white/[0.03] text-white/70 hover:border-lime-400/40 hover:text-white"
                }`}
              >
                {cat}
                {cat === "All" && ` (${allProjects.length})`}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="portfolio-card p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-lime-400 uppercase tracking-wider font-semibold">
                    {project.category}
                  </span>
                  {project.date && (
                    <span className="text-xs font-mono text-white/30">{project.date}</span>
                  )}
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-lime-300 transition-colors leading-snug">
                  {project.title}
                </h3>

                {project.image ? (
                  <div className="relative w-full aspect-[4/2.1] rounded-2xl overflow-hidden mb-4 border border-white/5 bg-[#18181c]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 mb-4">
                    <p className="text-xs font-mono text-white/70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                )}

                {project.highlights && project.highlights.length > 0 && (
                  <ul className="space-y-1.5 font-sans text-xs text-white/70 mb-5">
                    {project.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-lime-400 select-none shrink-0 leading-none mt-1">▸</span>
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[11px] font-mono rounded-full bg-white/[0.04] text-white/60 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {(project.webapp || project.github) && (
                  <div className="flex items-center gap-3 pt-2">
                    {project.webapp && (
                      <Link
                        href={project.webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-xs rounded-full bg-lime-400 hover:bg-lime-300 text-black font-mono font-bold transition inline-flex items-center gap-1.5 shadow-md shadow-lime-400/20"
                      >
                        <span>Live Preview</span>
                        <span>↗</span>
                      </Link>
                    )}
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-xs rounded-full border border-white/20 text-white font-mono hover:bg-white hover:text-black transition inline-flex items-center gap-1.5"
                      >
                        <span>GitHub</span>
                        <span>↗</span>
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <Link href="/" className="hover:text-lime-400 transition">
            ← Return to Portfolio Home
          </Link>
          <p>© {new Date().getFullYear()} Muhammed Faris — Full Stack Developer</p>
        </div>
      </div>
    </main>
  );
}
