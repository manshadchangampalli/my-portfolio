"use client";

import dynamic from "next/dynamic";
import "react-ios-liquid-glass/dist/index.css";
import HeroProfile from "./_components/hero/HeroProfile";

const Hero = dynamic(() => import("./_components/hero/Hero"),);

export default function Home() {
  return (
    <main className="bg-white w-full">
      <Hero />
      <HeroProfile />
      <div className="min-h-screen bg-black z-0 flex items-center justify-center relative"></div>
    </main>
  );
}
