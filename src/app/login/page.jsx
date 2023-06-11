"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import EarthCanvas from "@/components/canvas/Earth";
import { slideIn } from "@/utils/motion";
// import { signIn } from "next-auth/react";
import { signIn, useSession } from "next-auth/react";

const Login = () => {
  const session = useSession();

  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/hackathon");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };

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
            Login.
          </h3>

          <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                placeholder="What's your web address?"
                className="bg-base-200 py-4 px-6 placeholder:text-base-content text-white rounded-lg outline-none   border-2 font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Password</span>
              <input
                type="password"
                placeholder="What's your password ?"
                className="bg-base-200  py-4 px-6 placeholder:text-base-content text-white rounded-lg outline-none  border-2 font-medium"
              />
            </label>

            <button className=" w-full bg-base-content py-3 px-8 rounded-xl outline-none  text-white font-bold hover:bg-base-100">
              Login
            </button>

            {error && error}
          </form>

          <button
            onClick={() => {
              signIn("google");
            }}
            className=" w-full bg-[#ED9B40] py-3 mt-6 px-8 rounded-xl outline-none  text-white font-bold hover:bg-[#61421e] transition-all duration-300"
          >
            Google
          </button>
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

export default Login;
