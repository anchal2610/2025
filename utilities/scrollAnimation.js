"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
      visible: { opacity: 1, translateY: -50, transition: { duration: 1.3 } },
      hidden: { opacity: 0, translateY: 0 },
};

const AnimateOnScroll = ({ children }) => {
      const control = useAnimation();
      const [ref, inView] = useInView();

      useEffect(() => {
            if (inView) {
                  control.start("visible");
            } else {
                  control.start("hidden");
            }
      }, [control, inView]);

      return (
            <motion.div
                  className=""
                  ref={ref}
                  variants={boxVariant}
                  initial={{ y: 0 }}
                  animate={control}
            >
                  {children}
            </motion.div>
      );
};

export default AnimateOnScroll;
