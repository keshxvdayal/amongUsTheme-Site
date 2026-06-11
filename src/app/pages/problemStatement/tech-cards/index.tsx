"use client"

import { motion } from "framer-motion"
// import Card from "../card"
import AI from "@/app/assets/themes/AI.png"
import Blockchain from "@/app/assets/themes/Blockchain.png"
import Open_Innovation from "@/app/assets/themes/Open_Innovation.png"
import Card from "../card"
// import { image } from "framer-motion/client"

const cardData = [
    {
      title: "AI and ML",
      description:
        "Exploring the frontiers of artificial intelligence and machine learning, revolutionizing industries through smart algorithms and data-driven insights.",
      color: "text-purple-400", // ✅ Use text color class
      image: AI,
    },
    {
      title: "Open Innovation",
      description:
        "Fostering collaboration and knowledge sharing across organizations to accelerate technological advancements and solve complex challenges.",
      color: "text-green-400",
      image: Open_Innovation,
    },
    {
      title: "Blockchain and Web3",
      description:
        "Decentralizing the internet with blockchain technology, enabling secure, transparent, and user-centric digital experiences in the Web3 era.",
      color: "text-orange-400",
      image: Blockchain,
    },
  ];
  

export default function TechCards() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </motion.div>
  )
}

