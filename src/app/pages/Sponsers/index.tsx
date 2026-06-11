"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Images
import redPlayer from "@/app/assets/player.png";
import dorahacks from "@/app/assets/dorahacks.png";
import codecrafters from "@/app/assets/codecrafters.png";
import xyz from "@/app/assets/xyz.png";
import purpleSponserGuy from "@/app/assets/purpleguysponser.png";
import yellowSponserGuy from "@/app/assets/yellowsponserguy.png";
import ghostguy from "@/app/assets/ghostsponserguy.png";
import Community from "@/app/assets/communityPartner.png";
import green from "@/app/assets/char/green.png";
import black from "@/app/assets/char/pink.png";
import purple from "@/app/assets/char/yellow-player.png";
import guy from "@/app/assets/char/red-dieguy.png";
import guy2 from "@/app/assets/char/black-player.png";
import guy3 from "@/app/assets/char/green-player.png";
import guy4 from "@/app/assets/char/yellow.png";
import goldSponser from "@/app/assets/sponsers/gold_sponser.png";
import goldSponser2 from "@/app/assets/sponsers/gold_sponser2.png";
import silverSponser from "@/app/assets/sponsers/silver_sponser.png";
import silverSponser1 from "@/app/assets/sponsers/silver_sponser2.png";
import silverSponser2 from "@/app/assets/sponsers/silver_sponser3.png";
import silverSponser3 from "@/app/assets/sponsers/silver_sponser4.png";
import silverSponser4 from "@/app/assets/sponsers/silver_sponser5.png";
import silverSponser5 from "@/app/assets/sponsers/silver_sponser6.png";
import silverSponser6 from "@/app/assets/sponsers/silver_sponser7.png";
import silverSponser7 from "@/app/assets/sponsers/silver_sponser8.png";
import community1 from "@/app/assets/community/C Square White.png";
import community2 from "@/app/assets/community/DevDotCom.png";
import community3 from "@/app/assets/community/DevSource.png";
import community4 from "@/app/assets/community/Future Genius Techies .jpg";
import community5 from "@/app/assets/community/codersHideout.jpg";
import community6 from "@/app/assets/community/devDisplay.png";
import community7 from "@/app/assets/community/eventsInfo.jpg";
import community8 from "@/app/assets/community/exploitXplorers.png";
import community9 from "@/app/assets/community/infou.png";
import community10 from "@/app/assets/community/osc black bg.png";
import community11 from "@/app/assets/community/teamSankalp.jpg";
import community12 from "@/app/assets/community/techMasters.png";
import community13 from "@/app/assets/community/techleads.png";

// Floating characters
const floatingCharacters = [
  { src: green, alt: "Green Player", top: "5%", left: "5%" },
  { src: black, alt: "Black Player", top: "10%", right: "10%" },
  { src: purple, alt: "Purple Player", bottom: "15%", left: "20%" },
  { src: guy, alt: "Red Die Guy", bottom: "10%", right: "25%" },
  { src: guy2, alt: "Black Player", top: "20%", left: "30%" },
  { src: guy3, alt: "Green Player", bottom: "25%", right: "10%" },
  { src: guy4, alt: "Yellow Player", bottom: "5%", left: "10%" },
];

const communityPartner = [
    community1, community2, community3, community4, community5, community6, community7, community8, community9, community10, community11, community12, community13
]

