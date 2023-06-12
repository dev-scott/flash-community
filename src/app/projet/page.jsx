"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { TypingText } from "@/components";
// import Tilt from "react-tilt";
import Img from "public/img/bgHero.jpg";
import Github from "public/img/github.png";
import Image from "next/image";

const Projet = () => {
  return (
    <div className="w-full ">
      <div className="   max-w-screen-2xl mx-auto px-4 sm:px-6 flex-col  py-2 pt-8 w-full flex  ">
        <motion.div variants={textVariant()}>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            Projet
          </p>
          {/* <TypingText title="Projet" /> */}

          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Projects.
          </h2>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="stack mt-6 cursor-pointer "
          >
            <div className="card shadow-md bg-warning text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Add your Projet</h2>
                <p>You have 3 unread messages. Tap here to see.</p>
              </div>
            </div>
            <div className="card shadow bg-warning text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Notification 2</h2>
                <p>You have 3 unread messages. Tap here to see.</p>
              </div>
            </div>
            <div className="card shadow-sm bg-warning text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Notification 3</h2>
                <p>You have 3 unread messages. Tap here to see.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-20 flex flex-wrap gap-7">
          <motion.div variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}>
            <div className="bg-base-300 p-6  rounded-2xl sm:w-[360px] w-full">
              <div className="relative w-full h-[230px]">
                {/* <img
                  src={Img}
                  alt="project_image"
                  className="w-full h-full object-cover rounded-2xl"
                /> */}

                <Image
                  style={{ borderRadius: "10%" }}
                  src={Img}
                  fill={true}
                  alt="Picture of the author"
                />
              </div>

              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">Car Rent</h3>
                <p className="mt-2 text-secondary text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, nulla.
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <p className="text-[14px] blue-text-gradient">#html</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}>
            <div className="bg-base-300 p-6  rounded-2xl sm:w-[360px] w-full">
              <div className="relative w-full h-[230px]">
                {/* <img
                  src={Img}
                  alt="project_image"
                  className="w-full h-full object-cover rounded-2xl"
                /> */}

                <Image
                  style={{ borderRadius: "10%" }}
                  src={Img}
                  fill={true}
                  alt="Picture of the author"
                />
              </div>

              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">Car Rent</h3>
                <p className="mt-2 text-secondary text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, nulla.
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <p className="text-[14px] blue-text-gradient">#html</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}>
            <div className="bg-base-300 p-6  rounded-2xl sm:w-[360px] w-full">
              <div className="relative w-full h-[230px]">
                <Image
                  style={{ borderRadius: "10%" }}
                  src={Img}
                  fill={true}
                  alt="Picture of the author"
                />
              </div>

              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">Car Rent</h3>
                <p className="mt-2 text-secondary text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, nulla.
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <p className="text-[14px] blue-text-gradient">#html</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projet;
