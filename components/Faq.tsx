import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Wrapper from "./Wrapper";

export default function Faq() {
  return (
    <>
      <div className="bg-light-yellow py-10">
        <Wrapper>
          <h1 className="px-8 text-white text-6xl drop-shadow-[2px_6px_0px_var(--yellow)] leading-tight">
            FAQ
          </h1>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="p-8 text-blue text-2xl font-bold hover:text-light-blue transition-colors duration-200 ease-out">
                <h2>
                  Pourquoi être passé de l'illustration au développement ?
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                <p className="pb-8 px-8 text-blue text-lg">
                  L'illustration est un domaine très élitiste et pour l'instant,
                  je suis nul sadge. Je vous invite à aller voir mes
                  illustrations !
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <hr className="border-blue" />
          <Accordion type="single" collapsible>
            <AccordionItem value="item-2">
              <AccordionTrigger className="p-8 text-blue text-2xl font-bold hover:text-light-blue transition-colors duration-200 ease-out">
                <h2 className="text-blue text-2xl font-bold">
                  Front ou back ?
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                <p className="pb-8 px-8 text-blue text-lg">
                  Je peux faire les 2 mais je préfère le front !
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Wrapper>
      </div>
    </>
  );
}
