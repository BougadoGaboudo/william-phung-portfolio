import About from "@/components/About";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import HeroArea from "@/components/HeroArea";
import Skills from "@/components/Skills";
import TabsExpEdu from "@/components/TabsEduExp";

export default function Home() {
  return (
    <>
      <HeroArea />
      <About />
      <TabsExpEdu />
      <Skills />
      <Faq />
      <Contact />
    </>
  );
}
