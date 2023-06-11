"use client";

import React, { useEffect, useState } from "react";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import Image from "next/image";
import Logo from "public/img/logo.png";
import Link from "next/link";
import { themeChange } from "theme-change";

import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";


const Navbar = () => {
  const [currentTheme, setCurrentTheme] = useState(null);

  const logOut = () => {};

  useEffect(() => {
    themeChange(false);

    console.log(currentTheme);

    if (currentTheme === null) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-schema:dark)").matches
      ) {
        setCurrentTheme("night");
      } else {
        setCurrentTheme("light");
      }
    }
  }, []);

  return (
    <div className=" w-full bg-base-300 ">


    <div className="  max-w-screen-2xl mx-auto px-4 sm:px-6  py-2 w-full flex items-center justify-between  ">
      <div>
        <div>
          <Link href="/" >
          <Image
            className="rounded-full"
            src={Logo}
            alt="Picture of the author"
            width={50}
            height={50}
          />
          </Link>
        </div>
      </div>
      <motion.div  className="" variants={navVariants} initial="hidden" whileInView="show" >
        <ul className=" hidden  menu bg-base-200 lg:menu-horizontal text-base-content rounded-box">
          <li>
            <Link href="/blog">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Blog
              <span className="badge badge-sm">99+</span>
            </Link>
          </li>
          <li>
            <Link href="/projet">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Projets
              <span className="badge badge-sm badge-warning">NEW</span>
            </Link>
          </li>
          <li>
            <Link href="/hackathon">
              Hackathon
              <span className="badge badge-xs badge-info"></span>
            </Link>
          </li>
        </ul>
      </motion.div>

      <div className="flex items-center text-base-content ">
        <div className="login flex items-center  lg:flex ">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* sun icon */}
            <svg
              className="swap-on fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-set-theme="light"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-set-theme="night"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          <button className=" ml-2 btn btn-ghost"> <Link href="/dashboard" > Login / Dashboard </Link> </button>
        </div>

        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
            <Bars3Icon className="h-5 inline-block w-5" />
          </label>
        </div>
      </div>
    </div>

    </div>

  );
};

export default Navbar;
