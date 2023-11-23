"use client";

import { motion } from "framer-motion";
import {PiSmiley } from "react-icons/pi";

import { useMediaQuery, useSectionInView } from "@/lib/hooks";

import SectionTitle from "./SectionTitle";

const Experience = () => {
    const { ref } = useSectionInView("Experience");
    const isMobile = useMediaQuery("(max-width: 640px)");

    return (
        <motion.section id="experience" className="mb-28 scroll-mt-28 sm:mb-40" ref={ref}
          initial={{ opacity: 0, y: 100, }}
          animate={{ opacity: 1, y: 0, }}
          transition={{ delay: .175 }}
        >
            <SectionTitle>My Experience</SectionTitle>

            <div className="flex items-center justify-center text-lg gap-y-2 py-6 px-6 border rounded-lg border-black/5 bg-gray-100 transition sm:px-12 dark:text-white dark:bg-white/10">
               <span className="w-full mr-1">Currently looking for my first job as a developer.</span>
               <PiSmiley size={isMobile ? 40 : 32} />
            </div>
        </motion.section>
    );
}
export default Experience;