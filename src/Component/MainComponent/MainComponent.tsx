import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import { motion } from "framer-motion";
import ProductItem from "./ProductItem/ProductItem";
const MainComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeroSection />
      <ProductItem />
    </motion.div>
  );
};

export default MainComponent;
