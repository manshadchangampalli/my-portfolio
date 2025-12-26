"use client";

import useHero from "../../_hooks/useHero.hook";
import "react-ios-liquid-glass/dist/index.css";
import LoadingOverlay from "./LoadingOverlay";
import HeroContent from "./HeroContent";
import HeroCanvas from "./HeroCanvas";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Physics } from "@react-three/rapier";

export default function HeroSection() {
  const { canvasRef, isLoading, loadingProgress } = useHero();
  return (
    <div className="hero__section min-h-dvh relative">
      <LoadingOverlay
        isLoading={isLoading}
        loadingProgress={loadingProgress}
      />
      <div className="w-full z-10 h-screen relative bg-black/30">
        <Canvas camera={{ position: [0, -1.5, 5], fov: 50 }}>
          <Physics>
            <HeroContent />
          </Physics>
        </Canvas>
      </div>
      <HeroCanvas canvasRef={canvasRef} />
    </div>
  );
}
