import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Founder",
    username: "@akêdo",
    body: "",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Head Scout & Recruitmend Lead",
    username: "@Kobe",
    body: "",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Community Manager",
    username: "@Quave; Mirco",
    body: "",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Head Manager",
    username: "@Daeky",
    body: "",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Event Manager",
    username: "@amo",
    body: "",
    img: "https://avatar.vercel.sh/jenny",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="bg-black py-16">
      <h2 className="text-white text-center font-bold text-5xl sm:text-6xl tracking-tighter">Our Team</h2>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-gray-50/[.1] bg-black md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
      </div>
    </div>
  );
}
