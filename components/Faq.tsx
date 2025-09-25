import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Wrapper from "./Wrapper";
import { faqs } from "@/lib/faqs";

export default function Faq() {
  return (
    <>
      <div className="bg-light-yellow py-10">
        <Wrapper>
          <h1 className="px-8 text-white text-6xl drop-shadow-[2px_6px_0px_var(--yellow)] leading-tight">
            FAQ
          </h1>
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => {
              return (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="p-8 text-blue text-2xl font-bold hover:text-light-blue transition-colors duration-200 ease-out">
                    <h2>{faq.question}</h2>
                  </AccordionTrigger>
                  {Array.isArray(faq.answer) ? (
                    <AccordionContent className="px-8 pb-8 space-y-2">
                      {faq.answer.map((answer, index) => (
                        <p
                          key={index}
                          className="text-blue text-lg whitespace-pre-line"
                        >
                          {answer}
                        </p>
                      ))}
                    </AccordionContent>
                  ) : (
                    <AccordionContent>
                      <p className="px-8 pb-8 text-blue text-lg">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  )}
                </AccordionItem>
              );
            })}
          </Accordion>
        </Wrapper>
      </div>
    </>
  );
}
