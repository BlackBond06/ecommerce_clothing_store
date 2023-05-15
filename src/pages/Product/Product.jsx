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

const Product = () => {
  return (
    <motion.div variants={routerVariants} initial="initial" animate="final">
      Product
    </motion.div>
  );
};

export default Product;
