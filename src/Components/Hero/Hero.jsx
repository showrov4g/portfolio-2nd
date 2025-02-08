import React from "react";
import profile from "../../assets/profile.png";
import "./hero.css";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-10 items-center justify-around my-20">
      <div className="text-center sm:text-start">
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#42446E]">Hi 👋,</h1>
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#42446E]">My name is</h1>
        <h1 className="heading-color text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold transition-all duration-500 hover:scale-110 inline-block">
          {" "}
          <TypeAnimation
            sequence={[
              
              "Showrov Ghosh",
              1000, 
              "Showrov Ghosh",
              1000, 
            ]}
            wrapper="span"
            speed={20}
            repeat={Infinity}
          />
        </h1>
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#42446E]">
          I build applications for web
        </h1>
      </div>
      <div>
        <img
          className="w-[200px] h-[200px]  md:w-[300px] md:h-[300px] rounded-full border-8 border-t-amber-300 border-r-amber-500 border-b-amber-700 border-l-amber-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          src={profile}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
