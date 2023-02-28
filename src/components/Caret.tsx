import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

function Caret() {


  return (
    <motion.div
      aria-hidden={true}
      className="inline-block bg-primary-500  w-1 h-7"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
    />
  );
}

export default Caret;
