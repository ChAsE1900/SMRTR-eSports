"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../assets/images/SMRTR8 (1).webp";

export default function Imprint() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className={`bg-black text-white p-12 transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl font-bold mb-8">Imprint</h2>
        <div className="flex items-start space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-semibold mb-4">SMRTR eSports</h3>
            <p className="text-lg mb-2">Marius Dörfler</p>
            <p className="text-lg mb-2">Augustinerstraße 11</p>
            <p className="text-lg mb-6">90579 Langenzenn</p>
            <div className="group">
              <p className="text-lg mb-1 transition-colors duration-300 ease-in-out group-hover:text-gray-400">
                Mail:{" "}
                <a
                  href="mailto:contact.smrtr@gmail.com"
                  className="underline text-blue-400 hover:text-blue-500"
                >
                  contact.smrtr@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src={logo}
              alt="SMRTR eSports Logo"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}