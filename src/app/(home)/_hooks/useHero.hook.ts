"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState, useCallback, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { heroAnimations } from "../_config/hero.config";

gsap.registerPlugin(ScrollTrigger);

// Reduce frames for mobile performance
const getTotalFrames = () => {
  if (typeof window === "undefined") return 192;
  return window.innerWidth < 768 ? 48 : 192;
};

const currentFrame = (i: number) => `/images/hero/output_${(i + 1).toString().padStart(4, "0")}.jpg`;

const useHeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctx = useRef<CanvasRenderingContext2D | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedCount = useRef(0);
  const videoFrameRef = useRef(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const totalFrames = useRef(getTotalFrames());
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const render = useCallback(() => {
    if (!ctx.current || !canvasRef.current) return;
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
  }, []);

  const setCanvasSize = useCallback(() => {
    if (canvasRef.current && ctx.current) {
      const pixelRatio = window.devicePixelRatio || 1;
      canvasRef.current.width = window.innerWidth * pixelRatio;
      canvasRef.current.height = window.innerHeight * pixelRatio;
      canvasRef.current.style.width = `${window.innerWidth}px`;
      canvasRef.current.style.height = `${window.innerHeight}px`;
      ctx.current.setTransform(1, 0, 0, 1, 0, 0);
      ctx.current.scale(pixelRatio, pixelRatio);
    }
  }, []);

  const handleScroll = useCallback(
    (self: globalThis.ScrollTrigger) => {
      const progress = Math.max(0, Math.min(self.progress, 1));
      const targetFrame = Math.round(progress * (totalFrames.current - 1));
      videoFrameRef.current = totalFrames.current - targetFrame - 1;

      render();
      heroAnimations.initialPageOpacity(progress, gsap);
      heroAnimations.initialTextTranslation(progress, gsap);
    },
    [render]
  );

  const setupScrollTrigger = useCallback(() => {
    // Clean up existing scroll trigger
    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill();
      scrollTriggerRef.current = null;
    }

    // Wait for DOM to be fully ready
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollTriggerRef.current = ScrollTrigger.create({
          trigger: "#hero",
          start: "top top",
          end: "+=700%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: handleScroll,
        });

        // Refresh after creation
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100);
      });
    });
  }, [handleScroll]);

  const loadImages = useCallback(async () => {
    try {
      setIsLoading(true);
      setLoadingError(false);

      // Clear existing images
      imagesRef.current = [];
      loadedCount.current = 0;

      // Update total frames based on current screen size
      totalFrames.current = getTotalFrames();

      const loadPromises: Promise<void>[] = [];

      for (let i = 0; i < totalFrames.current; i++) {
        const img = new Image();
        img.crossOrigin = "anonymous";

        const loadPromise = new Promise<void>((resolve) => {
          img.onload = () => {
            loadedCount.current++;
            resolve();
          };
          img.onerror = () => {
            console.warn(`Failed to load image: ${currentFrame(i)}`);
            loadedCount.current++;
            resolve();
          };
        });

        img.src = currentFrame(i);
        imagesRef.current.push(img);
        loadPromises.push(loadPromise);
      }

      loadingTimeoutRef.current = setTimeout(() => {
        if (loadedCount.current < totalFrames.current) {
          console.warn("Image loading timeout, proceeding with available images");
          setLoadingError(true);
          setIsLoading(false);
          if (loadedCount.current > 0) {
            render();
            setupScrollTrigger();
          }
        }
      }, 10000);

      await Promise.all(loadPromises);

      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
        loadingTimeoutRef.current = null;
      }

      setIsLoading(false);
      render();
      setupScrollTrigger();
    } catch (error) {
      console.error("Error loading images:", error);
      setLoadingError(true);
      setIsLoading(false);
    }
  }, [render, setupScrollTrigger]);

  // Initialize canvas and load images
  useGSAP(
    () => {
      ctx.current =
        canvasRef.current?.getContext("2d", {
          alpha: false,
          desynchronized: true,
        }) ?? null;

      setCanvasSize();
      loadImages();

      const handleResize = () => {
        setCanvasSize();
        render();

        const newTotalFrames = getTotalFrames();
        if (newTotalFrames !== totalFrames.current) {
          loadImages();
        } else if (scrollTriggerRef.current) {
          ScrollTrigger.refresh();
        }
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        if (loadingTimeoutRef.current) {
          clearTimeout(loadingTimeoutRef.current);
        }
      };
    },
    { scope: canvasRef }
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }

      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === "#hero") {
          trigger.kill();
        }
      });
    };
  }, []);

  return {
    canvasRef,
    isLoading,
    loadingError,
    loadedCount: loadedCount.current,
    totalFrames: totalFrames.current,
  };
};

export default useHeroSection;
