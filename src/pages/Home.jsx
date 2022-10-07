import { motion } from "framer-motion";
import React from "react";
import Random from "../components/Random";
import Veggie from "../components/Veggie";

function Home() {
  return (
    <motion.div
    // animate={{ opacity: 1 }}
    // initial={{ opacity: 0 }}
    // exit={{ opacity: 0 }}
    // transition={{ duration: 2 }}
    >
      <Veggie />
      <Random />
    </motion.div>
  );
}

export default Home;
