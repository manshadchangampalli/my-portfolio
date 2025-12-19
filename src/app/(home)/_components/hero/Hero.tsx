"use client";

import useHero from "../../_hooks/useHero.hook";
import "react-ios-liquid-glass/dist/index.css";
import LoadingOverlay from "./LoadingOverlay";
import HeroContent from "./HeroContent";
import HeroCanvas from "./HeroCanvas";

export default function HeroSection() {
  const { canvasRef, isLoading, loadingProgress } = useHero();
  return (
    <div className="hero__section min-h-dvh relative">
      <LoadingOverlay isLoading={isLoading} loadingProgress={loadingProgress} />
      <HeroContent />
      <HeroCanvas canvasRef={canvasRef} />
    </div>
  );
}
