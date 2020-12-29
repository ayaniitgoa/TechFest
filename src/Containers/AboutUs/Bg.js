import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import bulidingimg from "./buildings-reflection.svg";
import "./AboutUs.css";

function Bg() {
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
        className="building-reflection"
        src={bulidingimg}
        alt="Building Reflection"
        variants={{
          visible: { x: 0, opacity: 1, zIndex: 10 },
          hidden: { x: "50vw", opacity: 0 },
        }}
        transition={{ duration: 1, delay: 2 }}
        // initial={{ x: "100vw", opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
      />
    </div>
  );
}

export default Bg;