// Sponsor data grouped by tiers
const groupedSponsors = {
  "Platinum Sponsors": [
    { logo: dorahacks, name: "DoraHacks", guy: purpleSponserGuy, color: "#8400FF" },
  ],
  "Gold Sponsors": [
    { logo: codecrafters, name: "CodeCrafters", guy: yellowSponserGuy, color: "#FFC404" },
    { logo: goldSponser, name: "ENDLESS DOMAIN", guy: yellowSponserGuy, color: "#FFC404" },
    { logo: goldSponser2, name: "INNOVACT", guy: yellowSponserGuy, color: "#FFC404" },
  ],
  "Silver Sponsors": [
    { logo: xyz, name: "Silver 0", guy: ghostguy, color: "#C0C0C0" },
    { logo: silverSponser, name: "Code Crafter", guy: ghostguy, color: "#C0C0C0" },
    { logo: silverSponser1, name: "Mentor X", guy: ghostguy, color: "#C0C0C0" },
    { logo: silverSponser2, name: "Hover Robotics", guy: ghostguy, color: "#C0C0C0" },
    { logo: silverSponser3, name: "100X", guy: ghostguy, color: "#C0C0C0" },
    { logo: silverSponser4, name: "REVUP", guy: ghostguy, color: "#C0C0C0" },
    { logo: silverSponser5, name: "Microsoft Azure", guy: ghostguy, color: "#C0C0C0" },
    { logo: silverSponser6, name: "RESKILL", guy: ghostguy, color: "#C0C0C0" },
    { logo: silverSponser7, name: "UNSTOP", guy: ghostguy, color: "#C0C0C0" },
  ],
};

const SponsorsPage: React.FC = () => {
  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col items-center text-white px-4">
      {/* Floating Characters */}
      {floatingCharacters.map((character, index) => (
        <motion.div
          key={index}
          className="absolute w-12 h-12 sm:w-20 sm:h-20"
          style={{
            top: character.top,
            left: character.left,
            right: character.right,
            bottom: character.bottom,
          }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 4 + (index % 3),
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Image
            src={character.src}
            alt={character.alt}
            className="w-full h-full"
          />
        </motion.div>
      ))}

      {/* Sponsors Header */}
      <h1 className="text-2xl sm:text-4xl bg-[#4F7DA2] rounded-xl font-bold mt-8 flex items-center px-4 py-2">
        <Image
          src={redPlayer}
          alt="Red Player"
          width={70}
          height={70}
          className="sm:w-[100px] sm:h-[100px]"
        />
        <span className="bg-[#4F7DA2] px-3 py-1 rounded-lg">SPONSORS</span>
      </h1>

      {/* Grouped Tiers */}
      {Object.entries(groupedSponsors).map(([tier, tierSponsors]) => (
        <div key={tier} className="w-full mt-12">
          <h2
            className={`text-3xl sm:text-6xl text-center font-bold`}
            style={{
              WebkitTextStroke: "2px white",
              textShadow: "3px 3px 4px rgba(255, 255, 255, 0.3)",
            }}
          >
            {tier}
          </h2>
          
          <div
  className={`mt-10 px-4 grid gap-10 justify-items-center ${
    tierSponsors.length === 1
      ? "grid-cols-1 max-w-md mx-auto"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
  }`}
>


            {tierSponsors.map((s, index) => (
              <div
                key={index}
                className="relative flex flex-col justify-center items-center text-center"
              >
                <Image
                  src={s.guy}
                  alt="guy"
                  width={140}
                  height={90}
                  className="relative top-10 sm:top-16 drop-shadow-lg"
                />
                <div
                  className={`w-full max-w-sm rounded-2xl p-4 flex flex-col items-center shadow-lg`}
                  style={{ backgroundColor: s.color }}
                >
                  <Image
                    src={s.logo}
                    alt={s.name}
                    width={240}
                    height={60}
                    className="object-contain p-3 rounded-2xl"
                  />
                  <p className="mt-3 text-lg sm:text-2xl font-bold uppercase">
                    {s.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Community Partner */}
      <Image
        src={Community}
        alt="Community Partner"
        width={700}
        height={350}
        className="mt-12 w-full max-w-lg sm:max-w-xl"
      />

<div className="w-full overflow-hidden border-2 border-[#BFDCFF] mt-10">
  <div className="animate-slider flex whitespace-nowrap">
    {communityPartner.concat(communityPartner).map((partner, index) => (
      <Image
        key={index}
        src={partner}
        alt="Community Partner"
        width={200}
        height={100}
        className="object-contain p-3 rounded-xl"
      />
    ))}
  </div>
</div>

    </div>
  );
};

export default SponsorsPage;
