import React from "react";
import { TiBatteryHigh } from "react-icons/ti";
import { RiArrowUpDownFill } from "react-icons/ri";
import "./Card.css";
import gem1 from "../../images/gem1.png";
import gem2 from "../../images/gem2.png";
import gem3 from "../../images/gem3.png";
import { selectItems1 } from "../../arrays/selectItems";
import { selectItems2 } from "../../arrays/selectItems";
import SelectTabs from "../SelectTab/SelectTabs";
const Card = () => {
  return (
    <div className="relative text-white">
      <div className="dot absolute w-[50px] h-[50px] -top-10 -right-10 "></div>
      <div className="dot absolute w-[70px] h-[70px] -top-20 -right-20 "></div>
      <img src={gem1} className="absolute top-0 -left-20" alt="" />
      <img src={gem2} className="absolute top-0 -right-16" alt="" />
      <div className="flex flex-col justify-center  py-10 px-8  bg-[#181a1c] gap-10 rounded-xl w-[600px]">
        <div className="flex gap-5 items-center justify-center">
          <TiBatteryHigh size={32} />
          <h2 className="text-lg font-semibold">Choose Your Option</h2>
        </div>

        <div className="flex flex-col  py-12  shadow-[inset_0px_0px_10px_0px_rgb(19,242,135,1)] gap-2 justify-center rounded-xl">
          <SelectTabs items={selectItems1} />
          <div className=" flex items-center px-5 gap-4">
            <div className="h-[.5px] w-1/2 bg-slate-500"></div>
            <RiArrowUpDownFill size={28} className="text-slate-300" />
            <div className="h-[.5px] w-1/2 bg-slate-500"></div>
          </div>
          <SelectTabs items={selectItems2} />
        </div>
        <div className="flex justify-center shadow-[0px_5px_10px_0px_rgb(110,79,204,1)] w-1/2 mx-auto rounded-lg bg-pink-500 py-1 text-black font-bold">
          Swap
        </div>
      </div>
      <div className="dot absolute w-[50px] h-[50px] right-0 "></div>
      <div className="dot absolute w-[70px] h-[70px] -bottom-10 -right-10 "></div>
      <div className="dot absolute w-[50px] h-[50px] bottom-48 -left-20 "></div>
      <div className="dot absolute w-[70px] h-[70px] bottom-40 -left-32 "></div>
      <img src={gem3} className="absolute right-20" alt="" />
    </div>
  );
};

export default Card;
