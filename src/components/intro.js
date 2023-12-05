"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import { useSectionInView } from "../../lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={"/avatar.png"}
              alt="Supakrit Avatar"
              height="240"
              width="240"
              quality="95"
              priority={true}
              className="h-40 w-40 rounded-full border-[0.35rem] border-white shadow-xl object-cover"
            />
          </motion.div>
          <motion.span
            className="text-6xl absolute bottom-0 left-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.5,
              duration: 0.8,
            }}
            whileHover={{
              scale: 1.1,
            }}
            drag
            dragConstraints={{ left: 0, right: 30, top: 30, bottom: 0 }}
          >
            🍌
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 p-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p>
          <span className="font-bold">Hi, I'm Supakrit65</span>, an{" "}
          <span className="font-bold">undergraduate software engineering</span>{" "}
          student at Kasetsart University. I enjoy building{" "}
          <span className="font-bold italic underline">websites</span> and
          exploring the world of{" "}
          <span className="font-bold italic underline">deep learning</span>.
        </p>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row justify-center px-4 gap-3 items-center text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-slate-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-950 
          active:scale-105 dark:bg-slate-950 dark:shadow-lg dark:hover:shadow-xl transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="group-hover:translate-x-1 transition opacity-70" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full borderBlack
          outline-none hover:scale-110 active:scale-105 transition dark:bg-white/10 dark:text-white/60"
          href={"https://portfolio-supakrit65.s3.ap-southeast-1.amazonaws.com/Resume.pdf"} target="_blank"
          download
        >
          Download Resume{" "}
          <HiDownload className="group-hover:translate-y-1 transition opacity-60" />
        </a>

        <a
          className="bg-white text-slate-700 p-4 flex items-center gap-2 rounded-full text-xl border borderBlack
          outline-none hover:scale-110 hover:text-slate-950 active:scale-105 transition dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/supakritaphonmaeklong/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white text-slate-700 p-4 flex items-center gap-2 rounded-full text-xl border borderBlack
        outline-none hover:scale-110 hover:text-slate-950 active:scale-105 transition dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Supakrit65"
          target="_blank"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
