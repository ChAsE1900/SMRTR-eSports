import ArrowIcon from "../assets/icons/arrow-w.svg"

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black via-[#808080] to-[#bdbdbd] py-[72px] relative overflow-clip">
      <div className="container">
        <div className="flex items-center justify-center">
          <a href="#" className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30">
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">Version 1.0 is here</span>
            <span className="inline-flex items-center gap-1">
              <span>Read more</span>
              <ArrowIcon/>
            </span>
          </a>
        </div>
        <h1 className="text-7xl font-bold tracking-tighter text-center mt-8">Just smarter</h1>
        <p className="text-center text-xl mt-8">
        Level up your game with an Discord built to track your performance, fuel your passion, and celebrate every victory in your esports journey
        </p>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">Get for free</button>
        </div>
      </div>
      <div className="absolute h-[375px] w-[750px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-gray"></div>
    </div>
  );
};
