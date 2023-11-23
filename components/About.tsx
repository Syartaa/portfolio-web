"use client";

import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

import SectionTitle from "./SectionTitle";

const About = () => {
    const { ref } = useSectionInView("About");

    return (
        <motion.section id="about" className="text-center leading-8 max-w-[40rem] mb-28 sm:mb-40 scroll-mt-28"
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .175 }}
        >
            <SectionTitle>About me</SectionTitle>
            <p className="mb-3">
              I am currently in the third year of  Computer Science and Engineering at UBT in Prishtine
            </p>
        
         
            <p>
            I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push  the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities.🙂
            </p>
        </motion.section>
    );
}
export default About;