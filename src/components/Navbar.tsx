"use client"
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from 'lucide-react';
import logo from "../assets/images/SMRTR8 (1).webp";
import InteractiveHoverButton from "./ui/interactive-hover-button";

const navItems = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/team", text: "Team" },
  { href: "/partner", text: "Partner" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between relative">
          {/* Left Side: Logo */}
          <div className="relative">
            <Image src={logo} alt="logo" className="h-20 w-20 relative rounded-md" />
          </div>

          {/* Center: Title */}
          <div className="absolute inset-x-0 flex justify-center items-center pointer-events-none">
            <h1 className="text-white text-lg sm:text-xl font-semibold">SMRTR eSports</h1>
          </div>

          {/* Right Side: Navigation and Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
          <nav className="gap-6 items-center hidden sm:flex">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                {item.text}
              </a>
            ))}
            <InteractiveHoverButton href="https://discord.gg/smrtrgg" text="Discord" className="text-black"/>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-black overflow-hidden"
          >
            <nav className="flex flex-col items-center py-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="text-white py-2 hover:text-opacity-60 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.text}
                </motion.a>
              ))}
              <motion.div
                className="mt-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <InteractiveHoverButton href="https://discord.gg/smrtrgg" text="Discord"  className="text-black"/>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};