"use client";

import Image from "next/image";
import Wrapper from "./Wrapper";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-light-yellow py-20">
        <Wrapper>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-20 text-blue">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3 }}
              className="w-76 md:w-96 m-auto"
            >
              <Image src="/img/About.svg" alt="" width={400} height={400} />
            </motion.div>
            <div className="flex flex-col justify-center gap-8 md:gap-0">
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-white text-[clamp(4rem,3.0769rem+4.1026vw,8rem)] drop-shadow-[0.05em_0.08em_0_var(--yellow)] leading-tight text-center md:text-left"
              >
                About me
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-md text-lg md:max-w-2xl px-6 md:px-0"
              >
                <span className="text-[clamp(1.25rem,1.0192rem+1.0256vw,2.25rem)]">
                  Bonjour,
                </span>
                <br />
                <br />
                Je m’appelle PHUNG William, étudiant en licence professionnelle
                Projet Web et Mobile à Sorbonne Université. Je recherche une
                alternance en développement front end. Le webdesign m’intéresse
                également, même si je débute dans ce domaine. d(´▽｀*)
                <br />
                <br />
                Bien que je souhaite me spécialiser en front end, mon BTS SIO
                option SLAM m’a tout de même permis d’acquérir des compétences
                solides en back-end, ce qui me donne une vision globale des
                projets. ( •̀ω •́ゞ) Phrase un peu bateau mais oui, j’aime
                concevoir des interfaces modernes et soignées !
                <br />
                <br />
                PS : L’illustration est également ma passion et mon rêve est de
                devenir illustrateur professionnel un jour !
              </motion.p>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
