"use client";

import React from "react";
import SectionHeading from "./shared/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../../lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hi there! I'm <span className="font-bold">Supakrit Aphonmaeklong</span>.
        I'm deeply interested in various aspects of technology, including{" "}
        <span className="font-bold">
          Back-end and Front-end Development, Full Stack Engineering, and Data
          Science
        </span>
        . Based in{" "}
        <span className="font-bold">Nonthaburi, Pakkret, Thailand</span>, I'm
        currently in my 3rd year at Kasetsart University, working towards a
        Bachelor of Engineering in Software and Knowledge. It's been a rewarding
        journey so far, and I'm grateful for maintaining a solid{" "}
        <span className="font-bold">GPA of 3.8X</span> and for being honored
        with the{" "}
        <span className="font-bold">University Tuition Scholarship</span>. I
        enjoy exploring various programming languages and technologies,
        particularly{" "}
        <span className="font-bold">Python, JavaScript, and Java</span>, and I
        have a growing interest in frameworks like{" "}
        <span className="font-bold">React and FastAPI</span>. My practical
        experiences range from an internship at Charoen Pokphand Group to being
        a Teaching Assistant at university, where I've had the opportunity to
        apply my skills and learn immensely. I'm enthusiastic about continuous
        learning and applying my knowledge to real-world problems, and I love
        engaging in projects and activities that push the boundaries of what I
        know about technology.
      </p>
    </motion.section>
  );
}
