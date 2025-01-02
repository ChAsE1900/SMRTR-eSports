"use client"

import ArrowIcon from "../assets/icons/arrow-w.svg"
import { RainbowButton }  from "./ui/rainbow-button";
import cursorImage from "../assets/images/cursor.png"
import message from "../assets/images/message.png"
import discord from "../assets/images/1000_F_547138427_GkHrk6VCv4WW4VLl4J3S1ZYlKY6DH4Fr-removebg-preview.png"
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black via-[#808080] to-[#bdbdbd] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-gray bg-[radial-gradient(closest-side,#000_82%,#bdbdbd)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a href="#" className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30">
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">Version 1.0 is here</span>
            <span className="inline-flex items-center gap-1">
              <span>Read more</span>
              <ArrowIcon/>
            </span>
          </a>
        </div>
        <div className="flex justify-center mt-8 ">
          <div className="inline-flex relative">
            {/* Delete when Banner */}<h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex">Just smarter</h1>
            <motion.div className="absolute right-[590px] top-[108px] hidden sm:inline" drag dragSnapToOrigin>
              <Image src={discord} alt="" height="200" width="200" className="max-w-none" draggable="false"/>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
        <p className="text-center text-xl mt-8 max-w-md">
           {/* Delete when Banner */} Level up your game with an Discord built to track your performance, fuel your passion, and celebrate every victory in your esports journey
        </p>
        </div>
        <div className="flex justify-center mt-8">
          <RainbowButton href="https://discord.gg/smrtrgg" className="hover:opacity-50 transition hover:-translate-y-2">Join the Discord</RainbowButton>
        </div>
      </div>
    </div>
  );
};
