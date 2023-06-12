"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { StartSteps, TypingText, TitleText } from "@/components";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import Logo from "public/img/logo.png";
import { startingFeatures } from "@/utils/data";
import ComputersCanvas from "@/components/canvas/Computers";

export default function Home() {
  return (
    <>
      <div className="   w-full  bg-hero-pattern ">
        {/* <Image src="/img/bgHero.jpg" alt="" width={1920} height={1080}  ></Image> */}

        <section className=" bg-base-300 relative  mt-8  h-[800px] rounded-xl   py-4  max-w-screen-2xl  mx-auto px-4   ">
    
            <div
              className="absolute inset-0 top-[120px]  max-w-7xl mx-auto sm:px-16 px-6  flex flex-row items-start gap-5"
            >
              <div className="flex flex-col justify-center items-center mt-5">
                <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
                <div className="w-1 sm:h-80 h-40 bg-[#915EFF]  " />
              </div>

              <div>
                <h1 className=" font-black  lg:text-[50px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2  text-white">
                  Welcome to our   <span className="text-[#915EFF]"> community</span>
                </h1>
                <p className=" text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]  mt-2 text-white-100">
                  Make change <br className="sm:block hidden" />
                  let's change the word
                </p>
              </div>
            </div>

            <ComputersCanvas />
        </section>

        <section className=" mt-8  rounded-xl   pt-4  max-w-screen-2xl  mx-auto px-4   ">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="w-full mx-auto flex lg:flex-row flex-col gap-8  "
          >
            <motion.div
              variants={planetVariants("left")}
              className="flex items-center justify-center flex-1 "
            >
              <Image src={Logo} className="w-[90%] h-[90%] object-contain" />
            </motion.div>

            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="flex-[0.75] flex justify-center flex-col"
            >
              
              <TypingText title="The goal of the community." />

              {/* <h1>sdfsd</h1> */}
              <TitleText title={<>What will you do by joining us ?</>} />
              <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
                {startingFeatures.map((feature, index) => (
                  <StartSteps
                    key={feature}
                    number={`${index < 10 ? "0" : ""} ${index + 1}`}
                    text={feature}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
