import React from "react";

const getRandomValue = (max: number, min = 1) => Math.random() * (max - min) + min;

const Star: React.FC = () => {
  const size = getRandomValue(7, 3) + "px";
  const duration = getRandomValue(30, 15) + "s";
  const delay = getRandomValue(40, -40) + "s";
  const top = getRandomValue(100, -1) + "vh";
  const left = getRandomValue(100, 0) + "vw";

  return (
    <div
      className="absolute bg-white rounded-full"
      style={{
        width: size,
        height: size,
        top,
        left,
        animation: `starMove ${duration} linear infinite`,
        animationDelay: delay,
      }}
    />
  );
};

export default Star;
