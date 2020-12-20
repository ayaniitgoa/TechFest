import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
// import pantheon from "./pantheon.svg";
import underwaterCity from "./underwater-city.svg";
import "./ContactUs.css";

function EventBg() {
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
        className="underwater-city"
        src={underwaterCity}
        alt="Building"
        variants={{
          visible: { x: 0, opacity: 1 },
          hidden: { x: "50vw", opacity: 0 },
        }}
        transition={{ duration: 1.3, delay: 1, type: "spring" }}
        // initial={{ x: "100vw", opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
      />
    </div>
  );
}

export default EventBg;
