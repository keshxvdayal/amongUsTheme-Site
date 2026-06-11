import React from "react";
import bg from "@/app/assets/offerBg.png";
import purpleGuy from "@/app/assets/call/purpleguy.png";
import OrangeGuy from "@/app/assets/call/orangeguy.png";
import { Button } from "@/components/ui/button";

const Call = () => {
  const Card = [
    {
      title: "Become a Sponsor",
      color: "bg-[#8400FF]",
      guy: {
        name: "purpleGuy",
        logo: purpleGuy,
      },
    },
    {
      title: "Become a Community Partner",
      color: "bg-[#FF7803]",
      guy: {
        name: "orangeGuy",
        logo: OrangeGuy,
      },
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="flex flex-col h-screen justify-center px-4 sm:px-8 md:px-16"
    >
      <div className="flex flex-col items-center md:items-start">
        {Card.map(({ title, color }, index) => (
          <div
            key={index}
            className={`w-full sm:w-4/5 md:w-2/5 m-4 sm:m-6 md:m-10 rounded-3xl ${color} p-6 sm:p-8`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              {title}
            </h1>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 py-4">
                <a href="https://drive.google.com/file/d/1x-QT2W0lfBF8F0jpGwW4EorbWsxwDvBX/view?usp=drivesdk" target="_blank">
              <Button className="bg-[#212121] hover:bg-[#381257] text-lg sm:text-xl rounded-2xl py-4 sm:py-6 px-6 sm:px-8 text-white">
                Download Brochure
              </Button>
              </a>
              <Button className="bg-white hover:bg-[#ffed29] text-lg sm:text-xl rounded-2xl py-4 sm:py-6 px-6 sm:px-8 text-black">
                Apply Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Call;
