import ArrowIcon from "../assets/icons/arrow-w.svg";
import { RainbowButton } from "./ui/rainbow-button";
import headerImage from "@/assets/images/Header.png"; // Your header image file here

export const Hero = () => {
  return (
    <div
      className="bg-black text-white bg-gradient-to-b from-black via-[#808080] to-[#bdbdbd] py-[72px] sm:py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url(${headerImage.src})`, // Next.js requires the .src property
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container relative z-10">
        {/* Action Link */}
        <div className="flex items-center justify-center">
          <a href="#" className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30">
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 1.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read more</span>
              <ArrowIcon />
            </span>
          </a>
        </div>

        {/* Call-to-Action */}
        <div className="flex justify-center mt-14">
          <RainbowButton
            href="https://discord.gg/smrtrgg"
            className="hover:opacity-50 transition hover:-translate-y-2"
          >
            Join the Discord
          </RainbowButton>
        </div>
      </div>
      {/* Optional Overlay for Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#808080]/50 z-[5] pointer-events-none"></div>
    </div>
  );
};