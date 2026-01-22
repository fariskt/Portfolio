import React from "react";
import Image from "next/image";
import { works } from "@/src/data/constants";

const WorksPage = () => {
  return (
    <section className="min-h-screen bg-gradient-primary-dark">
      <div className="py-24 px-6 md:px-14 max-w-7xl mx-auto">
        <h1 className="heading-section mb-16">
          All Works
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {works.map((item) => (
            <article key={item.id} className="group">
              <h3 className="text-title mb-4">{item.title}</h3>

              <div className="relative p-2 glass bg-gradient-soft rounded-4xl overflow-hidden">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={320}
                    className="object-cover w-full h-72 rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksPage;
