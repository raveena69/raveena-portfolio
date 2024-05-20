"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import {
  Bars3Icon,
} from "@heroicons/react/24/outline";

import { useState } from "react";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[5.5rem] w-full rounded-none shadow-lg
          shadow-black/[0.03] backdrop-blur-[0.5rem] md:w-full sm:top-6  md:top-0
          xs:h-[3.45rem] sm:w-[36rem] xs:px-0 lg:px-6 bg-gray-950 bg-opacity-75 m7-3"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >

        <nav className='lg:mb-3'>
          <div className="w-full xs:pt-1 xs:pb-0 xs:px-4 lg:pb-0 lg:pt-1">
            <div className="flex justify-between items-center min-w-full ">
              {/* Primary menu and logo */}
              <div className="flex items-center w-full justify-between lg:mx-auto">
                {/* logo */}
                <div className="h-8">
                  <Link
                    href="/"
                    className="flex gap-1 font-bold text-gray-700 items-center"
                  >
                    <span className=' text-white h-10 w-10 rounded-full bg-green-600 flex text-center items-center justify-center mt-1'>RA</span>
                  </Link>
                </div>

                {/* primary */}
                <div className="flex items-center justify-center gap-2">
                  {links.map((link) => (
                  <div className="hidden lg:flex gap-8 h-8" key={link.hash}>
                    <Link className={clsx(
                      "flex w-full items-center justify-center px-3 py-3 my-2 h-8 transition text-white rounded-lg hover:text-green-400",
                      {
                        "text-green-600 h-8":
                          activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}
                  </Link>
                  </div>
                ))}
                </div>

                </div>
              {/* secondary */}
              <div className="flex lg:hidden gap-6">
                <div className=" h-2">
                  <button onClick={() => setToggleMenu(!toggleMenu)}>
                    <Bars3Icon className="h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* mobile navigation */}
          <div
            className={`fixed z-40 w-full text-purple-900  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 mt-[18px] ${
              !toggleMenu ? "h-0" : "min-h-screen"
            }`}
          >
            <div className="p-8 border-b-[0.1px] border-white">
              <div className="flex flex-col gap-8 min-w-min font-bold tracking-wider">
              {links.map((link) => (
                  <Link key={link.hash} className={clsx(
                    "flex lg:items-center lg:justify-center px-3 py-3 my-2 xs:h-12 lg:h-8 transition text-gray-500 hover:text-green-400 rounded-lg xs:flex-row lg:hidden gap-8 min-w-min",
                    {
                      "text-green-600 h-8":
                        activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                </Link>
              ))}
              </div>
            </div>
              {/* secondary */}
          </div>
        </nav>


      </motion.div>
    </header>
  );
}
