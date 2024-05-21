import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Articles from "@/components/articles";
import FamiliarWith from "@/components/familiar-with";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="flex flex-col items-center lg:px-4 h-full">
      <Header /> 
      <Intro />
      {/* <SectionDivider />
      <About /> */}
      <Projects />
      <Skills />
      <FamiliarWith />
      <Experience />
      <Articles />
      {/* <ContactFooter /> */}
    </main>
  );
}
