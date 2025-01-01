"use client"
import { useState, FormEvent } from "react";
import { ConfettiButton } from "./ui/confetti";

export const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setEmail("");
    }, 500);
  };

  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center">
      <div className="container max-w-xl relative">
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">Get early access</h2>
        <p className="text-xl text-white/70 mt-5">
          Track your gaming progress, set achievable goals, and witness your growth as a player. With personalized insights and motivational features, you&apos;ll feel the thrill of accomplishment with every match you play.
        </p>
        {isSubmitted ? (
          <div className="mt-10 text-2xl font-bold text-green-500">
            Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-white/50 sm:flex-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ConfettiButton type="submit" className="h-12 px-5">
              Get access
            </ConfettiButton>
          </form>
        )}
        {error && <p className="mt-2 text-red-500">{error}</p>}
      </div>
    </div>
  );
};