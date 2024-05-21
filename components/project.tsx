"use client";

import { useRef } from "react";
import Image from "next/image";
import raveenaPortfolio from "@/public/projects/raveena-portfolio.png";
import sevenPhotography from "@/public/projects/seven-photography.png";
import theMilkShop from "@/public/projects/the-milk-shop.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaBehance, FaDribbble, FaGithub, FaGoogle } from "react-icons/fa";


export default function Project() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 0.15], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="mb-3 sm:mb-0 lg:mb-0 w-full"
    >
    

    <div className="w-full flex xs:flex-col 2xl:lg:flex-row gap-6 items-center justify-center xs:px-6 md:px-0">
          <section className="group bg-gray-100 xs:w-[22rem] md:w-[36rem] xl:w-[24rem] border border-black/5 rounded-lg overflow-hidden sm:p-8
          relative sm:h-[38rem] hover:bg-gray-200 transition text-white
          bg-white/10 hover:bg-white/20">
            <Image
              src={raveenaPortfolio}
              alt="Project I worked on"
              quality={95}
              className="sm:block rounded-t-lg shadow-2xl scale-[1] group-hover:scale-[1.05] h-[12rem] object-cover"
              />

            <div className="xs:mt-8 md:mt-0 pb-7 px-5  sm:pl-0 sm:pr-0 sm:pt-10 sm:max-w-[100%] flex flex-col gap-2 h-full">
              <h3 className="text-2xl font-semibold">My Portfolio</h3>
              <p className="mt-0 leading-relaxed text-gray-700 text-white/70 h-36">
              This is a mobile responsive website which I create to show my progress so far as UI/UX Engineer. Website is developed using Nextjs, TailwindCSS and the official website is deployed using vercel.
              </p>
              <ul className="flex flex-wrap mt-4 gap-2">
                  <li
                    className="bg-black/[0.7] h-[1.6rem] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full text-white/70"

                  >Next JS
                  </li>
                  <li
                    className="bg-black/[0.7] h-[1.6rem] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full text-white/70"

                  >Tailwind
                  </li>
                  <li
                    className="bg-black/[0.7] h-[1.6rem] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full text-white/70"

                  >Figma
                  </li>
                  <li
                    className="bg-black/[0.7] h-[1.6rem] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full text-white/70"

                  >Vercel
                  </li>
              </ul>

              <div className="flex flex-row gap-4 mt-3">
                <a
                  className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
                  href="https://github.com/raveena69/raveena-portfolio"
                  target="_blank"
                >
                  <FaGithub />
                </a>
                <a
                  className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
                  href="https://dribbble.com/shots/24213809-Raveena-Amarasiriwardena-Portfolio"
                  target="_blank"
                >
                  <FaDribbble />
                </a>
                <a
                  className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
                  href="https://www.behance.net/gallery/199152921/Raveena-Amarasiriwardena-Portfolio"
                  target="_blank"
                >
                  <FaBehance />
                </a>
                <a
                  className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
                  href="https://raveena-amarasiriwardena.vercel.app/"
                  target="_blank"
                >
                  <FaGoogle />
                </a>
              </div>
            </div>
          </section>

          <section className="group bg-gray-100  xs:w-[22rem] md:w-[36rem] xl:w-[24rem] border border-black/5 rounded-lg overflow-hidden sm:p-8
          relative sm:h-[38rem] hover:bg-gray-200 transition text-white
          bg-white/10 hover:bg-white/20">
            <Image
              src={sevenPhotography}
              alt="Project I worked on"
              quality={95}
              className="sm:block rounded-t-lg shadow-2xl scale-[1] group-hover:scale-[1.05] h-[12rem] object-fill"
              />

            <div className="xs:mt-8 md:mt-0 pt-0 pb-7 px-5 sm:pl-0 sm:pr-0 sm:pt-10 sm:max-w-[100%] flex flex-col gap-2 h-full">
              <h3 className="text-2xl font-semibold">Seven Photography</h3>
              <p className="mt-0 leading-relaxed text-gray-700 text-white/70 h-36">
              This is a Photographer Portfolio website develop for startup professional photographer. Website is developed using Vuejs, Bootstrap and the official website is deployed using netlify.
              </p>
              <ul className="flex flex-wrap mt-4 gap-2">
                  <li
                    className="bg-black/[0.7] h-[1.6rem] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full text-white/70"

                  >Vue
                  </li>
                  <li
                    className="bg-black/[0.7] h-[1.6rem] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full text-white/70"

                  >Bootstrap
                  </li>
                  <li
                    className="bg-black/[0.7] h-[1.6rem] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full text-white/70"

                  >Figma
                  </li>
                  <li
                    className="bg-black/[0.7] h-[1.6rem] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full text-white/70"

                  >Netlify
                  </li>
              </ul>

              <div className="flex flex-row gap-4 mt-3">
                <a
                  className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
                  href="https://github.com/raveena69/seven-photography"
                  target="_blank"
                >
                  <FaGithub />
                </a>
                <a
                  className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
                  href="https://dribbble.com/shots/22576292-Seven-Photography-Photographer-Portfolio"
                  target="_blank"
                >
                  <FaDribbble />
                </a>
                <a
                  className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
                  href="https://www.behance.net/gallery/180130805/Seven-Photography"
                  target="_blank"
                >
                  <FaBehance />
                </a>
                <a
                  className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
                  href="https://seven-photography.netlify.app/"
                  target="_blank"
                >
                  <FaGoogle />
                </a>
              </div>
            </div>
          </section>

          <section className="group bg-gray-100 xs:w-[22rem] md:w-[36rem] xl:w-[24rem] border border-black/5 rounded-lg overflow-hidden sm:p-8
          relative sm:h-[38rem] hover:bg-gray-200 transition text-white
          bg-white/10 hover:bg-white/20">
            <Image
              src={theMilkShop}
              alt="Project I worked on"
              quality={95}
              className="sm:block rounded-t-lg shadow-2xl scale-[1] group-hover:scale-[1.05] h-[12rem] object-cover"
              />

            <div className="xs:mt-8 md:mt-0 pt-0 pb-7 px-5 sm:pl-0 sm:pr-0 sm:pt-10 sm:max-w-[100%] flex flex-col gap-2 h-full">
              <h3 className="text-2xl font-semibold">The Milk Shop</h3>
              <p className="mt-0 leading-relaxed text-gray-700 text-white/70 h-36">
              This is my very first website which I created using html and css.
              </p>
              <ul className="flex flex-wrap mt-4 gap-2">
                  <li
                    className="bg-black/[0.7] h-[1.6rem] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full text-white/70"

                  >HTML
                  </li>
                  <li
                    className="bg-black/[0.7] h-[1.6rem] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full text-white/70"

                  >CSS
                  </li>
              </ul>

              <div className="flex flex-row gap-4 mt-3">
                <a
                  className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
                  href="https://github.com/raveena69/The-Milk-Shop"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </section>
        </div>
    </motion.div>
  );
}
