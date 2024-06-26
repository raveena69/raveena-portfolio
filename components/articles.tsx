"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import "react-vertical-timeline-component/style.min.css";
import { articlesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import {motion} from "framer-motion"
import Link from "next/link";

export default function Articles() {
  const { ref } = useSectionInView("Articles");

  return (
    
    <motion.section id="articles" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 flex flex-col justify-center items-center"
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.175}}
    whileInView="animate"
    >

      <SectionHeading>Latest Articles</SectionHeading>
      <div className="flex xs:flex-col xl:flex-row gap-12 xs:px-4 md:px-0">
      {articlesData.map((item, index) => (
          <React.Fragment key={index}>
          <div className="xs:w-[22rem] md:w-[36rem] xl:w-[24rem] mx-2 bg-white rounded-xl bg-white/10 text-white/80">
            <Link href={item.linkUrl} target="_blank">
              <Image className="rounded-t-lg h-[175px] w-full object-fill" src={item.imageUrl} alt="" 
              height={175}
              width={175}/>
            </Link>
            <div className="p-5">
              <Link href={item.linkUrl} target="_blank">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-white h-24 flex items-start">{item.title}</h5>
              </Link>
              <p className="mb-3 text-md font-normal text-gray-400 h-44">{item.description}</p>
              <Link href={item.linkUrl} target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-green-600 hover:bg-green-500 focus:ring-green-500">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </Link>
              
            </div>
          </div>
        </React.Fragment>
      ))}

      </div>

      <Link href="https://medium.com/@raveenaamarasiriwardena" target="_blank"
        className="inline-flex items-center justify-center px-3 py-2 mt-8 h-14 w-52 text-sm font-medium text-center text-white bg-green-600 
         hover:border-green-600 hover:bg-green-500 rounded-lg hover:scale-110" >
          Explore more
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </Link>

    </motion.section>
  );
}
