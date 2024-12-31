import { Feature } from "./Feature";

const features = [
  {
    title: "Custom Scrims and Tournaments",
    description: 
        "Organize and participate in private scrims, tournaments, and events with automated brackets and matchmaking.",
  },
  {
    title: "Team Management and Recruitment",
    description: 
        "Find teammates, create squads, and manage your team's communication and coordination with dedicated channels and tools.",
  },
  {
    title: "Community and Clan Activities",
    description: 
        "Engage with a vibrant community through clan battles, creative mode contests, and other exciting activities.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
          <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">Everything you need</h2>
          <div className="max-w-xl mx-auto">
            <p className="text-center mt-5 text-xl text-white/70">
              Organize your team&apos;s strategies with customizable task lists and reminders. Collaborate efficiently and track your squad&apos;s progress directly within the server.
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
