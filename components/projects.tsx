"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 lg:gap-10 flex flex-col justify-center items-center">
      <SectionHeading>My projects</SectionHeading>
      <Project />

      <Link href="/project-list" target="_blank"
        className="inline-flex items-center justify-center px-3 py-2 xs:mt-6 lg:mt-0 mb-16 h-14 w-52 text-sm font-medium text-center text-white bg-green-600 
        border-2 border-gray-800 hover:border-green-600 hover:bg-green-500 rounded-lg hover:scale-110" >
          Explore more
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </Link>
    </section>
  );
}
