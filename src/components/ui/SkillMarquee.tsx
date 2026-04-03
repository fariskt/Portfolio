import React from "react";
import { Icons } from "../icons";

const skills = [
  "html",
  "css",
  "javascript",
  "react",
  "redux",
  "nextjs",
  "nodejs",
  "express",
  "mongodb",
  "mongoose",
  "socketio",
  "tailwind",
  "vite",
  "npm",
  "git",
  "github",
  "swagger",
];
const SkillMarquee = () => {
  return (
    <div className="skills-marquee glass p-3 rounded-3xl">
      <div className="skills-track">
        {[...skills, ...skills].map((tech, i) => {
          const Icon = Icons[tech as keyof typeof Icons];
          return Icon ? (
            <div key={`${tech}-${i}`} className="skill-item">
              <Icon size={36} />
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default SkillMarquee;
