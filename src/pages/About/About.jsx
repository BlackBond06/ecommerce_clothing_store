import React from "react";

import { motion } from "framer-motion";
const routerVariants = {
  initial: {
    y: "100vh",
  },
  final: {
    y: "0vh",
  },
};

const About = () => {
  return (
    <motion.div variants={routerVariants} initial="initial" animate="final">
      About page
    </motion.div>
  );
};

export default About;
