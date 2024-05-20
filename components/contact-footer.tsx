"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { BsDribbble, BsLinkedin } from "react-icons/bs";
import { FaBehance, FaGithub, FaMedium } from "react-icons/fa";

export default function ContactFooter() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-0 sm:mb-0 w-full text-center pt-24 bg-[#1A2A48]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:amarasiriwardenar@gmail.com">
          amarasiriwardenar@gmail.com
        </a>{" "}
      </p>

      
      <div className="flex gap-4 mt-12 justify-center mb-20 sm:mb-28">
        <a
          className="bg-white p-4 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white"
          href="https://www.linkedin.com/in/raveena-amarasiriwardena/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
          href="https://github.com/raveena69"
          target="_blank"
        >
          <FaGithub />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
          href="https://medium.com/@raveenaamarasiriwardena"
          target="_blank"
        >
          <FaMedium />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
          href="https://www.behance.net/amarasiriwardenar"
          target="_blank"
        >
          <FaBehance />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
          href="https://dribbble.com/Amarasiriwardena"
          target="_blank"
        >
          <BsDribbble />
        </a>
      </div>
      
      <footer className="pb-10 px-4 text-center text-gray-500">
        <small className="mb-2 block text-xs">
          &copy; 2024 Raveena Amarasiriwardena. All rights reserved.
        </small>
      </footer>
    </motion.section>
  );
}
