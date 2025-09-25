import About from "@/components/About";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import HeroArea from "@/components/HeroArea";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TabsExpEdu from "@/components/TabsEduExp";

export default function Home() {
  return (
    <>
      <HeroArea />
      <About />
      <TabsExpEdu />
      <Skills />
      <Projects />
      <Faq />
      <Contact />
    </>
  );
}
