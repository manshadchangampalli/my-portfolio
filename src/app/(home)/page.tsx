"use client";

import "react-ios-liquid-glass/dist/index.css";
import useDevice from "@/hooks/useDevice";
import { cn } from "@/utils/classNames";
import ReactLenis from "lenis/react";
import { useEffect, useState } from "react";
import Hero from "./_components/hero/Hero";
import { Canvas } from "@react-three/fiber";
import Gallery from "./_components/gallery/gallery";
import Profile from "./_components/profile/Profile";
import Experience from "./_components/experience/Experience";

export default function Home() {
  const { isMobile, isClient } = useDevice();
  const [isFixed, setIsFixed] = useState(false);

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

  useEffect(() => {
    console.log("isFixed changed:", isFixed);
  }, [isFixed]);

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
      <Profile />
      <div className={cn("w-full bg-black", isFixed ? "fixed inset-0 w-screen h-screen z-50" : "h-screen")}>
        <Canvas
          style={{ width: "100%", height: "100%", backgroundColor: "#000000" }}
          gl={{ alpha: false }}
          camera={{ position: [0, 0, 5], fov: 50 }}>
          <Experience setIsFixed={setIsFixed} />
        </Canvas>
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
