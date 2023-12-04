"use client";
import React from "react";
import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div
      className="mb-24 sm:my-24"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
      }}
    >
      <div className="relative flex flex-row sm:flex-col justify-center items-center">
        <div className="mx-2 sm:mx-0 sm:my-2 w-2 h-2 bg-slate-400 rounded-full dark:bg-opacity-20"></div>
        <div className="mx-2 sm:mx-0 sm:my-2 w-2 h-2 bg-slate-300 rounded-full animate-pulse dark:bg-opacity-20"></div>
        <div className="mx-2 sm:mx-0 sm:my-2 w-2 h-2 bg-slate-200 rounded-full dark:bg-opacity-20"></div>
      </div>
    </motion.div>
  );
};

export default SectionDivider;
