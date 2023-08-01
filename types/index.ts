import { MouseEventHandler } from "react";
import { Interface } from "readline";

export interface filterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}
export interface ShowMoreP {
  pageNumber: number;
  isNext: boolean;
}
export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handelClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textstyles?: string;
  rightIcon?: string;
  isDisbaled?: boolean;
}
export interface SearchManuprops {
  Smanufecturar: string;
  setmanufecturar: (manufecturar: string) => void;
}
export interface CustomeFilter {
  title: string;
  options: optionsProps[];
}
export interface optionsProps {
  title: string;
  value: string;
}
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
