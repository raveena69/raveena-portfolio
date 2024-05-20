import React from "react";
import { FaChartLine, FaFigma, FaHtml5, FaReact, FaSass, FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import article1 from "@/public/article1.jpg";
import article2 from "@/public/article2.jpg";
import article3 from "@/public/article3.jpg";

import html5 from "@/public/skills/html5.svg"
import css from "@/public/skills/css.svg"
import sass from "@/public/skills/sass.svg"
import javaScript from "@/public/skills/javaScript.svg"
import react from "@/public/skills/react.svg"
import nextjs from "@/public/skills/nextjs_icon_dark.svg"
import angularjs from "@/public/skills/angular.svg"
import vuetify from "@/public/skills/vuetify.svg"
import vue from "@/public/skills/vue.svg"
import tailwindcss from "@/public/skills/tailwindcss.svg"
import bootstrap from "@/public/skills/bootstrap.svg"
import wordPress from "@/public/skills/wordPress.svg"
import joomla from "@/public/skills/joomla.svg"
import framerMotion from "@/public/skills/Framer_light.svg"

import vsCode from "@/public/tools/visual-studio-code.svg"
import visualStudio from "@/public/tools/visual-studio-icon.svg"
import adobeIllustrator from "@/public/tools/illustrator.svg"
import adobePhotoshop from "@/public/tools/photoshop.svg"
import figma from "@/public/tools/figma.svg"
import adobeXD from "@/public/tools/adobe-xd.svg"
import lunacy from "@/public/tools/lunacy.svg"
import drawIo from "@/public/tools/drawIo.svg"
import git from "@/public/tools/git.svg"
import github from "@/public/tools/github.svg"
import netlify from "@/public/tools/netlify.svg"
import vercel from "@/public/tools/Vercel_light.svg"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  // {
  //   name: "About",
  //   hash: "#about",
  // },
  // {
  //   name: "Education",
  //   hash: "#education",
  // },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Tools",
    hash: "#familiarWith",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Articles",
    hash: "#articles",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const links1 = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "Projects",
    hash: "/project-list",
  },
  {
    name: "Skills",
    hash: "/",
  },
  {
    name: "Tools",
    hash: "/",
  },
  {
    name: "Experience",
    hash: "/",
  },
  {
    name: "Articles",
    hash: "/",
  },
  {
    name: "Contact",
    hash: "/",
  },
] as const;

export const experiencesData = [
  {
    id: 1,
    title: "Intern Software Engineer",
    location: "Sri Lanka",
    description:
      "I started my career as Intern Software Engineer in VizuaMatix Pvt, Sri Lanka. I am mainly worked on frontend and used vuejs and vuetify for development.",
    icon: React.createElement(FaVuejs),
    date: "2021 August - 2022 February",
  },
  {
    id: 2,
    title: "Trainee Software Engineer",
    location: "Sri Lanka",
    description:
      "In VizuaMatix Pvt I had worked another two months as Trainee Software Engineer.",
    icon: React.createElement(FaChartLine),
    date: "2022 February - 2022 March",
  },
  {
    id: 3,
    title: "Graduated - Software Engineering",
    location: "Sri Lanka",
    description:
      "I am graduated from Sri Lanka Institute of Information Technology in BSc. (Hons) Information Technology specializing in Software Engineering Software Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 February - 2023 March",
  },
  {
    id: 4,
    title: "Junior UI/UX Designer",
    location: "Remote",
    description:
      "I worked at Webocean as a Junior UI/UX Designer and role is mainly based on working with Figma and designing UI component.",
    icon: React.createElement(FaFigma),
    date: "2023 March - 2023 June",
  },
  {
    id: 5,
    title: "Trainee UI/UX Engineer",
    location: "Sri Lanka",
    description:
      "As an Trainee UI/UX Engineer I had started work at i-Context Pvt, Sri lanka. Role is based on developing user interface according to the wireframes and make the mobile responsive development for those user interfaces.",
    icon: React.createElement(FaSass),
    date: "2023 June - 2024 January",
  },
  {
    id: 6,
    title: "Associate UI/UX Engineer",
    location: "Sri Lanka",
    description:
      "Since 2024 January I work as Associate UI/UX Engineer in i-Context Pvt, Sri lanka. While working on sevaral projects, I used AngularJs, ReactJs, Bootstrap, React Bootstrap, CSS, SASS and Figma for the user interface development.",
    icon: React.createElement(FaReact),
    date: "2024 January - present",
  },
] as const;

