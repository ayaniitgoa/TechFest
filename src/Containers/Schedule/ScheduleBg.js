import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Fish from "./less-fish.svg";
import "./Schedule.css";

function ScheduleBg() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div>
      <motion.img
        ref={ref}
        animate={controls}
        initial="hidden"
        className="fish"
        src={Fish}
        alt="Building"
        variants={{
          visible: { x: 0, y: 0, opacity: 1 },
          hidden: { x: "100vw", y: "50vh", opacity: 0 },
        }}
        transition={{ duration: 1.3, type: "spring" }}
        // initial={{ x: "100vw", opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
      />
    </div>
  );
}

export default ScheduleBg;
