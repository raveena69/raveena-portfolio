"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import SectionHeading from "./section-heading";
import ProfileImage from "../public/profile-image.jpg";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="xs:mt-24 lg:mt-20 xs:mb-0 md:mb-0 lg:mb-52 max-w-full text-center scroll-mt-[100rem]
                flex xs:flex-col xl:flex-row"
    >

      <div className="flex items-center justify-center w-1/2 xs:w-full xl:w-1/2
       xs:mb-12 xl:mb-0">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={ProfileImage}
              alt="Raveena portrait"
              width="2092"
              height="2092"
              quality="95"
              priority={true}
              className="xs:h-48 xs:w-48 md:h-[31rem] md:w-[31rem] rounded-3xl object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>
        
      <motion.div
        ref={ref}
        className="mb-0 max-w-[75rem] xs:px-8 md:px-24 xl:pl-0 xl:pr-16 text-left xs:text-center xl:text-left 
        leading-8 xs:mb-40 lg:mb-0 scroll-mt-28 w-1/2 xs:w-full xl:w-1/2"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
      >
        <SectionHeading>
          <div className="text-left xs:text-center xl:text-left">
            Welcome to my Portfolio!
          </div>
        </SectionHeading>

        
        <p className="mb-3">

          I&apos;m <span className="font-semibold">Raveena Amarasiriwardena</span>, 
          a passionate UI UX Engineer based in Sri Lanka. 
          <span className="italic">When I'm not coding</span>, I enjoy playing
          games, watching movies, and listening to music. I also enjoy{" "}
          <span className="font-medium">learning new things</span>. I am currently
          learning about{" "}
          <span className="font-medium">new trends in UX and tailwind CSS</span>.
        </p>

        <p className="mb-3">
          I&apos;m an energetic, ambitious individual passionate about UI/UX design and frontend development. 
          As a team player, I thrive on collaborating with diverse talents to achieve shared goals. 
          My enthusiasm drives me to constantly learn new technologies and tools, 
          aiming for professionalism and growth in the IT industry.
          I am also familiar with Figma and Adobe XD. I am always looking to
          learn new technologies. 
        </p>

        <p>
          <span className="italic">
          Explore my web development journey, 
          where creativity converges with functionality. 
          Dive into a world where innovation thrives and solutions come to life through code and design.
          </span>
        </p>

        <motion.div
          className="flex flex-col xs:flex-col lg:flex-row items-center 
          xs:justify-center xl:justify-start justify-center gap-4 px-4 text-lg font-medium mt-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <div className="flex">            
            <Link 
              href="#contact"
              className="inline-flex items-center justify-center px-3 py-2 mt-5 mb-0 h-14 w-52 text-sm font-medium text-center text-white bg-green-600 
              border-2 border-gray-800 hover:border-green-600 hover:bg-green-500 rounded-lg hover:scale-110" onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me here{" "}
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </Link>
          </div>

        </motion.div>
      </motion.div>
    </section>
  );
}
