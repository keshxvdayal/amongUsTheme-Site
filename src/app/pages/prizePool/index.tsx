'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { PrizeCard } from "../../../components/prize-card";
import prizeMain from "@/app/assets/charr.png";
import OrangeChar from "@/app/assets/orangeChar.png";
import PurpleChar from "@/app/assets/purpleCharPrize.png";
import green from "@/app/assets/char/green.png";
import black from "@/app/assets/char/pink.png";
import Banner from "@/app/assets/char/Exciting Goodies For Participants (1) 1.png";
import Banner2 from "@/app/assets/char/aseet.png";

const PrizePool = () => {
  return (
    <div className="min-h-screen relative overflow-hidden px-4 py-12 flex flex-col items-center">
      {/* Stars background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px)",
          backgroundSize: "550px 550px",
        }}
      />

      {/* Floating Elements */}
      <motion.div
        className="hidden md:block absolute top-1/4 left-10 w-16 md:w-24"
        animate={{
          y: [0, -20, 0],
          transition: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
        }}
      >
        <Image src={green} alt="Green Player" className="w-full" />
      </motion.div>

      <motion.div
        className="hidden md:block absolute top-1/3 right-16 w-20 md:w-28"
        animate={{
          y: [0, -25, 0],
          transition: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
        }}
      >
        <Image src={black} alt="Black Player" className="w-full" />
      </motion.div>

      {/* Title */}
      <h1 className="text-center text-4xl sm:text-6xl md:text-7xl lg:text-[100px] font-Nine text-[#e0b0ff] mb-10 tracking-wider drop-shadow-[0_0_20px_#e0b0ff]">
        PRIZE POOL
      </h1>

      {/* Banners */}
      <div className="hidden md:block absolute top-8 left-8">
        <Image src={Banner} alt="Banner1" className="w-40 sm:w-48 rotate-[-12deg]" />
      </div>
      <div className="hidden md:block absolute top-4 right-8">
        <Image src={Banner2} alt="Banner2" className="w-40 sm:w-48 rotate-12" />
      </div>

      {/* Prize cards container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center w-full max-w-6xl">
        {/* First Prize Block (Mobile Order: 2) */}
        <div className="flex flex-col items-center order-2 md:order-1">
          <Image src={PurpleChar} alt="PurpleChar" className="w-full max-w-xs sm:max-w-sm lg:max-w-md" />
          <PrizeCard amount="6,000" domainPeriod="1 Year" premiumPeriod="1 Year" className="w-full max-w-sm" />
        </div>

        {/* Main Prize Block (Mobile Order: 1) */}
        <div className="flex flex-col items-center order-1 md:order-2">
          <Image src={prizeMain} alt="prizeMain" className="w-full max-w-xs sm:max-w-sm lg:max-w-md" />
          <PrizeCard amount="9,000" domainPeriod="1 Year" premiumPeriod="2 Years" className="w-full max-w-sm" />
        </div>

        {/* Third Prize Block (Mobile Order: 3) */}
        <div className="flex flex-col items-center order-3 md:order-3">
          <Image src={OrangeChar} alt="OrangeChar" className="w-full max-w-xs sm:max-w-sm lg:max-w-md" />
          <PrizeCard amount="3,000" domainPeriod="1 Year" premiumPeriod="6 Months" className="w-full max-w-sm" />
        </div>
      </div>
    </div>
  );
};

export default PrizePool;
