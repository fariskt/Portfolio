"use client";

import {
  NextjsIcon,
  ReactIcon,
  NodejsIcon,
  TailwindIcon,
  GitIcon,
  MongodbIcon,
  SocketioIcon,
} from "@/components/SkillIcons";

export default function ToolsSection() {
  const tools = [
    {
      name: "Next.js",
      category: "Full-Stack Framework",
      desc: "App Router, SSR, Server Actions & edge deployment",
      icon: <NextjsIcon size={30} />,
    },
    {
      name: "React.js",
      category: "Frontend UI",
      desc: "Component architecture, modern hooks & state management",
      icon: <ReactIcon size={30} />,
    },
    {
      name: "Node.js & Express",
      category: "Backend & REST APIs",
      desc: "Scalable server architectures, RESTful APIs & middleware systems",
      icon: <NodejsIcon size={30} />,
    },
    {
      name: "TypeScript",
      category: "Type Safety",
      desc: "Strict type modeling, robust interfaces & maintainability",
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="#3178C6">
          <path d="M1.5 0h21A1.5 1.5 0 0 1 24 1.5v21a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0zm10.74 14.28h-2.9v7.18H6.55v-7.18H3.66V12.1h8.58v2.18zm8.68 2.2c0 1.63-.82 2.87-2.3 3.53a8.88 8.88 0 0 1-3.66.69c-1.39 0-2.61-.25-3.65-.77a4.67 4.67 0 0 1-2.12-2.32l2.3-1.4c.5.83 1.34 1.45 2.5 1.45.68 0 1.22-.14 1.58-.41.36-.28.53-.66.53-1.12 0-.46-.17-.83-.51-1.12-.34-.28-.9-.56-1.68-.83l-.7-.24c-1.35-.47-2.36-1.04-3.02-1.72a4.4 4.4 0 0 1-1-2.83c0-1.46.74-2.63 2.15-3.35 1.05-.53 2.33-.8 3.8-.8 1.2 0 2.26.23 3.17.68a4.8 4.8 0 0 1 2.05 2l-2.22 1.38c-.46-.73-1.2-1.15-2.2-1.15-.65 0-1.15.13-1.48.38-.34.25-.5.6-.5 1.04 0 .42.15.75.46 1 .3.25.82.5 1.55.75l.7.24c1.55.54 2.68 1.16 3.39 1.87.7.7 1.05 1.6 1.05 2.76z" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      category: "Styling & Motion",
      desc: "Responsive design systems, dynamic themes & layout",
      icon: <TailwindIcon size={30} />,
    },
    {
      name: "PostgreSQL & Mongo",
      category: "Databases",
      desc: "Relational data modeling, Prisma, indexing & query tuning",
      icon: <MongodbIcon size={30} />,
    },
    {
      name: "Socket.io & Real-Time",
      category: "Live Communication",
      desc: "Bi-directional event websockets, room channels & chat",
      icon: <SocketioIcon size={30} />,
    },
    {
      name: "Git & Deployment",
      category: "DevOps & Workflows",
      desc: "Version control, CI/CD pipelines, Docker & cloud hosting",
      icon: <GitIcon size={30} />,
    },
  ];

  return (
    <section id="tools" className="space-y-8 pt-12">
      {/* Stacked Section Header */}
      <div className="space-y-1">
        <h2 className="title-primary">Tech</h2>
        <h3 className="title-secondary">Stack</h3>
      </div>

      <p className="text-sm text-white/60 font-sans max-w-xl">
        The core technologies, frameworks, and engineering tools I leverage to build production-grade software applications.
      </p>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="portfolio-card p-4 md:p-5 flex items-center gap-4 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 group-hover:scale-105 group-hover:border-lime-400/40 transition-all duration-200">
              {tool.icon}
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-white group-hover:text-lime-400 transition-colors">
                {tool.name}
              </h4>
              <p className="text-xs font-mono text-lime-400/80">{tool.category}</p>
              <p className="text-[11px] text-white/50 line-clamp-1">{tool.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
