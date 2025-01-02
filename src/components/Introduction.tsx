"use client";

import { useEffect, useRef, useState } from "react";
import Tag from "./Tag"
import { useMotionValue, useScroll, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";

const text = `Competing in the biggest international tournaments.
Building a strong and recognizable esports brand.
Expanding into new games and markets.
Establishing long-term partnerships with renowned companies and brands.
`
const words = text.split(' ');

export const Introduction = () => {
    const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress} = useScroll({target:scrollTarget , offset: ['start end', 'end end']});
  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on('change', (latest) => {
        setCurrentWord(latest);
    })
  }, [wordIndex])

  return (
    <section className="bg-gray-400 py-28 lg:py-40 overflow-clip">
        <div className="container">
            <div className="sticky top-20 md:top-28 lg:top-40">
                <div className="flex justify-center">
                <Tag>Future Goals</Tag>
                </div>
                <div className="text-4xl md:text-6xl lg:text-6xl text-center text-white font-medium mt-10">
                    <span>Your Esports Team</span> {" "}
                    <span className="">{words.map((word, wordIndex)=> (
                        <span key={wordIndex} className={twMerge("transition duration-500 text-white/15",wordIndex < currentWord && 'text-white')}>{`${word} `}</span>
                    ))}
                    </span>
                    <span className="text-white block">Thats our future goals</span>
                </div>
            </div>
            <div className="h-[150vh]" ref={scrollTarget}></div>
        </div>
    </section>
  )
}


