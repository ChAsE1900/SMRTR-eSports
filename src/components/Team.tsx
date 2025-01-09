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
    name: "Community Manager",
    username: "@Quave; Mirco",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Head Manager",
    username: "@Daeky",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Event Manager",
    username: "@amo",
    img: "https://avatar.vercel.sh/jenny",
  },
];

export default function OurTeam() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((member, index) => (
          <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-gray-200">
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
  )
}

