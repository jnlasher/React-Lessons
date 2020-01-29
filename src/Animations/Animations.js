import React from "react";
import { motion } from "framer-motion";
import "./styles.css";

const SimpleTranslationExample = () => {
  return (
    <motion.div
      className="square"
      animate={{ rotate: 360 }}
      transition={{ duration: 3, loop: Infinity, ease: "linear" }}
    />
  );
};

export default SimpleTranslationExample;