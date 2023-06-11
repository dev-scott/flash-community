"use client";

import React from "react";

import { motion } from "framer-motion";
import { StartSteps, TypingText, TitleText } from "@/components";

import { fadeIn, textVariant } from "@/utils/motion";

async function getData() {
  const res = await fetch("http://localhost:3000/api/projets", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Projet = async () => {
  const data = await getData();
  return (
    <div className="w-full ">
      <section className=" mt-8 bg-base-300 relative h-[800px] py-16 max-w-screen-2xl  mx-auto px-16  ">
        <div className="mx-auto ">
          <motion.div variants={textVariant()}>
            <TypingText title="The goal of the community." />

            <h2 className="text-white font-semibold md:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px]">
              Community Projets
            </h2>
          </motion.div>

          <div className="w-full flex">
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-3 text-base-content text-[17px] max-w-3xl leading-[30px]"
            >
              Following projects showcases my skills and experience through
              real-world examples of my work. Each project is briefly described
              with links to code repositories and live demos in it. It reflects
              my ability to solve complex problems, work with different
              technologies, and manage projects effectively.
            </motion.p>
          </div>

          <div className="mt-20 flex flex-wrap gap-7">
              <motion.div
                
                variants={fadeIn("up", "spring", index * 0.5, 0.75)}
              >
           
                  <div className="relative w-full h-[230px]">
                    <img
                      src={image}
                      alt="project_image"
                      className="w-full h-full object-cover rounded-2xl"
                    />

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                      <div
                        onClick={() => window.open(source_code_link, "_blank")}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                      >
                        <img
                          src={github}
                          alt="source code"
                          className="w-1/2 h-1/2 object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">
                      {description}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <p
                        key={`${name}-${tag.name}`}
                        className={`text-[14px] ${tag.color}`}
                      >
                        #{tag.name}
                      </p>
                    ))}
                  </div>
              </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projet;
