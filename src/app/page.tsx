import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { FAQs } from "@/components/FAQs";
import  {Footer}  from "@/components/Footer";
import { Introduction } from "@/components/Introduction";
import { Achievements } from '@/components/Achievment';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Introduction />
      <Achievements/>
      <FAQs />
      <Footer />
    </>
  );
}
