import React from "react";
import { motion } from "framer-motion";

import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProduct";
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";
import Categories from "../../components/Categories/Categories";
const routerVariants = {
  initial: {
    y: "100vh",
  },
  final: {
    y: "0vh",
  },
};

const Home = () => {
  return (
    <motion.div variants={routerVariants} initial="initial" animate="final">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories/>
      <TrendingProducts type="trending" />
    </motion.div>
  );
};

export default Home;
