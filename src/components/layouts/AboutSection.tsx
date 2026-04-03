import Image from "next/image";
import React from "react";
import SkillMarquee from "../ui/SkillMarquee";

const AboutSection = () => {
  return (
    <section id="about" className="border-b border-b-gray-800 md:min-h-screen h-[70vh] rounded-t-4xl">
      <div className="md:mb-20 mt-20 px-5 max-w-7xl mx-auto">
        <h2 className="heading-section mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          <div className="hidden md:block md:col-span-1 hover-focus">
            <Image
              src="/faris-me.jpeg"
              alt="Photo"
              width={300}
              height={500}
              className="w-full h-full object-cover glass bg-gradient-soft rounded-xl"
            />
          </div>

          <div className="md:col-span-3">
            <div className="rounded-xl pt-14 md:pb-10 md:px-10">
              <h3 className="text-title font-mono">
                Software Developer focused on building fast, secure, and
                scalable web applications. I work across both frontend and
                backend to deliver clean, maintainable solutions with thoughtful
                design and real-world performance in mind—products built to grow
                and last.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
