"use client"

import Image from "next/image";
import Dc from "../assets/images/DC.png"
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export const ProductShowcase = () => {
  const dcImage = useRef<HTMLImageElement>(null)
  const { scrollYProgress } = useScroll({
    target: dcImage,
    offset: ["start end", "end end"]
    
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [15,0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-gray-400 py-[72px] sm:py-24">
      <div className="container">
          <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">Intunitive server structure</h2>
          <div className="max-w-xl mx-auto">
            <p className="text-xl text-center text-white/70 mt-5">Celebrate your team&apos;s victories and individual milestones with a community designed to track progress, fuel motivation, and honor achievements—one match, one goal, one success at a time.</p>
          </div>
          <motion.div style={{opacity: opacity, rotateX: rotateX, transformPerspective: "800px"}}>
            <Image src={Dc} alt="Discord" className="mt-14" ref={dcImage}/>
          </motion.div>
      </div>
    </div>
  );
};
