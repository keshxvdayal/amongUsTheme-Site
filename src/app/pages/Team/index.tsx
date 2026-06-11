'use client'
import React, { useState } from "react";
import TeamBanner from "@/app/assets/teambanner.png";
import Raghav from "@/app/assets/Team/Raghav.jpeg";
import Palak from "@/app/assets/Team/palak.jpeg";
import Prakriti from "@/app/assets/Team/prakriti.jpeg";
import Nihal from "@/app/assets/Team/nihal.jpeg";
import Arpit from "@/app/assets/Team/arpit.jpg";
import Shubham from "@/app/assets/Team/shubham.jpg";
import Hardik from "@/app/assets/Team/Hardik.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";
import green from "@/app/assets/char/green.png";
import black from "@/app/assets/char/pink.png";
import purple from "@/app/assets/char/yellow-player.png";
import guy from "@/app/assets/char/red-dieguy.png";
import guy2 from "@/app/assets/char/black-player.png";
import guy3 from "@/app/assets/char/green-player.png";
import guy4 from "@/app/assets/char/yellow.png";

const teams = {
  Organizers: [
    { name: "Raghav Sharma", role: "Lead Organizer", color: "purple", avatar: Raghav, social:'https://raghavsharmaportfolio098.netlify.app' },
    { name: "Palak Modi", role: "Lead Organizer", color: "purple", avatar: Palak, social:'https://bento.me/palak-modi' },
    { name: "Prakriti", role: "Lead Organizer", color: "purple", avatar: Prakriti, social:'https://bento.me/prakriti0803' },
    { name: "Hardik Jain", role: "Co-Organizer", color: "purple", avatar:  Hardik, social:'https://bento.me/hardik3810' },
  ],
  Tech: [
    { name: "Shubham Sharma", role: "Tech Lead", color: "blue", avatar: Shubham, social:'bento.me/ishubham' },
    { name: "Keshav Dayal", role: "Tech Lead", color: "blue", avatar: Raghav, social:'https://keshavdayal-portfolio.vercel.app/' }
  ],
  Design: [
    
    { name: "Arpit Garg", role: "Design Lead", color: "pink", avatar: Arpit, social:'https://www.linkedin.com/in/arpitgarg5689/' }
  ],
  PR: [{ name: "Sudhanshu", role: "PR Manager", color: "red", avatar: green, social:'https://bento.me/sudhanshu' }],
  Content: [{ name: "Nihal Mishra", role: "Design Lead", color: "pink", avatar: Nihal, social:'https://www.linkedin.com/in/nihal-mishra-096927290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }],
};

const floatingCharacters = [
  { src: green, alt: "Green Player", className: "top-5 left-5 w-16 sm:w-20 md:w-24" },
  { src: black, alt: "Black Player", className: "top-1/3 right-6 w-20 sm:w-24 md:w-28" },
  { src: purple, alt: "Purple Player", className: "bottom-20 left-1/4 w-14 sm:w-18 md:w-20" },
  { src: guy, alt: "Red Die Guy", className: "bottom-10 right-1/3 w-20 sm:w-24 md:w-28" },
  { src: guy2, alt: "Black Player", className: "top-16 left-1/3 w-14 sm:w-20 md:w-24" },
  { src: guy3, alt: "Green Player", className: "bottom-32 right-5 w-16 sm:w-20 md:w-24" },
  { src: guy4, alt: "Yellow Player", className: "bottom-5 left-5 w-14 sm:w-20 md:w-24" },
];

const TeamPage: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState<keyof typeof teams>("Organizers");
  const displayedMembers = selectedTeam ? teams[selectedTeam] : Object.values(teams).flat();

  return (
    <div className="relative overflow-hidden">
      {/* Floating Background Characters */}
      {floatingCharacters.map((char, index) => (
        <motion.div
          key={index}
          className={`absolute ${char.className}`}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4 + (index % 3), repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <Image src={char.src} alt={char.alt} className="w-full h-full" />
        </motion.div>
      ))}

      <div className="min-h-screen flex flex-col items-center text-white relative">
        {/* Team Banner */}
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Image src={TeamBanner} alt="Team Banner" className="w-full max-w-[600px] sm:max-w-[800px] lg:max-w-[1000px] mx-auto" />
        </motion.div>

        {/* Navbar */}
        <nav className="mt-6 flex   space-x-2 sm:space-x-4 bg-gray-800 p-3 rounded-3xl overflow-x-auto scrollbar-hide justify-center">
          {Object.keys(teams).map((team) => (
            <motion.button
              key={team}
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedTeam(team as keyof typeof teams)}
              className={`px-4 py-2 transition-colors md:text-xl text-[8px] whitespace-nowrap rounded-3xl ${
                selectedTeam === team ? "bg-gray-600" : "bg-gray-900"
              }`}
            >
              {team}
            </motion.button>
          ))}
        </nav>

        {/* Members Grid */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          key={selectedTeam}
        >
         {displayedMembers.map((member, index) => (
  <a
    key={index}
    href={member.social}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full max-w-[340px] sm:max-w-[380px] mx-auto"
  >
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      }}
      className="bg-white/80 p-4 flex rounded-2xl items-center space-x-4 h-[100px] md:h-[200px] shadow-lg w-full"
    >
      <Image
        src={member.avatar}
        alt={member.name}
        width={80}
        height={80}
        className="border-black rounded-full border-4"
      />
      <div>
        <h3 className="text-black text-lg sm:text-2xl font-bold">
          {member.name}
        </h3>
        <p className="text-gray-600 text-sm sm:text-lg">{member.role}</p>
      </div>
    </motion.div>
  </a>
))}

        </motion.div>
      </div>
    </div>
  );
};

export default TeamPage;
