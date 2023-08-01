"use client";
import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
const Hero = () => {
  const handelScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car --with ease and comfort
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental process this "EID" with our efficient
          booking process
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handelClick={handelScroll} //handelclick name could be onclick to make more sence as its passing a function to onclick in button compoenet
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className=" hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
