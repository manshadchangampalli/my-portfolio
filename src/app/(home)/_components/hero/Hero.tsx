"use client";

import useHero from "../../_hooks/useHero.hook";
import "react-ios-liquid-glass/dist/index.css";
import LoadingOverlay from "./LoadingOverlay";
import HeroContent from "./HeroContent";
import HeroCanvas from "./HeroCanvas";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { useEffect, useState, useMemo } from "react";
import { cn } from "@/utils/classNames";
import { useBreakpoints } from "@/hooks/useBreakpoints";

interface HeroSectionProps {
  onLoadingChange?: (isLoading: boolean) => void;
}

export default function HeroSection({ onLoadingChange }: HeroSectionProps) {
  const { canvasRef, canvasContainerRef, backgroundRef, isLoading, loadingProgress, showLoadingPage, setLoadingPage } = useHero();
  const [removeBlackOverlay, setRemoveBlackOverlay] = useState(false);
  const { isLg, isMd } = useBreakpoints();

  // Notify parent when loading state changes
  useEffect(() => {
    onLoadingChange?.(showLoadingPage);
  }, [showLoadingPage, onLoadingChange]);

  // Adjust camera Y position for mobile devices
  const cameraY = useMemo(() => {
    return (!isLg && !isMd) ? -2 : -1.5;
  }, [isLg, isMd]);

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
        className={cn("w-full z-10 h-dvh relative bg-black", removeBlackOverlay && "bg-transparent")}>
        <div
          ref={canvasContainerRef}
          className="w-full h-full">
          {!showLoadingPage && (
            <Canvas camera={{ position: [0, cameraY, 5], fov: 50 }}>
              <Physics>
                <HeroContent setRemoveBlackOverlay={() => setRemoveBlackOverlay(true)} />
              </Physics>
            </Canvas>
          )}
        </div>
      </div>
      <HeroCanvas canvasRef={canvasRef} />
    </div>
  );
}
