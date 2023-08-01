"use client";
import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

function CustomButton({
  textstyles,
  rightIcon,
  btnType,
  title,
  containerStyles,
  handelClick,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handelClick}
    >
      <span className={`flex-1${textstyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt={rightIcon}
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
}

export default CustomButton;
