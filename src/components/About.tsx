'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const aboutText = `
Welcome to SMRTR eSports, a dedicated esports organization with a passion for competitive Fortnite. Our team was founded with a mission to push the limits of performance, strategy, and community engagement in the ever-evolving world of Battle Royale gaming.

At SMRTR eSports, we pride ourselves on fostering a culture of teamwork, resilience, and continuous growth. We bring together talented players, skilled strategists, and creative minds to achieve success both in-game and in the broader esports landscape. Whether competing in high-stakes tournaments or engaging in rigorous practice sessions, our team is committed to excellence and innovation.

More than just players, we are builders of a vibrant and inclusive community. Through our Discord server, streaming events, and community tournaments, we aim to connect with fans and Fortnite enthusiasts around the globe. Our goal is to inspire others to embrace their potential, work collaboratively, and elevate the competitive spirit.

Join us as we aim for greatness in Fortnite and beyond. Together, we are shaping the future of esports, one game at a time.
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
