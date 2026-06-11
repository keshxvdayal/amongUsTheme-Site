"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

import { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  description: string;
  color: string ;
  image: string | StaticImageData; // ✅ Allow both remote URLs and imported images
}


export default function Card({ title, description, color, image }: CardProps) {
  return (
    <motion.div
      className={`relative overflow-hidden border-2 border-[#fff] rounded-2xl shadow-lg  p-6 h-64 flex flex-col justify-between transition-all duration-300 ease-in-out`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
        <div className="flex justify-between w-full ">
        

            <motion.h2
            className={clsx("text-2xl font-bold mb-2", color)}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            >
            {title}
            </motion.h2>

      
      {/* Image Component with Correct Syntax */}
      <div className="flex justify-center">
        <Image src={image} alt={title} width={50} height={50} className="rounded-full" />
      </div>
      </div>

      <motion.p
        className="text-white text-opacity-80"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {description}
      </motion.p>
      
      <motion.div
        className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out"
        whileHover={{ opacity: 0.2 }}
      />
    </motion.div>
  );
}
