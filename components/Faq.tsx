"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Wrapper from "./Wrapper";
import { faqs } from "@/lib/faqs";
import { motion } from "framer-motion";
const MotionAccordionItem = motion.create(AccordionItem);

export default function Faq() {
  return (
    <>
      <div className="bg-light-yellow py-10">
        <Wrapper>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="px-8 text-white text-6xl drop-shadow-[2px_6px_0px_var(--yellow)] leading-tight"
          >
            FAQ
          </motion.h1>
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => {
              return (
                <MotionAccordionItem
                  key={index}
                  value={`item-${index}`}
                  initial={{ opacity: 0, x: -100, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                >
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
                </MotionAccordionItem>
              );
            })}
          </Accordion>
        </Wrapper>
      </div>
    </>
  );
}
