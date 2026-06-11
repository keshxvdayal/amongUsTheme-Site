'use client'
import React from "react";
// import { motion } from "framer-motion";
import { motion } from "framer-motion";
import BentoGrid from "./bentoGrid";
import Image from "next/image";
import green from "@/app/assets/char/green-player.png";
import black from "@/app/assets/char/black-player.png";
import purple from "@/app/assets/char/purple-player.png";

const HomePage = () => {
  return (
    <div className="relative flex mt-16 flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Floating Background Images */}
      <div className="absolute w-full h-full top-0 left-0 z-[-1] pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-24 h-24"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <Image src={green} alt="Green Player" className="w-full h-full" />
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-20 w-28 h-28"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <Image src={black} alt="Black Player" className="w-full h-full" />
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-1/4 w-20 h-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <Image src={purple} alt="Purple Player" className="w-full h-full" />
        </motion.div>
      </div>

      {/* Main Content */}
      <BentoGrid />
    </div>
  );
};

export default HomePage;
