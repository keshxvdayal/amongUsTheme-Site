"use client"

import Image from "next/image";
// import Timeline1 from "@/app/assets/timefinal.png";
import Timeline1 from "@/app/assets/themes/timeline4.png";

import green from "@/app/assets/char/green.png";
import black from "@/app/assets/char/pink.png";
import purple from "@/app/assets/char/yellow-player.png";
import guy from "@/app/assets/char/red-dieguy.png";
import guy2 from "@/app/assets/char/black-player.png";
import guy3 from "@/app/assets/char/green-player.png";
import guy4 from "@/app/assets/char/yellow.png";

import { motion } from "framer-motion";

const Timeline = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Floating Background Images */}
      {[{ src: green, alt: "Green Player", top: "top-5", left: "left-10" },
        { src: black, alt: "Black Player", top: "top-1/3", right: "right-16" },
        { src: purple, alt: "Purple Player", bottom: "bottom-20", left: "left-1/4" },
        { src: guy, alt: "Red Die Guy", bottom: "bottom-10", right: "right-1/3" },
        { src: guy2, alt: "Black Player", top: "top-16", left: "left-1/3" },
        { src: guy3, alt: "Green Player", bottom: "bottom-32", right: "right-10" },
        { src: guy4, alt: "Yellow Player", bottom: "bottom-5", left: "left-10" }
      ].map((char, index) => (
        <motion.div
          key={index}
          className={`absolute ${char.top || ""} ${char.left || ""} ${char.right || ""} ${char.bottom || ""} w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24`}
          animate={{
            y: [0, -20, 0],
            transition: { duration: 4 + index * 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
          }}
        >
          <Image src={char.src} alt={char.alt} className="w-full h-full" />
        </motion.div>
      ))}

      {/* Timeline Image */}
      <div className="relative z-10">
        <Image src={Timeline1} alt="Timeline1" className="w-full" />
      </div>
    </div>
  );
};

export default Timeline;
