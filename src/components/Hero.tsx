import ArrowIcon from "../assets/icons/arrow-w.svg";
import { RainbowButton } from "./ui/rainbow-button";

const HeroImage = "/Header.png"; // Ensure this path is correct

export const Hero = () => {
  return (
    <div
      className="relative h-[500px] bg-black text-white overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container relative z-10 text-center">
        {/* Action Link */}
        <div className="mb-6">
          <a href="#" className="inline-flex gap-3 border py-1 px-3 rounded-lg border-white/30">
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
        <div>
          <RainbowButton
            href="https://discord.gg/smrtrgg"
            className="hover:opacity-50 transition hover:-translate-y-2"
          >
            Join the Discord
          </RainbowButton>
        </div>
      </div>

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#808080]/50 z-[5] pointer-events-none"></div>
    </div>
  );
};