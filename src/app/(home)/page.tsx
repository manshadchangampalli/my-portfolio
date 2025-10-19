"use client";

import "react-ios-liquid-glass/dist/index.css";
import HeroProfile from "./_components/hero/HeroProfile";
import Evolution from "./_components/evolution/Evolution";
import useDevice from "@/hooks/useDevice";
import { cn } from "@/utils/classNames";
import ReactLenis from "lenis/react";
import { useEffect } from "react";
import Hero from "./_components/hero/Hero";

export default function Home() {
  const { isMobile, isClient } = useDevice();

  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("Resized!", window.innerHeight);
    });
    return () => {
      window.removeEventListener("resize", () => {
        console.log("Resized!", window.innerHeight);
      });
    };
  }, []);

  return (
    <>
      <ReactLenis root options={{ lerp: 1 }} />
      <main className="bg-black w-full">
        <div className={cn(isClient && isMobile ? "" : "h-[800dvh]")}>
          <Hero />
        </div>
        <HeroProfile />
        <Evolution />
      </main>
    </>
  );
}
