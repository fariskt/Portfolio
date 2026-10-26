"use client";

import WaveText from "./WaveText";

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  points: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "01",
    role: "Frontend Developer",
    company: "Faskum Technologies",
    period: "June 2025 – July 2026",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Django", "FastAPI", "Git", "Agile"],
    points: [
      "Developed scalable frontend apps with Next.js, TypeScript, Tailwind CSS; contributed to 10+ full-stack projects integrating Django/FastAPI backends.",
      "Built reusable, accessible UI components; optimized performance reducing load times by 30%.",
      "Collaborated with Python backend teams on API design and Agile workflows (Git, sprints, deployments).",
    ],
  },
  {
    id: "02",
    role: "Full Stack Developer Intern",
    company: "Bridgeon Solutions",
    period: "Aug 2024 – June 2025",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Agile"],
    points: [
      "Designed responsive UIs with React.js; integrated Node.js/Express backends, improving UX by 35% and engagement by 40%.",
      "Optimized MongoDB usage and responsive design for scalability; conducted code reviews reducing bugs by 20%.",
      "Led cross-functional teams in Agile environments, delivering maintainable, high-performance solutions.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-gray-800 rounded-t-4xl">
      <div className="md:py-24 py-10 mx-auto px-5">
        <h2 className="heading-section">Professional Experience</h2>

        <div className="mt-16 grid grid-cols-1">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-8 border-b border-gray-800 hover:border-white flex flex-col gap-6 transition-[border-color] duration-300 ease-out"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="space-y-1">
                  <WaveText
                    text={`${exp.role} — ${exp.company}`}
                    className="md:text-3xl text-xl font-mono text-white"
                  />
                  <p className="text-sm font-mono text-white/50">{exp.company}</p>
                </div>
                <span className="inline-flex items-center gap-2 self-start md:self-auto px-3 py-1 rounded-full text-xs font-mono border border-lime-400/30 text-lime-400 bg-lime-400/5">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3 font-mono text-sm md:text-base text-white/70 max-w-5xl leading-relaxed list-none">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-lime-400 mt-1 select-none">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono rounded-md border border-white/10 bg-white/5 text-white/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
