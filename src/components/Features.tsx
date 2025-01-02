import { Feature } from "./Feature";

const features = [
  {
    title: "Scrims and Tournaments",
    description: 
        "Experience competitive play at its finest. Participate in high-quality scrims and tournaments, open to the community and exclusive to our players, with seamless matchmaking and automated brackets.",
  },
  {
    title: "Player Development",
    description: 
        "Empowering our players to succeed. From professional coaching to personal branding support, we provide the resources our players need to grow and thrive in their esports careers.",
  },
  {
    title: "Community and Engagement",
    description: 
        "Be part of something bigger. Join a vibrant community of players, fans, and creators. Participate in clan wars, creative contests, and other exciting activities that connect esports enthusiasts worldwide.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
          <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">Just Smarter</h2>
          <div className="max-w-xl mx-auto">
            <p className="text-center mt-5 text-xl text-white/70">
            Organize. Compete. Grow. At SMRTR, we aim to elevate esports by providing the ultimate platform for both our players and the community.
            </p>
          </div>
          <div className="mt-16 flex flex-col sm:flex-row gap-4">
            {features.map(({title, description}) => (
              <Feature title={title} description={description} key={title} />
            ))}
          </div>
      </div>
    </div>
  );
};
