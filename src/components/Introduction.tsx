"use client";

import { useEffect, useRef, useState } from "react";
import Tag from "./Tag";
import { useScroll, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";

const text = `
- Competing in the biggest international tournaments.
- Building a strong and recognizable esports brand.
- Expanding into new games and markets.
- Establishing long-term partnerships with renowned companies and brands.
`;

const lines = text.trim().split("\n");

export const Introduction = () => {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });
  const [currentLine, setCurrentLine] = useState(0);
  const lineIndex = useTransform(scrollYProgress, [0, 1], [0, lines.length]);

  useEffect(() => {
    lineIndex.on("change", (latest) => {
      setCurrentLine(latest);
    });
  }, [lineIndex]);

  return (
    <section className="bg-gray-400 py-28 lg:py-40 overflow-clip">
      <div className="container">
        <div className="sticky top-20 md:top-28 lg:top-40">
          <div className="flex justify-center">
            <Tag>Future Goals</Tag>
          </div>
          <div className="text-4xl md:text-6xl lg:text-6xl text-center text-white font-medium mt-10">
            <div className="mt-6 space-y-4 text-xl md:text-4xl lg:text-5xl leading-relaxed">
              {lines.map((line, index) => (
                <div
                  key={index}
                  className={twMerge(
                    "opacity-20 transition duration-500",
                    index < currentLine && "opacity-100"
                  )}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
};