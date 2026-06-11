"use client";
// import { useState } from "react";
import TechCards from "./tech-cards"; 

const ProblemStatements = () => {
  // const [showTechCards, setShowTechCards] = useState(false);

  // const handleScanSuccess = () => {
  //   setShowTechCards(true); // Switch to TechCards when scan is successful
  // };

  return (
    <div className="py-10 relative overflow-hidden flex justify-center items-center px-4">
      {/* Content container */}
      <div className="relative z-10 p-4 flex flex-col items-center w-full">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center bg-gradient-to-r from-purple-500 via-violet-500 to-blue-400 text-transparent bg-clip-text">
          Themes
        </h1>

        {/* Main content area */}
        <div className="w-full sm:w-[90%] max-w-7xl bg-black/80 rounded-3xl min-h-[400px] sm:min-h-[500px] md:min-h-[600px] h-auto flex justify-center items-center backdrop-blur-sm border border-gray-800 p-4">
          <TechCards /> 
        </div>

        {/* Navigation arrows */}
        {/* <div className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2">
          <button className="text-white/70 hover:text-white transition-colors">
            <ArrowLeft size={32} />
          </button>
        </div>
        <div className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2">
          <button className="text-white/70 hover:text-white transition-colors">
            <ArrowRight size={32} />
          </button>
        </div> */}

        {/* Decorative elements */}
        <div className="absolute right-6 sm:right-16 top-6 sm:top-8">
          <div className="w-6 sm:w-8 h-6 sm:h-8 bg-red-500 transform rotate-45">
            <div className="absolute -left-2 top-1/2 w-3 sm:w-4 h-3 sm:h-4 bg-red-500 transform -translate-y-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatements;
