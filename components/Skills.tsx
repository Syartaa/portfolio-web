"use client";

import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";
import { skillsData } from "@/lib/data";

import SectionTitle from "./SectionTitle";

const fadeInAnimationVariants = {
    initial: {
        y: 100,
        opacity: 0,
    },
    animate: (index: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            delay: .05 * index,
        },
    }),
};

const Skills = () => {
    const { ref } = useSectionInView("Skills");

    return (
        <section id="skills" className="text-center max-w-[53rem] mb-28 scroll-mt-28 sm:mb-40" ref={ref}>
            <SectionTitle>My Skills</SectionTitle>
            <ul className="flex flex-wrap justify-center text-lg text-gray-800 gap-2">
                {skillsData.map((skill, index) => (
                    <motion.li className="borderBlack py-3 px-5 rounded-xl bg-white dark:bg-white/10 dark:text-white/80"
                      key={index}
                      variants={fadeInAnimationVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      custom={index}
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}
export default Skills;