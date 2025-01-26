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