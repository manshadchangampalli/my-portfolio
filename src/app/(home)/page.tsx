"use client";

import "react-ios-liquid-glass/dist/index.css";
import useDevice from "@/hooks/useDevice";
import { cn } from "@/utils/classNames";
import ReactLenis from "lenis/react";
import { useEffect } from "react";
import Hero from "./_components/hero/Hero";
import { Canvas } from "@react-three/fiber";
import Gallery from "./_components/gallery/gallery";

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
      <ReactLenis
        root
        options={{ lerp: 1 }}
      />
      <main className="bg-black w-full">
        <div className={cn(isClient && isMobile ? "" : "h-[800dvh]")}>
          <Hero />
        </div>
      </main>
      <div className="w-screen h-[30vh] bg-red-500">
        <h1 className="text-white text-4xl font-bold">Skills</h1>
      </div>
      <div className="w-full bg-black">
        <div className="w-screen h-screen">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            gl={{ antialias: true, alpha: false }}>
            <Gallery />
          </Canvas>
        </div>
      </div>
    </>
  );
}
