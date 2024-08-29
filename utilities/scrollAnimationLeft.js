"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
      visible: { opacity: 1, translateX: 50, transition: { duration: 0.9 } },
      hidden: { opacity: 0, translateX: 0 },
};

const AnimateLeftOnScroll = ({ children }) => {
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
                  initial={{ x: -50 }}
                  animate={control}
            >
                  {children}
            </motion.div>
      );
};

export default AnimateLeftOnScroll;