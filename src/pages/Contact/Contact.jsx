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

const Contact = () => {
  return (
    <motion.div variants={routerVariants} initial="initial" animate="final">
      Contact
    </motion.div>
  );
};

export default Contact;
