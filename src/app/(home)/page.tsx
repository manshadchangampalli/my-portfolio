"use client";

import "react-ios-liquid-glass/dist/index.css";
import useDevice from "@/hooks/useDevice";
import { cn } from "@/utils/classNames";
import ReactLenis from "lenis/react";
import { lazy, Suspense, useEffect, useState } from "react";
import Hero from "./_components/hero/Hero";
import { Canvas } from "@react-three/fiber";
import Profile from "./_components/profile/Profile";
import { ExperienceControls } from "./_components/experience/controls/ExperienceControls";

const Experience = lazy(() => import("./_components/experience/Experience").then((mod) => ({ default: mod.default })));
const Gallery = lazy(() => import("./_components/gallery/gallery").then((mod) => ({ default: mod.default })));

export default function Home() {
  const [isFixed, setIsFixed] = useState(false);
  const { isMobile } = useDevice();
  // Removed unnecessary resize listener and console.logs for performance

  useEffect(() => {
    document.body.style.overflow = isFixed ? "hidden" : "auto";
  }, [isFixed]);

  return (
    <>
      {isFixed && <ExperienceControls />}
      <ReactLenis
        root
        options={{
          lerp: 0.05,
          duration: 1,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
          infinite: false,
          prevent: (node) => node.classList.contains("hero__section"),
        }}
      />
      <main className="bg-black w-full">
        <div className={cn("h-[800dvh]")}>
          <Hero />
        </div>
      </main>
      <Profile />
      <div className={cn("w-full bg-black", isFixed ? "fixed inset-0 w-screen h-screen z-50" : "h-[min(90vh,700px)]")}>
        <Canvas
          style={{ width: "100%", height: "100%", backgroundColor: "#000000" }}
          gl={{
            alpha: false,
            antialias: false,
            powerPreference: "high-performance",
            stencil: false,
            depth: false,
          }}
          dpr={isMobile ? [0.5, 1] : [1, 2]}
          frameloop="demand"
          camera={{ position: [0, 0, 5], fov: 50 }}>
          <Suspense fallback={null}>
            <Experience setIsFixed={setIsFixed} />
          </Suspense>
        </Canvas>
      </div>
      <div className="w-full bg-black">
        <div className="w-screen h-screen">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }}
            dpr={isMobile ? [0.5, 1] : [1, 2]}
            frameloop="always">
            <Suspense fallback={null}>
              <Gallery />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  );
}
