"use client";

import dynamic from "next/dynamic";
import "react-ios-liquid-glass/dist/index.css";
import HeroProfile from "./_components/hero/HeroProfile";
import SecondSection from "./_components/second-section/SecondSection";

const Hero = dynamic(() => import("./_components/hero/Hero"),);

export default function Home() {
  return (
    <main className="bg-white w-full">
      <Hero />
      <HeroProfile />
      <SecondSection />
    </main>
  );
}
