"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { links } from "@/lib/data";
import { useMediaQuery } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isMobileLg = useMediaQuery("(min-width: 502px) and (max-width: 639px)");

  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed -bottom-4 left-1/2 -translate-x-1/2 w-full h-[6rem] border border-white border-opacity-40 rounded-t-xl bg-white bg-opacity-80 backdrop-blur-[0.5rem] shadow-lg shadow-black/[0.03] sm:top-6 sm:w-[36rem] sm:h-[3.25rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0,    x: "-50%", opacity: 1 }}
      />
      <nav className={twMerge("flex fixed bottom-[1.5625rem] left-1/2 -translate-x-1/2 h-12 w-3/4 py-2 sm:top-[1.7rem] sm:w-auto sm:py-0", isMobileLg && "bottom-4")}>
        <ul className={twMerge("flex flex-wrap items-center justify-center text-[0.9rem] font-medium text-gray-500 w-full gap-y-2 gap-x-5 sm:w-[initial] sm:flex-nowrap sm:gap-5", isMobileLg && "justify-between")}>
          {links.map(link => (
            <motion.li className={twMerge("flex relative items-center justify-center h-3/4", isMobileLg && "h-full")}
              key={link.hash} 
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}>

              <Link className={twMerge("flex items-center justify-between w-full px-3 py-3 transition hover:text-gray-950 sm:justify-center dark:text-gray-500 dark:hover:text-gray-300", activeSection === link.name && "text-gray-950 dark:text-gray-200")}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now());
                }}
              >
                {isMobile ? link.icon : link.name}

                {link.name === activeSection && (
                  <motion.span className="absolute inset-0 -z-10 rounded-full bg-gray-100 dark:bg-gray-800"
                    layoutId="activeSection" transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default Header;