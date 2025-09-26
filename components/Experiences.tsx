"use client";

import { experiences } from "@/lib/experiences";
import { motion } from "framer-motion";

export default function Experiences() {
  return (
    <>
      <div className="flex flex-col gap-4 rounded-tr-[4rem] rounded-tl-xl rounded-br-xl rounded-bl-[4rem] max-w-md mx-auto md:mx-0">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-white text-6xl drop-shadow-[2px_6px_0px_var(--yellow)] leading-tight text-center md:text-left"
        >
          Experiences
        </motion.h1>

        {experiences.map((experience, index) => {
          return (
            <motion.div
              key={index}
              className="bg-light-yellow p-4 rounded-lg drop-shadow-[6px_6px_0px_var(--light-blue)]"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              <p className="text-blue text-lg">{experience.date}</p>
              <h6 className="text-blue text-2xl">{experience.name}</h6>
              <p className="text-blue text-lg">{experience.company}</p>
              <p className="text-blue text-lg">{experience.description}</p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
