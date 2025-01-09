import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

const reviews = [
  {
    name: "Founder",
    username: "@akêdo",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Head Scout & Recruitment Lead",
    username: "@Kobe",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Head Manager",
    username: "@Daeky",
    img: "https://avatar.vercel.sh/jane",
  },
];

export default function OurTeam() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>
      <div className="flex flex-col items-center space-y-8 md:space-y-12">
        {/* Akêdo's Card */}
        <div className="flex justify-center">
          <Card className="w-full max-w-xs md:max-w-sm transition-transform duration-300 hover:scale-105 bg-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Image
                  src={reviews[0].img}
                  alt={reviews[0].name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <h2 className="text-xl font-semibold">{reviews[0].name}</h2>
                  <p className="text-sm text-muted-foreground">{reviews[0].username}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Other Cards */}
        <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8">
          {reviews.slice(1).map((member, index) => (
            <Card
              key={index}
              className="w-full max-w-xs md:max-w-sm transition-transform duration-300 hover:scale-105 bg-gray-200"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{member.name}</h2>
                    <p className="text-sm text-muted-foreground">{member.username}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
