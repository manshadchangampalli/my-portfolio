"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";
import { useRef, useEffect, useLayoutEffect } from "react";
import { heroAnimations } from "../_config/hero.config";

gsap.registerPlugin(ScrollTrigger);

const totalFrames = 192;
const currentFrame = (i: number) => `/images/hero/output_${(i + 1).toString().padStart(4, "0")}.jpg`;

const useHeroSection = () => {
  const lenis = useLenis();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctx = useRef<CanvasRenderingContext2D | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedCount = useRef(0);
  const videoFrameRef = useRef(0);

  const render = () => {
    if (!ctx.current) return;
    const img = imagesRef.current[videoFrameRef.current];
    if (!img || !img.complete || img.naturalHeight === 0) return;

    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    ctx.current.clearRect(0, 0, canvasWidth, canvasHeight);

    const aspectRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = canvasWidth / canvasHeight;
    let drawWidth, drawHeight, drawX, drawY;

    if (aspectRatio > canvasRatio) {
      drawHeight = canvasHeight;
      drawWidth = canvasHeight * aspectRatio;
      drawY = 0;
      drawX = (canvasWidth - drawWidth) / 2;
    } else {
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / aspectRatio;
      drawX = 0;
      drawY = (canvasHeight - drawHeight) / 2;
    }
    ctx.current.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  };

  const setCanvasSize = () => {
    if (canvasRef.current && ctx.current) {
      const pixelRatio = window.devicePixelRatio || 1;
      canvasRef.current.width = window.innerWidth * pixelRatio;
      canvasRef.current.height = window.innerHeight * pixelRatio;
      canvasRef.current.style.width = `${window.innerWidth}px`;
      canvasRef.current.style.height = `${window.innerHeight}px`;
      ctx.current.setTransform(1, 0, 0, 1, 0, 0);
      ctx.current.scale(pixelRatio, pixelRatio);
    }
  };

  const handleScroll = (self: globalThis.ScrollTrigger) => {
    const progress = Math.min(self.progress / 0.9, 1);
    const targetFrame = Math.round(progress * (totalFrames - 1));
    videoFrameRef.current = totalFrames - targetFrame - 1;
    console.log({ progress });
    render();
    heroAnimations.initialPageOpacity(progress, gsap);
    heroAnimations.initialTextTranslation(progress, gsap);
  };

  const setupScrollTrigger = () => {
    ScrollTrigger.create({
      trigger: "#hero",
      start: "top top",
      end: `+=${window.innerHeight * 7}px`,
      pin: true,
      scrub: 1,
      onUpdate: handleScroll,
    });
  };

  // preload images
  useLayoutEffect(() => {
    ctx.current = canvasRef.current?.getContext("2d") ?? null;
    setCanvasSize();

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.onload = () => {
        loadedCount.current++;
        if (loadedCount.current === totalFrames) {
          render();
          setupScrollTrigger();
        }
      };
      img.src = currentFrame(i);
      imagesRef.current.push(img);
    }

    window.addEventListener("resize", setCanvasSize);
    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  // lenis integration
  useLayoutEffect(() => {
    if (lenis) {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }
  }, [lenis]);

  return { canvasRef };
};

export default useHeroSection;
