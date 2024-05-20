"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { familiarWithData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function FamiliarWith() {
  const { ref } = useSectionInView("Tools");

  return (
    <section
      id="familiarWith"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>I am Familiar With</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {familiarWithData.map((familiarWith, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 flex gap-2 bg-white/10 text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
          <Image src={familiarWith.tool} alt="logo" 
          height={20} width={20} />
          {familiarWith.toolName}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
