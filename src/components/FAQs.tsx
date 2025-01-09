"use client";

import PlusIcon from "../assets/icons/plus.svg"
import MinusIcon from "../assets/icons/minus.svg"
import React from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    question: "How do I join the team?",
    answer:
      "To join, simply reach out through our recruitment form on Discord or contact a team manager. Make sure to highlight your skills and experience in competitive gaming!",
  },
  {
    question: "Are there tryouts for new members?",
    answer:
      "Yes, we conduct regular tryouts to evaluate new members. Keep an eye on our Discord announcements for upcoming tryout dates and requirements.",
  },
  {
    question: "Can I switch roles within the team?",
    answer:
      "Absolutely! We're flexible and support role changes if it aligns with the team's needs. Discuss your preferred role with the team captain or coach.",
  },
  {
    question: "How does the team ensure fair play?",
    answer:
      "We have a strict no-cheating policy. Our moderation team actively monitors gameplay, and we use advanced tools to ensure fairness and integrity during matches.",
  },
];

const AccordionItem = ({question, answer}: {question: string; answer: string;}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return(
  <div className="py-7 border-b border-white/30 hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
  <div className="flex items-center">
    <span className="flex-1 text-lg font-bold">{question}</span>
    {isOpen ? <MinusIcon/> : <PlusIcon/>}
  </div>
  <AnimatePresence>
  {isOpen && (
    <motion.div initial={{opacity: 0, height: 0, margin: 0, marginTop: 0}} animate={{opacity: 1, height: "auto", marginTop: "16px"}} exit={{opacity: 0, height: 0, marginTop: 0}}>{answer}</motion.div>
  )}
  </AnimatePresence>
</div>
  )
}

export const FAQs = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter">Fequently asked questions</h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer}) => (
            <AccordionItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
};
