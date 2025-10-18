"use client";

import dynamic from "next/dynamic";
import "react-ios-liquid-glass/dist/index.css";
import HeroProfile from "./_components/hero/HeroProfile";
import Evolution from "./_components/evolution/Evolution";
import useDevice from "@/hooks/useDevice";
import { cn } from "@/utils/classNames";
import ReactLenis from "lenis/react";
import { useEffect } from "react";

const Hero = dynamic(() => import("./_components/hero/Hero"));

export default function Home() {
  const { isMobile, isClient } = useDevice();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <ReactLenis root />
      <main className="bg-white w-full">
        <div className={cn(isClient && isMobile ? "" : "h-[800dvh]")}>
          <Hero />
        </div>
        <HeroProfile />
        <Evolution />
      </main>
    </>
  );
}
