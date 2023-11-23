"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useSectionInView } from "@/lib/hooks";
import { profilePicture } from "@/lib/data";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section id="home" ref={ref} className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial = {{opacity: 0, scale: 0}}
            animate = {{opacity: 1, scale: 1}}
            transition = {{type: "tween", duration: .2}}
          >
            <Image src={profilePicture} className="w-[10rem] h-[10rem] rounded-full object-cover border-[0.35rem] border-white shadow-xl" alt="Picture" quality={95} priority />
          </motion.div>

          <motion.span
            className="absolute bottom-0 left-0 text-5xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: .1,
              duration: .7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial = {{ y: 100, opacity: 0 }}
        animate = {{ y: 0, opacity: 1 }}
      >
        <span className="font-bold">Hello, I'm Syarta.</span> I'm a<span className="font-bold"> Computer Science student</span> currently in the<span className="font-bold"> 3nd semester</span> of the college.
      </motion.h1>

      <motion.div className="flex flex-col items-center justify-center text-lg font-medium gap-3 px-4 sm:flex-row"
        initial    = {{ opacity: 0, y: 100 }}
        animate    = {{ opacity: 1, y: 0 }}
        transition = {{ delay: 0.1 }}
      >
        <Link className="group flex items-center text-white gap-2 py-3 px-7 rounded-full outline-none bg-gray-900 transition focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105" href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a className="borderBlack group flex items-center gap-2 py-3 px-7 rounded-full outline-none bg-white cursor-pointer border-black/10 transition focus:scale-110 hover:scale-110 active:scale-105 dark:bg-white/10" href="public\CV - 2023 (en).pdf" download>
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        
        <div className="flex gap-3">
          <a 
            className="borderBlack flex items-center text-gray-700 gap-2 py-4 px-[1.125rem] rounded-full bg-white cursor-pointer border-black/10 transition hover:text-gray-950 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 dark:text-white/60 dark:bg-white/10"
            href="https://www.linkedin.com/in/syartapajaziti/" target="_blank">
              <BsLinkedin />
          </a>
          <a
            className="borderBlack flex items-center text-gray-700 text-[1.35rem] gap-2 p-4 rounded-full bg-white cursor-pointer border-black/10 transition focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 dark:text-white/60 dark:bg-white/10"
            href="https://github.com/Syartaa" target="_blank">
              <FaGithubSquare/>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
