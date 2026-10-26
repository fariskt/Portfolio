"use client";

import { experiences } from "@/components/Experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="space-y-8 pt-12">
      {/* Stacked Section Header */}
      <div className="space-y-1">
        <h2 className="title-primary">PROFESSIONAL</h2>
        <h3 className="title-secondary">EXPERIENCE</h3>
      </div>

      {/* Experience Cards */}
      <div className="space-y-5">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="portfolio-card p-6 md:p-8 space-y-5 group"
          >
            {/* Header: Role, Company & Dates */}
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 border-b border-white/5 pb-4">
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-lime-400 transition-colors">
                  {exp.role}
                </h4>
                <p className="text-sm font-semibold text-lime-400 mt-1 font-mono">
                  {exp.company}
                </p>
              </div>
              <span className="self-start md:self-auto font-mono text-xs px-3.5 py-1.5 rounded-full bg-white/[0.04] text-white/70 border border-white/10">
                {exp.period}
              </span>
            </div>

            {/* Bullets */}
            <ul className="space-y-3 font-sans text-sm md:text-[15px] text-white/70 leading-relaxed list-none">
              {exp.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-lime-400 text-base leading-none select-none mt-1">▸</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-mono rounded-full bg-white/[0.04] text-white/60 border border-white/5 group-hover:border-lime-400/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
