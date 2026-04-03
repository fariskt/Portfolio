import React from "react";
import SkillMarquee from "../ui/SkillMarquee";
import WaveText from "../ui/WaveText";

const expertise = [
  {
    id: "01",
    title: "Frontend Engineering & Architecture",
    description:
      "Building scalable and maintainable frontend systems using modern frameworks, clean component structures, and performance-first principles.",
  },
  {
    id: "02",
    title: "Full-Stack Web Development",
    description:
      "Developing end-to-end web applications with secure APIs, structured data flows, and production-ready integrations.",
  },
  {
    id: "03",
    title: "Design-Driven Development",
    description:
      "Translating design concepts into precise, interactive interfaces while preserving visual intent and usability.",
  },
  {
    id: "04",
    title: "Responsive & Adaptive Interfaces",
    description:
      "Crafting layouts that adapt seamlessly across devices, ensuring consistency, accessibility, and usability on all screen sizes.",
  },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="border-b border-gray-800 rounded-t-4xl">
      <div className="md:py-24 py-10 mx-auto">
        <h2 className="heading-section px-5">Skills & Expertise</h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-1">
          {expertise.map((item) => (
            <div
              key={item.id}
              className="
    p-8
    border-b border-gray-800
    hover:border-white
    flex flex-col gap-6

    transition-[border-color]
    duration-300
    ease-out
  "
            >
              <WaveText text={item.title} className="md:text-4xl text-xl font-mono" />

              <p className="text-base font-mono text-white/70 leading-relaxed max-w-6xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <SkillMarquee />
    </section>
  );
};

export default ExpertiseSection;