export const articlesData = [
  {
    title: "Embracing the Evolution: Responsive Design Trends Shaping the Digital Landscape",
    description:
      "In the present, fast-paced world of web development, responsive design carries out a pivotal role in creating, designing, engaging, and accessible user experiences across devices of all shapes and sizes. ",
    imageUrl: article1,
    linkUrl: "https://medium.com/@raveenaamarasiriwardena/embracing-the-evolution-responsive-design-trends-shaping-the-digital-landscape-6053457babfc",
  },
  {
    title: "What keeps you creative ?",
    description:
    "Do you feel like you are lacking in your imagination thoughts or feel lost when you hear about the word creative or creativity. Don’t worry everyone can be creative, it just needs your commitment and practice to get into that stage. ",
    imageUrl: article2,
    linkUrl: "https://medium.com/@raveenaamarasiriwardena/what-keeps-you-creative-d5c308bc98a8",
  },
  {
    title: "What are the main 3 programming languages need to know for build a website ?",
    description:
    "If you need to build a website there three main programming languages that you must need to know. Do you know what are these languages? Let me guess if you new to design and develop a website you may be probably don’t know the answer to the above question.",
    imageUrl: article3,
    linkUrl: "https://medium.com/@raveenaamarasiriwardena/what-are-the-main-3-programming-languages-need-to-know-for-build-a-website-ea1ee1337848",
  },
] as const;

export const skillsData = [
  {
    logo: html5,
    skillName: "HTML",
  },
  {
    logo: css,
    skillName: "CSS",
  },
  {
    logo: sass,
    skillName: "SASS",
  },
  {
    logo: javaScript,
    skillName: "JavaScript",
  },
  {
    logo: react,
    skillName: "React",
  },
  {
    logo: nextjs,
    skillName: "Next.js",
  },
  {
    logo: angularjs,
    skillName: "Angular.js",
  },
  {
    logo: vue,
    skillName: "Vue",
  },
  {
    logo: vuetify,
    skillName: "Vuetify",
  },
  {
    logo: tailwindcss,
    skillName: "Tailwind CSS",
  },
  {
    logo: bootstrap,
    skillName: "Bootstrap/ React Bootstrap",
  },
  {
    logo: wordPress,
    skillName: "WordPress",
  },
  {
    logo: joomla,
    skillName: "Joomla",
  },
  {
    logo: framerMotion,
    skillName: "Framer Motion",
  },
] as const;

export const familiarWithData = [
  {
    tool: vsCode,
    toolName: "VS code",
  },
  {
    tool: visualStudio,
    toolName: "Visual Studio",
  },
  {
    tool: adobeIllustrator,
    toolName: "Adobe Illustrator",
  },
  {
    tool: adobePhotoshop,
    toolName: "Adobe Photoshop",
  },
  {
    tool: figma,
    toolName: "Figma",
  },
  {
    tool: adobeXD,
    toolName: "Adobe XD",
  },
  {
    tool: lunacy,
    toolName: "Lunacy",
  },
  {
    tool: drawIo,
    toolName: "Draw.io",
  },
  {
    tool: git,
    toolName: "Git",
  },
  {
    tool: github,
    toolName: "GitHub",
  },
  {
    tool: netlify,
    toolName: "Netlify",
  },
  {
    tool: vercel,
    toolName: "Vercel",
  },
] as const;
