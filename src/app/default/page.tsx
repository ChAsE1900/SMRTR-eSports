"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';  // Import router for redirection
import { supabase } from '@/utils/supabase';  // Import supabase client
import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Introduction } from "@/components/Introduction";

export default function Home() {
  const [user, setUser] = useState<any>(null);  // User state
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        // Store the current page URL to redirect back to after login (If this is not the root page)
        router.push(`/login?redirectTo=${encodeURIComponent(window.location.pathname)}`);
      } else {
        setUser(user); // Set user if authenticated
      }
    };

    fetchUser();
  }, [router]);

  // If no user yet, return null to prevent rendering while checking auth
  if (!user) return null;

  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <Introduction />
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  );
}
