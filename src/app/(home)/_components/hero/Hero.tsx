"use client";

import useHero from "../../_hooks/useHero.hook";
import "react-ios-liquid-glass/dist/index.css";
import LoadingOverlay from "./LoadingOverlay";
import HeroContent from "./HeroContent";
import HeroCanvas from "./HeroCanvas";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const { canvasRef, isLoading } = useHero();

  if (!isMounted) return null;

  return (
    <div className="hero__section min-h-screen relative">
      <LoadingOverlay isLoading={isLoading} />
      <HeroContent />
      <HeroCanvas canvasRef={canvasRef} />
    </div>
  );
}
