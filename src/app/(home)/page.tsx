"use client";

import "react-ios-liquid-glass/dist/index.css";
import useDevice from "@/hooks/useDevice";
import { cn } from "@/utils/classNames";
import ReactLenis from "lenis/react";
import { lazy, Suspense, useState, useEffect, useRef } from "react";
import Hero from "./_components/hero/Hero";
import { Canvas } from "@react-three/fiber";
import Profile from "./_components/profile/Profile";
import { ExperienceControls } from "./_components/experience/controls/ExperienceControls";
import ExperienceLoadingSkeleton from "./_components/experience/ExperienceLoadingSkeleton";

const Experience = lazy(() => import("./_components/experience/Experience").then((mod) => ({ default: mod.default })));
const Gallery = lazy(() => import("./_components/gallery/gallery").then((mod) => ({ default: mod.default })));

export default function Home() {
  const [isFixed, setIsFixed] = useState(false);
  const [isExperienceLoading, setIsExperienceLoading] = useState(true);
  const [experienceLoadingProgress, setExperienceLoadingProgress] = useState(0);
  const [shouldRenderCanvas, setShouldRenderCanvas] = useState(false);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const { isMobile, isClient } = useDevice();

  // Defer Canvas rendering until it's near viewport to prevent initial freeze
  useEffect(() => {
    if (typeof window === "undefined" || !canvasContainerRef.current) return;

    // On mobile or slower devices, wait until closer to viewport
    const rootMargin = isMobile ? "200px" : "400px";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldRenderCanvas(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin }
    );

    observer.observe(canvasContainerRef.current);

    // Fallback: render after 1 second if not yet visible (for very slow scroll)
    const timeout = setTimeout(() => {
      setShouldRenderCanvas(true);
      observer.disconnect();
    }, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [isMobile]);

  // Removed unnecessary resize listener and console.logs for performance

  return (
    <>
      <ExperienceControls />
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: 1,
        }}
      />
      <main className="bg-black w-full">
        <div className={cn(isClient && isMobile ? "" : "h-[800dvh]")}>
          <Hero />
        </div>
      </main>
      <Profile />
      <div
        ref={canvasContainerRef}
        className={cn("w-full bg-black relative", isFixed ? "fixed inset-0 w-screen h-screen z-50" : "h-[min(90vh,700px)]")}>
        {(!shouldRenderCanvas || isExperienceLoading) && (
          <div className="absolute inset-0 z-10">
            <ExperienceLoadingSkeleton loadingProgress={experienceLoadingProgress} />
          </div>
        )}
        {shouldRenderCanvas && (
          <Canvas
            style={{ width: "100%", height: "100%", backgroundColor: "#000000" }}
            gl={{ alpha: false, powerPreference: "high-performance", antialias: true }}
            dpr={[1, 2]}
            frameloop="always"
            camera={{ position: [0, 0, 5], fov: 50 }}>
            <Suspense fallback={null}>
              <Experience
                setIsFixed={setIsFixed}
                setIsLoading={setIsExperienceLoading}
                setLoadingProgress={setExperienceLoadingProgress}
              />
            </Suspense>
          </Canvas>
        )}
      </div>
      <div className="w-full bg-black">
        <div className="w-screen h-screen">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }}
            dpr={[1, 2]}
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
