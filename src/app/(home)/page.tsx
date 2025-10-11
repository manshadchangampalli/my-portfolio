"use client";

import dynamic from "next/dynamic";
import "react-ios-liquid-glass/dist/index.css";
import HeroProfile from "./_components/hero/HeroProfile";
import SecondSection from "./_components/second-section/SecondSection";
import useDevice from "@/hooks/useDevice";
import { cn } from "@/utils/classNames";
import { useEffect, useState } from "react";

const Hero = dynamic(() => import("./_components/hero/Hero"));

export default function Home() {
  const [isMount, setIsMount] = useState(false);
  const { isMobile, isClient } = useDevice();

  useEffect(() => {
    if (isMount) return;
    setIsMount(true);
  }, [isMount]);

  // if (!isMount) return null;
  return (
    <main className="bg-white w-full">
      <div className={cn(isClient && isMobile ? "" : "h-[800dvh]")}>
        <Hero />
      </div>
      <HeroProfile />
      <SecondSection />
    </main>
  );
}
