"use client"
import OrbitingCircles from "@/components/ui/orbiting-circles";
import { useState } from "react";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-black">
      <div className="relative h-[500px] w-full flex flex-col items-center justify-center">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-gray-500 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent">
          Partners
        </span>

        {/* Inner Circles */}
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          duration={20}
          delay={20}
          radius={80}
        >
          <QuestionMark />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={80}
        >
          <QuestionMark />
        </OrbitingCircles>

        {/* Outer Circles (reverse) */}
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={190}
          duration={20}
          reverse
        >
          <QuestionMark />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={190}
          duration={20}
          delay={20}
          reverse
        >
          <QuestionMark />
        </OrbitingCircles>
      </div>

      <Contact />
    </div>
  );
}

const QuestionMark = () => (
  <div className="flex items-center justify-center w-full h-full rounded-full bg-white text-black text-2xl font-bold">
    ?
  </div>
);

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    if (email.trim() === "" || message.trim() === "") {
      alert("Please fill out both fields before sending.");
      return;
    }

    const mailtoLink = `mailto:concact.smrtr@gmail.com?subject=Contact Us&body=${encodeURIComponent(
      `From: ${email}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="bg-black text-white py-20 px-6 w-full flex flex-col items-center">
      <div className="max-w-2xl text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-400 text-lg mb-8">
          Contact us if you want to build the future of esports together
        </p>
        <div className="bg-black rounded-lg shadow-md p-8 space-y-6">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 bg-gray-800 border border-gray-700 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Message Textarea */}
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 bg-gray-800 border border-gray-700 rounded-md text-gray-300 h-32 resize-none placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Send Button */}
          <button
            onClick={handleSendEmail}
            className="w-full bg-blue-500 text-white font-bold py-3 rounded-md hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrbitingCirclesDemo;