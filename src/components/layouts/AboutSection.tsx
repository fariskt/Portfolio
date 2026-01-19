import Image from "next/image";
import React from "react";
import SkillMarquee from "../ui/SkillMarquee";

const AboutSection = () => {
  return (
    <section className="min-h-screen bg-gradient-primary-dark rounded-t-4xl">
      <div className="max-w-6xl mx-auto py-20 px-5">
        <h2 className="heading-section">
          About ME
        </h2>
        <div className="flex gap-4 mt-5">
          <div className="hover-focus hidden md:block">
            <Image
              src="/faris-me.jpeg"
              alt="Photo"
              className="h-full min-w-40 w-full object-cover glass bg-gradient-soft rounded-xl"
              width={200}
              height={500}
            />
          </div>
          <div className="space-y-5">
            <div className="grid grid-cols-3 items-start gap-5 ">
              <div className="col-span-3 md:col-span-3 rounded-xl glass bg-gradient-soft pt-14 pb-10 px-10 hover-focus">
                <h3 className="text-title text-gradient font-mono">
                  Software Developer building fast, secure, and reliable
                  applications—designed to grow and last. Focused on clean code,
                  thoughtful design, and real-world performance.
                </h3>
              </div>
              {/* <div>
                <Image
                  src="/about-me.png"
                  alt="about-me"
                  height={200}
                  width={200}
                />
              </div> */}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-7 gap-5">
              <div className="col-span-2 space-y-3 glass rounded-xl bg-gradient-soft p-6 hover-focus">
                <h2 className="text-title">FRONTEND</h2>

                <h5 className="text-gradient font-mono">
                  Building clean, responsive, and accessible user interfaces
                  with a focus on performance, usability, and modern web
                  standards.
                </h5>
              </div>

              <div className="col-span-2 space-y-3 glass rounded-xl bg-gradient-soft p-6 hover-focus">
                <h2 className="text-title">BACKEND</h2>
                <h5 className="text-gradient font-mono">
                  Developing secure, scalable server-side systems, APIs, and
                  databases that power reliable and high-performing
                  applications.
                </h5>
              </div>

              <div className="col-span-3 space-y-3 glass rounded-xl bg-gradient-soft p-6 hover-focus">
                <h2 className="text-title">WEB DEVELOPMENT</h2>
                <h5 className="text-gradient font-mono">
                  Delivering end-to-end web solutions by combining frontend and
                  backend technologies to create fast, maintainable, and
                  scalable applications.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <SkillMarquee />
      </div>
    </section>
  );
};

export default AboutSection;
