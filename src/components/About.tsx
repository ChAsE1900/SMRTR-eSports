'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const aboutText = `
About SMRTR
SMRTR Esports is a rising esports organization committed to fostering both professional players and aspiring talents. With a focus on competitive gaming and content creation, we aim to establish a strong global presence in the esports world.

Our Vision
At SMRTR, we believe that success in esports doesnt come solely from talent but is driven by hard work, passion, teamwork, and innovation. Our goal is to discover, nurture, and provide a platform for players and content creators to thrive. Hard work is the key to achieving greatness and ensuring sustainable success in the competitive esports scene.
`

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const [progress, setProgress] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(setProgress)
    return () => unsubscribe()
  }, [scrollYProgress])

  const backgroundOpacity = useTransform(scrollYProgress, [0, 1], [0.05, 0.2])

  return (
    <div ref={containerRef} className="bg-black text-white min-h-screen py-24 relative">
      <motion.div 
        className="absolute inset-0 bg-gray-500"
        style={{ opacity: backgroundOpacity }}
      />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-5xl font-bold mb-12 tracking-tight">About Us</h2>
        <div className="max-w-2xl mx-auto relative">
          <p ref={textRef} className="text-xl leading-relaxed whitespace-pre-wrap">
            {aboutText}
          </p>
          <motion.div
            className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"
            style={{
              scaleY: progress,
              transformOrigin: 'top'
            }}
          />
        </div>
      </div>
    </div>
  )
}
