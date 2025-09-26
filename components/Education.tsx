"use client";

import { educations } from "@/lib/educations";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <>
      <div className="flex flex-col gap-4 rounded-tr-xl rounded-tl-[4rem] rounded-br-[4rem] rounded-bl-xl w-full max-w-md mx-auto md:mx-0">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-white text-6xl drop-shadow-[2px_6px_0px_var(--yellow)] leading-tight text-center md:text-left"
        >
          Education
        </motion.h1>
        {educations.map((education, index) => {
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
              <p className="text-blue text-lg">{education.date}</p>
              <h6 className="text-blue text-2xl">{education.name}</h6>
              <p className="text-blue text-lg">{education.location}</p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
