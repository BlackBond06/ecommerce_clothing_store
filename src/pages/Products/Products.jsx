import { motion } from "framer-motion";
import React from "react";

const routerVariants = {
  initial: {
    y: "100vh",
  },
  final: {
    y: "0vh",
  },
};

const Products = () => {
  return (
    <motion.div variants={routerVariants} initial="initial" animate="final">
      Products
    </motion.div>
  );
};

export default Products;
