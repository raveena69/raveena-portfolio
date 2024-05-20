"use client";

import { useRef } from "react";
import Image from "next/image";
import sevenPhotography from "@/public/projects/seven-photography.png";
import travelor from "@/public/projects/travelor.jpg";
import h2oArchitects from "@/public/projects/h2o-architects.png";
import beat from "@/public/projects/beat-mobile-app.png";
import linkMobileApp from "@/public/projects/link-mobile-app.jpg";
import theMilkShop from "@/public/projects/the-milk-shop.png";
import apexBank from "@/public/projects/apex-bank.png";
import plante from "@/public/projects/plante.jpg";
import { motion} from "framer-motion";
import { FaBehance, FaDribbble, FaGithub, FaGoogle } from "react-icons/fa";
import SectionHeading from "@/components/section-heading";
import Header from "@/app/project-list/header";

export default function ProjectList() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="mb-32 mt-24">
      <Header/>
      <SectionHeading>
        <h1 className="mb-24 xs:mb-16 md:mb-18 lg:mb-24">My projects </h1>
      </SectionHeading>

      <motion.div
        ref={ref}
        className="mb-3 sm:mb-0 lg:mb-0"
      >

        {/* First Row Start */}

        <div className="w-full flex xs:flex-col lg:flex-row gap-6 items-center justify-center
        xs:px-4 md:px-0">
          <section className="group bg-gray-100 max-w-[24rem] border border-black/5 rounded-lg overflow-hidden sm:p-8
          relative sm:h-[38rem] hover:bg-gray-200 transition text-white
          bg-white/10 hover:bg-white/20">
            <Image
              src={sevenPhotography}
              alt="Project I worked on"
              quality={95}
              className="sm:block rounded-t-lg shadow-2xl scale-[1] group-hover:scale-[1.05] h-[12rem] object-fill"
              />

            <div className="pt-0 pb-7 px-5 sm:pl-0 sm:pr-0 sm:pt-10 sm:max-w-[100%] flex flex-col gap-2 h-full">
              <h3 className="text-2xl font-semibold">My Portfolio</h3>
              <p className="mt-0 leading-relaxed text-gray-700 text-white/70 h-36">
              This is a mobile responsive website which I create to show my progress so far as UI/UX Engineer. Website is develop using on Nextjs, TailwindCSS and the official website is deployed using vercel.
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

          <section className="group bg-gray-100 max-w-[24rem] border border-black/5 rounded-lg overflow-hidden sm:p-8
          relative sm:h-[38rem] hover:bg-gray-200 transition text-white
          bg-white/10 hover:bg-white/20">
            <Image
              src={sevenPhotography}
              alt="Project I worked on"
              quality={95}
              className="sm:block rounded-t-lg shadow-2xl scale-[1] group-hover:scale-[1.05] h-[12rem] object-fill"
              />

            <div className="pt-0 pb-7 px-5 sm:pl-0 sm:pr-0 sm:pt-10 sm:max-w-[100%] flex flex-col gap-2 h-full">
              <h3 className="text-2xl font-semibold">Seven Photography</h3>
              <p className="mt-0 leading-relaxed text-gray-700 text-white/70 h-36">
              This is a Photographer Portfolio website develop for startup professional photographer. Website is develop using on Vuejs, Bootstrap and the official website is deployed using netlify.
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

          <section className="group bg-gray-100 max-w-[24rem] border border-black/5 rounded-lg overflow-hidden sm:p-8
          relative sm:h-[38rem] hover:bg-gray-200 transition text-white
          bg-white/10 hover:bg-white/20">
            <Image
              src={theMilkShop}
              alt="Project I worked on"
              quality={95}
              className="sm:block rounded-t-lg shadow-2xl scale-[1] group-hover:scale-[1.05] h-[12rem] object-cover"
              />

            <div className="pt-0 pb-7 px-5 sm:pl-0 sm:pr-0 sm:pt-10 sm:max-w-[100%] flex flex-col gap-2 h-full">
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

        {/* First Row End */}

        {/* Second Row Start */}

        <div className="w-full flex xs:flex-col lg:flex-row gap-6 items-center justify-center mt-4
        xs:px-4 md:px-0">
          <section className="group bg-gray-100 max-w-[24rem] border border-black/5 rounded-lg overflow-hidden sm:p-8
          sm:h-[38rem] hover:bg-gray-200 transition text-white
          bg-white/10 hover:bg-white/2">
            <Image
              src={h2oArchitects}
              alt="Project I worked on"
              quality={95}
              className="sm:block rounded-t-lg shadow-2xl scale-[1] group-hover:scale-[1.05] h-[12rem] object-fill"
              />

            <div className="pt-0 pb-7 px-5 sm:pl-0 sm:pr-0 sm:pt-10 sm:max-w-[100%] flex flex-col gap-4 h-full">
              <h3 className="text-2xl font-semibold">H2O Architects</h3>
              <p className="mt-0 leading-relaxed text-gray-700 text-white/70 h-32">
              This UI Design created using Figma and the ui designs ara available in Dribbble and Behance.
              </p>
              <ul className="flex flex-wrap mt-4 gap-2 h-6">
                  <li
                    className="bg-black/[0.7] h-[1.6rem] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full text-white/70"

                  >Figma
                  </li>
              </ul>

              <div className="flex flex-row gap-4 mt-3">
                <a
                  className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
                  href="https://dribbble.com/shots/23964648-H2O-Architects-Architectural-company-Landing-Page"
                  target="_blank"
                >
                  <FaDribbble />
                </a>
                <a
                  className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
                  href="https://www.behance.net/gallery/195676089/H2O-Architects-Architectural-company-Landing-Page"
                  target="_blank"
                >
                  <FaBehance />
                </a>
              </div>
            </div>
          </section>

          <section className="group bg-gray-100 max-w-[24rem] border border-black/5 rounded-lg overflow-hidden sm:p-8
          relative sm:h-[38rem] hover:bg-gray-200 transition text-white
          bg-white/10 hover:bg-white/20">
            <Image
              src={travelor}
              alt="Project I worked on"
              quality={95}
              className="sm:block rounded-t-lg shadow-2xl scale-[1] group-hover:scale-[1.05]  h-[12rem] object-fill"
              />

            <div className="pt-0 pb-7 px-5 sm:pl-0 sm:pr-0 sm:pt-10 sm:max-w-[100%] flex flex-col gap-4 h-full">
              <h3 className="text-2xl font-semibold">Travelor</h3>
              <p className="mt-0 leading-relaxed text-gray-700 text-white/70 h-32">
              This UI Design created using Figma and the ui designs ara available in Dribbble and Behance.
              </p>
              <ul className="flex flex-wrap mt-4 gap-2 h-6">
                  <li
                    className="bg-black/[0.7] h-[1.6rem] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full text-white/70"

                  >Figma
                  </li>
              </ul>

              <div className="flex flex-row gap-4 mt-3">
                <a
                  className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
                  href="https://dribbble.com/shots/21389086-Travelor-Travel-Destinations-Online-Booking-Landing-Page"
                  target="_blank"
                >
                  <FaDribbble />
                </a>
                <a
                  className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
                  href="https://www.behance.net/gallery/169954821/Travelor-Travel-Destinations-Booking-Landing-Page"
                  target="_blank"
                >
                  <FaBehance />
                </a>
              </div>
            </div>
          </section>

          <section className="group bg-gray-100 max-w-[24rem] border border-black/5 rounded-lg overflow-hidden sm:p-8
          relative sm:h-[38rem] hover:bg-gray-200 transition text-white
          bg-white/10 hover:bg-white/20">
            <Image
              src={plante}
              alt="Project I worked on"
              quality={95}
              className="sm:block rounded-t-lg shadow-2xl scale-[1] group-hover:scale-[1.05]  h-[12rem] object-cover"
              />

            <div className="pt-0 pb-7 px-5 sm:pl-0 sm:pr-0 sm:pt-10 sm:max-w-[100%] flex flex-col gap-4 h-full">
              <h3 className="text-2xl font-semibold">Plante</h3>
              <p className="mt-0 leading-relaxed text-gray-700 text-white/70 h-32">
              This UI Design created using Adobe Xd and the ui designs ara available in Dribbble and Behance.
              </p>
              <ul className="flex flex-wrap mt-4 gap-2 h-6">
                  <li
                    className="bg-black/[0.7] h-[1.6rem] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full text-white/70"

                  >Adobe Xd
                  </li>
              </ul>

              <div className="flex flex-row gap-4 mt-3">
                <a
                  className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
                  href="https://dribbble.com/shots/20341019-Plante-Online-Plants-Order-and-Delivery-Landing-Page"
                  target="_blank"
                >
                  <FaDribbble />
                </a>
                <a
                  className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
                  href="https://www.behance.net/gallery/164767609/Plante-Online-Plants-Order-and-Delivery-Landing-Page"
                  target="_blank"
                >
                  <FaBehance />
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Second Row End */}

        {/* Third Row Start */}

        <div className="w-full flex xs:flex-col lg:flex-row gap-6 items-center justify-center mt-4
        xs:px-4 md:px-0">

          <section className="group bg-gray-100 max-w-[24rem] border border-black/5 rounded-lg overflow-hidden sm:p-8
          relative sm:h-[38rem] hover:bg-gray-200 transition text-white
          bg-white/10 hover:bg-white/20">
            <Image
              src={apexBank}
              alt="Project I worked on"
              quality={95}
              className="sm:block rounded-t-lg shadow-2xl scale-[1] group-hover:scale-[1.05]  h-[12rem] object-cover"
              />

            <div className="pt-0 pb-7 px-5 sm:pl-0 sm:pr-0 sm:pt-10 sm:max-w-[100%] flex flex-col gap-4 h-full">
              <h3 className="text-2xl font-semibold">Apex Bank - Mobile Banking App</h3>
              <p className="mt-0 leading-relaxed text-gray-700 text-white/70 h-24">
              This UI Design created using Adobe Xd and the ui designs ara available in Dribbble and Behance.
              </p>
              <ul className="flex flex-wrap mt-4 gap-2 h-6">
                  <li
                    className="bg-black/[0.7] h-[1.6rem] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full text-white/70"

                  >Adobe Xd
                  </li>
              </ul>

              <div className="flex flex-row gap-4 mt-3">
                <a
                  className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
                  href="https://dribbble.com/shots/19647244-Apex-Bank-Mobile-Banking-App"
                  target="_blank"
                >
                  <FaDribbble />
                </a>
              </div>
            </div>
          </section>

          <section className="group bg-gray-100 max-w-[24rem] border border-black/5 rounded-lg overflow-hidden sm:p-8
          relative sm:h-[38rem] hover:bg-gray-200 transition text-white
          bg-white/10 hover:bg-white/20">
            <Image
              src={beat}
              alt="Project I worked on"
              quality={95}
              className="sm:block rounded-t-lg shadow-2xl scale-[1] group-hover:scale-[1.05]  h-[12rem] object-fill"
              />

            <div className="pt-0 pb-7 px-5 sm:pl-0 sm:pr-0 sm:pt-10 sm:max-w-[100%] flex flex-col gap-4 h-full">
              <h3 className="text-2xl font-semibold">Beat Play Station - Mobile App</h3>
              <p className="mt-0 leading-relaxed text-gray-700 text-white/70 h-24">
              This UI Design created using Adobe Xd and the ui designs ara available in Dribbble and Behance.
              </p>
              <ul className="flex flex-wrap mt-4 gap-2 h-6">
                  <li
                    className="bg-black/[0.7] h-[1.6rem] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full text-white/70"

                  >Adobe Xd
                  </li>
              </ul>

              <div className="flex flex-row gap-4 mt-3">
                <a
                  className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
                  href="https://dribbble.com/shots/18791846-Beat-Play-Station"
                  target="_blank"
                >
                  <FaDribbble />
                </a>
              </div>
            </div>
          </section>


          <section className="group bg-gray-100 max-w-[24rem] border border-black/5 rounded-lg overflow-hidden sm:p-8
          sm:h-[38rem] hover:bg-gray-200 transition text-white
          bg-white/10 hover:bg-white/2">
            <Image
              src={linkMobileApp}
              alt="Project I worked on"
              quality={95}
              className="sm:block rounded-t-lg shadow-2xl scale-[1] group-hover:scale-[1.05] h-[12rem] object-fill"
              />

            <div className="pt-0 pb-7 px-5 sm:pl-0 sm:pr-0 sm:pt-10 sm:max-w-[100%] flex flex-col gap-4 h-full">
              <h3 className="text-2xl font-semibold">Link Chat App - Mobile App</h3>
              <p className="mt-0 leading-relaxed text-gray-700 text-white/70 h-32">
              This UI Design created using Figma and the ui designs ara available in Dribbble and Behance.
              </p>
              <ul className="flex flex-wrap mt-4 gap-2 h-6">
                  <li
                    className="bg-black/[0.7] h-[1.6rem] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full text-white/70"

                  >Figma
                  </li>
              </ul>

              <div className="flex flex-row gap-4 mt-3">
                <a
                  className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
                  href="https://dribbble.com/shots/18850041-Link-Chat-App"
                  target="_blank"
                >
                  <FaDribbble />
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Third Row End */}


      </motion.div>


    </div>
  );
}
