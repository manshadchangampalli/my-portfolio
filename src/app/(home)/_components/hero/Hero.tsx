"use client";

import useHero from "../../_hooks/useHero.hook";
import "react-ios-liquid-glass/dist/index.css";
import LoadingOverlay from "./LoadingOverlay";
import HeroContent from "./HeroContent";
import HeroCanvas from "./HeroCanvas";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";

export default function HeroSection() {
  const { canvasRef, canvasContainerRef, backgroundRef, isLoading, loadingProgress, showLoadingPage, setLoadingPage } = useHero();
  return (
    <div className="hero__section min-h-dvh relative">
      {showLoadingPage && (
        <LoadingOverlay
          isLoading={isLoading}
          setLoadingPage={setLoadingPage}
          loadingProgress={loadingProgress}
        />
      )}
      <div
        ref={backgroundRef}
        className="w-full z-10 h-screen relative bg-black">
        <div
          ref={canvasContainerRef}
          className="w-full h-full">
          {!showLoadingPage && (
            <Canvas camera={{ position: [0, -1.5, 5], fov: 50 }}>
              <Physics>
                <HeroContent />
              </Physics>
            </Canvas>
          )}
        </div>
      </div>
      <HeroCanvas canvasRef={canvasRef} />
    </div>
  );
}
