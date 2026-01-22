import React from "react";
import { works } from "../../data/constants";
import Image from "next/image";
import Parallax from "../Parallax";
const WorkSection = () => {
  return (
    <Parallax speed={0.4}>
      <section className="min-h-screen bg-gradient-primary-dark rounded-t-4xl">
        <div className="py-20 md:px-10">
          <h2 className="heading-section">
            Featured Works
          </h2>
          <div className="mt-10">
            <div className="grid  grid-cols-1 md:grid-cols-3 justify-center ">
              {works.map((item) => (
                <div className="p-6" key={item.id}>
                  <h3 className="text-title mb-3">{item.title}</h3>

                  <div className="relative w-full p-2 hover-video glass bg-gradient-soft rounded-4xl overflow-hidden">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.title}
                        height={300}
                        width={450}
                        className="video-image object-cover w-full h-65 rounded-xl"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default WorkSection;
