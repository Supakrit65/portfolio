"use client";

import React from "react";
import SectionHeading from "./shared/section-heading";
import { skillsData } from "../../lib/data";
import { useSectionInView } from "../../lib/hooks";
import Skill from "./skill";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      id="skills"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-6">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
          >
            <Skill skillText={skill.skillText} skillUrl={skill.skillUrl} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
