import React from "react";
import { works } from "../../data/constants";
import Image from "next/image";
import Parallax from "../Parallax";
import Link from "next/link";
const WorkSection = () => {
  return (
    <section className="min-h-screen rounded-t-4xl">
      <div className="md:py-20 px-5 max-w-7xl mx-auto">
        <h2 className="heading-section">Featured Works</h2>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 justify-center">
            {works.map((item) => (
              <div className="p-6" key={item.id}>
                <div className="relative w-full p-2 glass rounded-3xl overflow-hidden group">
                  {/* Image */}
                  {item.image && (
                    <div className="relative w-full aspect-[4/2.1] hover-video rounded-xl overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover video-image"
                      />

                      <div
                        className="
              absolute inset-0
              bg-black/60 backdrop-blur-sm
              flex items-center justify-center gap-4 rounded-xl
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
            "
                      >
                        {item.github && (
                          <Link
                            href={item.github}
                            target="_blank"
                            className="px-4 py-2 text-xs rounded-full border border-white/30 hover:bg-white hover:text-black transition"
                          >
                            GitHub
                          </Link>
                        )}

                        {item.webapp && (
                          <Link
                            href={item.webapp}
                            target="_blank"
                            className="px-4 py-2 text-xs rounded-full bg-lime-400 text-black hover:bg-lime-300 transition"
                          >
                            Live
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                  <h3 className="text-xs font-mono mt-2">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
