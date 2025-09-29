"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";
import { useRef, useState, useCallback } from "react";
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
  const lenis = useLenis();
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
      const progress = Math.min(self.progress / 0.9, 1);
      const targetFrame = Math.round(progress * (totalFrames.current - 1));
      videoFrameRef.current = totalFrames.current - targetFrame - 1;

      // Debug logging to help identify scroll issues
      if (self.progress > 0.1 && self.progress < 0.2) {
        console.log("ScrollTrigger Debug:", {
          progress: self.progress,
          start: self.start,
          end: self.end,
          scroll: self.scroll,
          direction: self.direction,
        });
      }

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
    }

    // Wait for the next frame to ensure DOM is ready
    requestAnimationFrame(() => {
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: "#hero",
        start: "top top",
        end: `+=${window.innerHeight * 8}px`, // Increased to 8vh for better coverage
        pin: true,
        scrub: 1,
        onUpdate: handleScroll,
        onRefresh: () => {
          console.log("ScrollTrigger refreshed");
        },
      });

      // Force refresh to ensure proper calculation
      ScrollTrigger.refresh();
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
        img.crossOrigin = "anonymous"; // Add CORS support

        const loadPromise = new Promise<void>((resolve) => {
          img.onload = () => {
            loadedCount.current++;
            resolve();
          };
          img.onerror = () => {
            console.warn(`Failed to load image: ${currentFrame(i)}`);
            loadedCount.current++; // Count failed images too
            resolve(); // Don't reject, just continue
          };
        });

        img.src = currentFrame(i);
        imagesRef.current.push(img);
        loadPromises.push(loadPromise);
      }

      // Set a timeout to prevent infinite loading
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
      }, 10000); // 10 second timeout

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

  // Load images on mount
  useGSAP(
    () => {
      ctx.current = canvasRef.current?.getContext("2d") ?? null;
      setCanvasSize();
      loadImages();

      const handleResize = () => {
        setCanvasSize();
        // Reload images if screen size changed significantly
        const newTotalFrames = getTotalFrames();
        if (newTotalFrames !== totalFrames.current) {
          loadImages();
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
    { scope: canvasRef, dependencies: [setCanvasSize, loadImages] }
  );

  // Lenis integration with better error handling
  useGSAP(
    () => {
      if (lenis) {
        const handleScroll = () => {
          try {
            ScrollTrigger.update();
          } catch (error) {
            console.warn("ScrollTrigger update error:", error);
          }
        };

        const handleRaf = (time: number) => {
          try {
            lenis.raf(time * 1000);
          } catch (error) {
            console.warn("Lenis RAF error:", error);
          }
        };

        // Add a small delay to ensure ScrollTrigger is properly initialized
        const timeoutId = setTimeout(() => {
          lenis.on("scroll", handleScroll);
          gsap.ticker.add(handleRaf);
          gsap.ticker.lagSmoothing(0);
        }, 100);

        return () => {
          clearTimeout(timeoutId);
          lenis.off("scroll", handleScroll);
          gsap.ticker.remove(handleRaf);
        };
      }
    },
    { dependencies: [lenis] }
  );

  // Cleanup on unmount
  useGSAP(
    () => {
      return () => {
        if (scrollTriggerRef.current) {
          scrollTriggerRef.current.kill();
        }
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger && trigger.trigger.id === "hero") {
            trigger.kill();
          }
        });
      };
    },
    { revertOnUpdate: true }
  );

  return {
    canvasRef,
    isLoading,
    loadingError,
    loadedCount: loadedCount.current,
    totalFrames: totalFrames.current,
  };
};

export default useHeroSection;
