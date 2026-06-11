import React from "react";
import Star from "./star";

const Sky: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden bg-black -z-10">
      {Array.from({ length: 70 }).map((_, i) => (
        <Star key={i} />
      ))}
    </div>
  );
};

export default Sky;
