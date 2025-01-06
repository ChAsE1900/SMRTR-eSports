"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';  // Import router for redirection // Import supabase client
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
import { Achievements } from '@/components/Achievment';

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <Introduction />
      <Achievements/>
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  );
}
