"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { StartSteps, TypingText, TitleText } from "@/components";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import Logo from "public/img/logo.png";
import { startingFeatures } from "@/utils/data";

export default function Home() {
  return (
    <>
      <div className="   w-full  bg-{hero-pattern} ">
        {/* <Image src="/img/bgHero.jpg" alt="" width={1920} height={1080}  ></Image> */}
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
              <TypingText title="| How Metaversus Works" />
              <TitleText title={<>Get started with just a few clicks</>} />
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
