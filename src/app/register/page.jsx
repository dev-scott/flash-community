"use client";

import React from "react";
import { motion } from "framer-motion";
import EarthCanvas from "@/components/canvas/Earth";
import { slideIn } from "@/utils/motion";

const Register = () => {
  return (
    <div className="w-full ">
      <div
        className={`xl:mt-12 max-w-screen-2xl  mx-auto px-4  flex justify-between xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl bg-base- "
        >
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            Get in touch
          </p>
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Register .
          </h3>

          <form
            // ref={formRef}
            // onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="text"
                name="name"
                // value={form.name}
                // onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-base-200 py-4 px-6 placeholder:text-base-content text-white rounded-lg outline-none   border-2 font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Password</span>
              <input
                type="email"
                name="email"
                // value={form.email}
                // onChange={handleChange}
                placeholder="What's your password ?"
                className="bg-base-200  py-4 px-6 placeholder:text-base-content text-white rounded-lg outline-none  border-2 font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Password</span>
              <input
                type="password"
                name="password"
                // value={form.email}
                // onChange={handleChange}
                placeholder="What's your password ?"
                className="bg-base-200  py-4 px-6 placeholder:text-base-content text-white rounded-lg outline-none  border-2 font-medium"
              />
            </label>
            {/* <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                // value={form.message}
                // onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-base-100 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label> */}

            <button
              type="submit"
              className=" w-full bg-base-content py-3 px-8 rounded-xl outline-none  text-white font-bold hover:bg-base-100"
            >
              Login
            </button>
      
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
