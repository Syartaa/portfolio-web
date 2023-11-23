"use client";

import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div className="hidden w-1 h-16 my-24 rounded-full bg-gray-200 sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: .125 }}
    />
  );
}
export default SectionDivider;