'use client'
import React from "react";
import { motion } from "framer-motion";
import green from "@/app/assets/char/green.png";
import black from "@/app/assets/char/pink.png";
import purple from "@/app/assets/char/yellow-player.png";
import guy from "@/app/assets/char/red-dieguy.png";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="relative overflow-hidden px-4 py-12 md:py-24">
      {/* Floating Background Images */}
      <div className="absolute w-full h-full top-0 left-0 z-[-1] pointer-events-none">
        <motion.div
          className="absolute top-5 right-10 md:right-20 w-16 h-16 md:w-24 md:h-24"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <Image src={green} alt="Green Player" className="w-full h-full" />
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-10 md:left-32 w-16 h-16 md:w-28 md:h-28"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <Image src={black} alt="Black Player" className="w-full h-full" />
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-1/4 w-12 md:w-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <Image src={purple} alt="Purple Player" className="w-full h-full" />
        </motion.div>

        <motion.div
          className="absolute right-1/3 w-24 md:w-48"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <Image src={guy} alt="Red Player" className="w-full h-full" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Left side with title */}
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-white text-4xl md:text-6xl font-bold" style={{ fontFamily: "Comic Sans MS, cursive" }}>
              What is
            </h1>
            <div className="text-[#C000FF] text-5xl md:text-7xl font-bold">
              CODE FORGE <span className="text-white">?</span>
            </div>
          </div>

          {/* Right side with description */}
          <div className="text-lg md:text-2xl font-bold space-y-4 md:space-y-6 text-center md:text-left" style={{ fontFamily: "Comic Sans MS, cursive" }}>
            <p>
              <span className="text-[#C000FF]">CODEFORGE</span> <span className="text-white">2025</span>{" "}
              <span className="text-white">is a</span> <span className="text-[#FF8C00]">forge</span>{" "}
              <span className="text-white">of</span> <span className="text-[#FF69B4]">innovation</span>,{" "}
              <span className="text-white">where the</span> <span className="text-[#FFD700]">brightest</span>{" "}
              <span className="text-white">minds will come together to craft powerful, transformative</span>{" "}
              <span className="text-[#00FFFF]">solutions</span>.
            </p>
            <p>
              <span className="text-white">We invite you to enter the</span>{" "}
              <span className="text-[#800080]">fiery</span> <span className="text-white">depths of</span>{" "}
              <span className="text-[#4169E1]">technology</span> <span className="text-white">and shape the</span>{" "}
              <span className="text-[#32CD32]">future</span> <span className="text-white">of the digital</span>{" "}
              <span className="text-[#FF0000]">world</span>, <span className="text-white">just like a</span>{" "}
              <span className="text-gray-400">blacksmith</span> <span className="text-white">forging molten</span>{" "}
              <span className="text-gray-400">steel</span> <span className="text-white">into a</span>{" "}
              <span className="text-[#4169E1]">masterpiece</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
