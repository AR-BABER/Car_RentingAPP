"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ShowMoreP } from "@/types";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";
const ShowMore = ({ pageNumber, isNext }: ShowMoreP) => {
  const router = useRouter();
  const handleNav = () => {
    const newlimit = (pageNumber + 1) * 10;
    const newPathname = updateSearchParams("limit", `${newlimit}`);
    router.push(newPathname);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handelClick={handleNav}
        />
      )}
    </div>
  );
};

export default ShowMore;
