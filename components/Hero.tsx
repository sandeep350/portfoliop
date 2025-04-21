import React from "react";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="rotate-180 absolute top-[-340px] left-0 z-[-1] w-full h-full object-cover">
        <source src="/blackhole.webm" type="video/webm" />
        <source src="/blackhole.mp4" type="video/mp4" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
