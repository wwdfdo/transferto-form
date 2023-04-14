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
import { motion } from "framer-motion";
import rightleaf from "../../images/rleaf.png";
const Card = () => {
  return (
    <div className="relative text-white lg:w-2/5 w-4/5 ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2.5,
          delay: 0.5,
        }}
        className="dot absolute w-[50px] h-[50px] -top-10 -right-10 "
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
        }}
        className="dot absolute w-[70px] h-[70px] -top-16 -right-0 "
      ></motion.div>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        src={gem1}
        className="absolute lg:top-0 -top-10 lg:-left-20 -left-8 lg:w-[60px] w-[40px] "
        alt=""
      />
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        src={gem2}
        className="absolute lg:flex hidden top-0 lg:-right-16 -right-8 lg:w-[60px] w-[40px] "
        alt=""
      />
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: 1.5,
          type: "spring",
        }}
        className="flex flex-col justify-center  lg:py-10 py-4 px-8  bg-[#181a1c] lg:gap-10 gap-4 rounded-xl"
      >
        <img
          src={rightleaf}
          className="absolute -right-8 -top-10 w-[80px] -rotate-12"
          alt=""
        />
        <div className="flex gap-5 items-center justify-center">
          <TiBatteryHigh size={32} />
          <h2 className="text-lg font-semibold">Choose Your Option</h2>
        </div>

        <div className="flex flex-col  py-12 px-4 shadow-[inset_0px_0px_10px_0px_rgb(19,242,135,1)] gap-2 justify-center rounded-xl">
          <SelectTabs items={selectItems1} />
          <div className=" flex items-center px-5 gap-4">
            <div className="h-[.5px] w-1/2 bg-slate-500"></div>
            <RiArrowUpDownFill size={28} className="text-slate-300" />
            <div className="h-[.5px] w-1/2 bg-slate-500"></div>
          </div>
          <SelectTabs items={selectItems2} />
        </div>
        <button className="flex justify-center shadow-[0px_5px_10px_0px_rgb(110,79,204,1)] w-1/2 mx-auto rounded-lg bg-pink-500 py-1 text-black font-bold">
          Swap
        </button>
        <img
          src={rightleaf}
          className="absolute -left-8 -bottom-10 w-[80px] rotate-[163deg]"
          alt=""
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
        }}
        className="dot absolute w-[50px] h-[50px] right-0 "
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
        }}
        className="dot absolute w-[70px] h-[70px] -bottom-10 -right-10 "
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
        }}
        className="dot absolute w-[50px] h-[50px] bottom-48 -left-20 "
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
        }}
        className="dot absolute w-[70px] h-[70px] bottom-40 -left-32 "
      ></motion.div>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        src={gem3}
        className="absolute right-20 -bottom-12 lg:-bottom-20 lg:w-[60px] w-[40px] "
        alt=""
      />
    </div>
  );
};

export default Card;
