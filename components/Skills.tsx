"use client";

import { skills } from "@/lib/skills";
import Wrapper from "./Wrapper";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <>
      <div className="my-30">
        <Wrapper>
          <h1 className="text-white text-6xl drop-shadow-[2px_6px_0px_var(--yellow)] leading-tight text-center">
            Skills & Tools
          </h1>
          <motion.div
            className="mt-10 flex flex-wrap gap-5 md:gap-2 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {skills.map((skill, index) => {
              return (
                <motion.div
                  key={index}
                  className="bg-light-yellow p-4 rounded-lg w-30 h-30 flex flex-col justify-center items-center gap-4 relative group"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Image
                    src={skill.img}
                    alt={skill.name}
                    width={64}
                    height={64}
                  />
                  <p className="px-4 py-2 rounded-lg absolute -bottom-10 bg-light-yellow border-2 border-yellow text-blue text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center z-10 pointer-events-none group-hover:pointer-events-auto">
                    {skill.name}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </Wrapper>
      </div>
    </>
  );
}
