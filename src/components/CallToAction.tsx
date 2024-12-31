"use client"
import { ConfettiButton } from "./ui/confetti";

export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center">
      <div className="container max-w-xl relative">
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">Get early access</h2>
        <p className="text-xl text-white/70 mt-5">
        Track your gaming progress, set achievable goals, and witness your growth as a player. With personalized insights and motivational features, you&apos;ll feel the thrill of accomplishment with every match you play.
        </p>
        <form action="" className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input type="email" placeholder="your@email.com" className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-black sm:flex-1" />
          <ConfettiButton className="h-12 px-5">Get access</ConfettiButton>
        </form>
      </div>
    </div>
  );
};
