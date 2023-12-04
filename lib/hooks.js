import { useActiveSectionContext } from "../src/context/active-section-context";
import React from "react";
import { useInView } from "react-intersection-observer";

export const useSectionInView = (sectionName, threshold = 0.75) => {
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  React.useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      console.log("set", sectionName);
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
};
