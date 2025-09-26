"use client";

import Wrapper from "./Wrapper";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ExternalLink } from "lucide-react";

const MotionCarouselItem = motion.create(CarouselItem) as any;
const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      delay: i * 0.05,
      ease: "easeOut",
    },
  }),
};

export default function Projects() {
  return (
    <>
      <div className="my-30 px-8">
        <Wrapper>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-8 text-white text-6xl drop-shadow-[2px_6px_0px_var(--yellow)] leading-tight text-center"
          >
            Projects
          </motion.h1>
          <Carousel>
            <CarouselContent className="-ml-1">
              {projects.map((project, index) => (
                <MotionCarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3"
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="p-4 block bg-light-yellow rounded-lg">
                    <h6 className="text-blue text-2xl mb-2 text-center">
                      {project.title}
                    </h6>
                    <div className="relative h-48">
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="mt-4 px-2">
                      <p className="text-blue text-lg">Stack :</p>
                      <div className="flex gap-2 flex-wrap">
                        {project.stacks.map((stack, index) => {
                          return (
                            <div key={index} className="relative group">
                              <Image
                                src={stack.img}
                                alt={stack.name}
                                width={24}
                                height={24}
                                className="h-6"
                              />
                              <p
                                className="px-4 py-2 rounded-lg absolute -bottom-10 left-1/2 -translate-x-1/2 
                                              bg-light-yellow border-2 border-yellow text-blue text-sm 
                                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                              whitespace-nowrap shadow-md z-10 pointer-events-none group-hover:pointer-events-auto"
                              >
                                {stack.name}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue text-lg mt-2 border-b border-blue w-fit hover:text-light-blue transition-colors duration-200 ease-out hover:border-light-blue"
                      >
                        Lien de l'appli
                        <ExternalLink size={16} />
                      </a>

                      <Collapsible>
                        <CollapsibleTrigger className="text-white text-lg bg-blue w-full py-2 px-4 mt-4 rounded-lg cursor-pointer hover:bg-light-blue transition-colors duration-300 ease-out">
                          Voir la description
                        </CollapsibleTrigger>
                        {Array.isArray(project.description) ? (
                          project.description.map((desc, index) => (
                            <CollapsibleContent key={index} className="mt-4">
                              <p className="text-blue text-base whitespace-pre-line">
                                {desc}
                              </p>
                            </CollapsibleContent>
                          ))
                        ) : (
                          <CollapsibleContent className="mt-4">
                            <p className="text-blue whitespace-pre-line">
                              {project.description}
                            </p>
                          </CollapsibleContent>
                        )}
                      </Collapsible>
                    </div>
                  </div>
                </MotionCarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Wrapper>
      </div>
    </>
  );
}
