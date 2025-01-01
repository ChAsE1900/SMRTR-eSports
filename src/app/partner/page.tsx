import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { OrbitingCirclesDemo } from "@/components/Partner";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <OrbitingCirclesDemo/>
      <Footer />
    </>
  );
}