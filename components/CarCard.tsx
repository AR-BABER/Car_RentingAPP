"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import CustomButton from "./CustomButton";
import { calculateCarRent, generateCarImage } from "@/utils";
import CarDetails from "./CarDetails";
interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-bold">
        <span className="self-start text-[14px] font-semibold">Rs/</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/Day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImage(car)}
          alt="carmodel"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray-300">
          <div className=" flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering"
            />
            <p className="tetx-[14-px]">
              {transmission == "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="steering" />
            <p className="tetx-[14-px]">{drive.toUpperCase()}</p>
          </div>
          <div className=" flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="steering" />
            <p className="tetx-[14-px]">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="view more"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textstyles=" text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handelClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={IsOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};
export default CarCard;
