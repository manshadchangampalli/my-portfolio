"use client";

import "react-ios-liquid-glass/dist/index.css";
import useDevice from "@/hooks/useDevice";
import { cn } from "@/utils/classNames";
import { lazy, Suspense, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import Hero from "./_components/hero/Hero";
import { Canvas } from "@react-three/fiber";
import Profile from "./_components/profile/Profile";
import { ExperienceControls } from "./_components/experience/controls/ExperienceControls";
import SmoothScrollProvider from "@/components/SmoothScroll/SmoothScrollProvider";
import { ExperienceLoadingFallback, GalleryLoadingFallback } from "@/components/LoadingStates/SceneLoadingFallback";

// Preload all experience models immediately on page load for instant loading when user clicks
useGLTF.preload("/model/thirty-days/30days.glb");
useGLTF.preload("/model/carscan/scene.glb");
useGLTF.preload("/model/confiancelabs/confiancelabs_model.glb");
useGLTF.preload("/model/ispg/ispg_phone.glb");

const Experience = lazy(() => import("./_components/experience/Experience").then((mod) => ({ default: mod.default })));

export default function Home() {
  const [isFixed, setIsFixed] = useState(false);
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const { isMobile } = useDevice();

  return (
    <>
      {isFixed && <ExperienceControls />}
      {/* Conditional Lenis loading - disabled on mobile and during loading for better performance */}
      <SmoothScrollProvider
        enableOnMobile={false}
        disabled={isLoadingPage}
      />
      <main className="bg-black w-full">
        <div className={cn("h-[800dvh]")}>
          <Hero onLoadingChange={setIsLoadingPage} />
        </div>
      </main>
      <Profile />
      <div className={cn("w-full bg-black", isFixed ? "fixed inset-0 w-screen h-screen z-50" : "h-[1800px] md:h-[1200px] lg:h-[700px]")}>
        <Suspense fallback={<ExperienceLoadingFallback />}>
          <Canvas
            style={{ width: "100%", height: "100%", backgroundColor: "#000000" }}
            gl={{
              alpha: false,
              antialias: false,
              powerPreference: "high-performance",
              stencil: false,
              // depth: false,
            }}
            dpr={isMobile ? [0.5, 1] : [1, 2]}
            frameloop="demand"
            camera={{ position: [0, 0, 5], fov: 50 }}>
            <Suspense fallback={null}>
              <Experience setIsFixed={setIsFixed} />
            </Suspense>
          </Canvas>
        </Suspense>
      </div>
      <div className="h-screen w-full bg-black"></div>
    </>
  );
}
