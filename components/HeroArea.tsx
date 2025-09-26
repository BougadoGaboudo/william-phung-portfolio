"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroArea() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-linear-to-br from-light-yellow to-yellow">
        <div className="relative">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-blue text-[clamp(1.5rem,1.1538rem+1.5385vw,3rem)] absolute -top-4 md:-top-0"
          >
            PHUNG William
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-white bold text-huge leading-tight z-10 relative drop-shadow-[0.03em_0.06em_0_var(--light-blue)] mx-auto w-max"
          >
            Portfolio
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute -top-25 -right-7 w-[11rem] sm:-top-35 sm:-right-11 sm:w-[16rem] md:-top-42 md:-right-15 md:w-[22rem]"
          >
            <Image
              src="/img/HeroArea.png"
              alt=""
              width={352}
              height={352}
              className="w-full h-auto"
            />
          </motion.div>
          <div className="flex justify-center items-center md:gap-10 text-light-blue flex-col md:flex-row">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-[clamp(1.5rem,1.1538rem+1.5385vw,3rem)]"
            >
              Front End Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-[clamp(1.5rem,1.1538rem+1.5385vw,3rem)]"
            >
              Webdesigner
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}
