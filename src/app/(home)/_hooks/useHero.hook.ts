import { useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { heroContainerOpacity } from "../_config/hero.config";

const TOTAL_FRAMES = 192;
const SCROLL_TRIGGER_HEIGHT = 7;

// Get frame path based on window width
const getFramePath = (index: number, width: number) => {
  const frameNumber = (index + 1).toString().padStart(4, "0");
  if (width < 500) {
    return `/images/hero/frames/frames_mobile_portrait/frame_${frameNumber}.webp`;
  }
  return `/images/hero/frames/frames_webp/frame_${frameNumber}.webp`;
};

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const useHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);
  const lastFrameRef = useRef(-1);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const opacityRafIdRef = useRef<number | null>(null);
  const pendingFrameRef = useRef<number | null>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const windowWidthRef = useRef<number>(typeof window !== "undefined" ? window.innerWidth : 0);

  const render = useCallback((frameIdx: number) => {
    // Cancel any pending render
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
    }

    // Store the frame to render
    pendingFrameRef.current = frameIdx;

    // Use requestAnimationFrame to throttle rendering
    rafIdRef.current = requestAnimationFrame(() => {
      const frameToRender = pendingFrameRef.current;
      if (frameToRender === null || lastFrameRef.current === frameToRender) {
        rafIdRef.current = null;
        return;
      }
      lastFrameRef.current = frameToRender;

      const canvas = canvasRef.current;
      if (!canvas || !imagesRef.current[frameToRender]) {
        rafIdRef.current = null;
        return;
      }

      // Cache context to avoid recreating on every render
      if (!ctxRef.current) {
        ctxRef.current = canvas.getContext("2d", {
          alpha: false,
          desynchronized: true,
          willReadFrequently: false,
        });
      }

      const ctx = ctxRef.current;
      if (!ctx) {
        rafIdRef.current = null;
        return;
      }

      const img = imagesRef.current[frameToRender];
      if (!img.complete || !img.naturalWidth) {
        rafIdRef.current = null;
        return;
      }

      const canvasWidth = canvas.clientWidth;
      const canvasHeight = canvas.clientHeight;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

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

      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);

      // Add grain effect to the full image using canvas
      const grainHeight = drawHeight;
      const grainY = drawY;
      const grainWidth = Math.round(drawWidth);
      const grainHeightPx = Math.round(grainHeight);

      // Create a temporary canvas for grain
      const grainCanvas = document.createElement("canvas");
      grainCanvas.width = grainWidth;
      grainCanvas.height = grainHeightPx;
      const grainCtx = grainCanvas.getContext("2d");

      if (grainCtx) {
        // Generate grain pattern
        const imageData = grainCtx.createImageData(grainWidth, grainHeightPx);
        const data = imageData.data;
        const grainIntensity = 750; // Increased grain intensity

        for (let i = 0; i < data.length; i += 4) {
          // Create grain noise - centered around 128 (neutral gray)
          const noise = (Math.random() - 0.45) * grainIntensity;
          const grainValue = Math.max(0, Math.min(255, 128 + noise));

          data[i] = grainValue; // R
          data[i + 1] = grainValue; // G
          data[i + 2] = grainValue; // B
          data[i + 3] = 255; // A
        }

        grainCtx.putImageData(imageData, 0, 0);

        // Apply grain overlay to the main canvas
        ctx.save();
        ctx.globalCompositeOperation = "overlay";
        ctx.globalAlpha = 0.6; // Increased opacity for more visible grain
        ctx.drawImage(grainCanvas, drawX, grainY, grainWidth, grainHeightPx);
        ctx.restore();
      }

      rafIdRef.current = null;
    });
  }, []);

  const scrollUpdate = useCallback(
    (self: ScrollTrigger) => {
      const progress = self.progress;
      const animationProgress = Math.min(progress / 0.9, 1);
      const targetFrame = Math.round(animationProgress * (TOTAL_FRAMES - 1));
      const reversedFrame = TOTAL_FRAMES - targetFrame - 1;

      // Only update if frame actually changed
      if (frameRef.current !== reversedFrame) {
        frameRef.current = reversedFrame;
        render(reversedFrame);
      }

      // Throttle opacity updates using separate RAF
      if (opacityRafIdRef.current === null) {
        opacityRafIdRef.current = requestAnimationFrame(() => {
          heroContainerOpacity(animationProgress, gsap);
          opacityRafIdRef.current = null;
        });
      }
    },
    [render]
  );

  useGSAP(() => {
    // Only run on client side to prevent hydration mismatches
    if (typeof window === "undefined") return;

    // Initialize context early
    const canvas = canvasRef.current;
    if (canvas && !ctxRef.current) {
      ctxRef.current = canvas.getContext("2d", {
        alpha: false,
        desynchronized: true,
        willReadFrequently: false,
      });
    }

    // Setup Canvas Sizing
    const setCanvasSize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Use cached context or create new one
      if (!ctxRef.current) {
        ctxRef.current = canvas.getContext("2d", {
          alpha: false,
          desynchronized: true,
          willReadFrequently: false,
        });
      }

      const ctx = ctxRef.current;
      if (!ctx) return;

      const pixelRatio = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      // Use dynamic viewport height to handle Safari's changing viewport
      const height = window.visualViewport?.height || window.innerHeight;

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Reset transform before scaling (important for resize)
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(pixelRatio, pixelRatio);
    };
    setCanvasSize();

    // Load Images based on current window width
    const loadImages = () => {
      const currentWidth = window.innerWidth;
      windowWidthRef.current = currentWidth;

      let loadedCount = 0;
      imagesRef.current = new Array(TOTAL_FRAMES);
      setIsLoading(true);
      setImagesLoaded(false);
      setLoadingProgress(0);

      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const img = new window.Image();
        img.src = getFramePath(i, currentWidth);

        const handleLoad = () => {
          loadedCount++;
          const progress = Math.round((loadedCount / TOTAL_FRAMES) * 100);
          setLoadingProgress(progress);

          if (loadedCount === TOTAL_FRAMES) {
            setIsLoading(false);
            setImagesLoaded(true);
            render(frameRef.current);
            setupScrollTrigger();
          }
        };

        img.onload = handleLoad;
        img.onerror = handleLoad;
        imagesRef.current[i] = img;
      }
    };

    loadImages();

    // ScrollTrigger Sequence Animation
    function setupScrollTrigger() {
      const currentHeight = window.visualViewport?.height || window.innerHeight;
      const scrollDistance = currentHeight * SCROLL_TRIGGER_HEIGHT;
      // Main hero section pin and animation
      ScrollTrigger.create({
        trigger: ".hero__section",
        start: "top top",
        end: `+=${scrollDistance}px`,
        pin: true,
        pinSpacing: true,
        scrub: 1, // Increased from 0.5 to reduce update frequency
        invalidateOnRefresh: true,
        refreshPriority: -1,
        onUpdate: scrollUpdate,
        // iOS-specific optimizations
        anticipatePin: 1,
        fastScrollEnd: true,
      });

      ScrollTrigger.normalizeScroll(true);

      gsap.timeline({
        scrollTrigger: {
          trigger: ".hero__section",
          start: `bottom-=${window.innerHeight}px top`,
          end: `bottom top`,
          scrub: 1, // Increased from 0.5 to reduce update frequency
          invalidateOnRefresh: true,
          refreshPriority: -1,
        },
      });

      // Setup Canvas and Background opacity animations
      if (canvasContainerRef.current && backgroundRef.current) {
        // Animate Canvas opacity: fade out when scroll > 10px
        ScrollTrigger.create({
          trigger: canvasContainerRef.current,
          start: "top top",
          end: "top+=10px top",
          scrub: true,
          onUpdate: (self) => {
            const opacity = 1 - self.progress;
            gsap.set(canvasContainerRef.current, { opacity });
          },
        });

        // Animate background: fade out when scroll > 10px
        ScrollTrigger.create({
          trigger: backgroundRef.current,
          start: "top top",
          end: "top+=10px top",
          scrub: true,
          onUpdate: (self) => {
            const opacity = 1 - self.progress;
            gsap.set(backgroundRef.current, { backgroundColor: `rgba(0, 0, 0, ${opacity})` });
          },
        });
      }
    }

    // Resize/Redraw Handler with throttling
    let resizeTimeout: NodeJS.Timeout;
    function handleResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const newWidth = window.innerWidth;
        const oldWidth = windowWidthRef.current;

        // Reload images if width crosses the 500px threshold
        const wasMobile = oldWidth < 500;
        const isMobile = newWidth < 500;

        if (wasMobile !== isMobile) {
          // Width threshold crossed, reload images
          loadImages();
        }

        windowWidthRef.current = newWidth;
        setCanvasSize();
        render(frameRef.current);
        ScrollTrigger.refresh();
      }, 150);
    }

    // Handle Safari's dynamic viewport changes
    let viewportTimeout: NodeJS.Timeout;
    function handleViewportChange() {
      clearTimeout(viewportTimeout);
      viewportTimeout = setTimeout(() => {
        setCanvasSize();
        render(frameRef.current);
        ScrollTrigger.refresh();
      }, 150);
    }

    window.addEventListener("resize", handleResize, { passive: true });

    // Listen for visual viewport changes (Safari URL bar hide/show)
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleViewportChange, { passive: true });
    }

    return () => {
      clearTimeout(resizeTimeout);
      clearTimeout(viewportTimeout);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      if (opacityRafIdRef.current !== null) {
        cancelAnimationFrame(opacityRafIdRef.current);
      }
      window.removeEventListener("resize", handleResize);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleViewportChange);
      }
      ScrollTrigger.getAll().forEach((st) => st.kill());
      ctxRef.current = null;
    };
  }, []);

  return {
    canvasRef,
    canvasContainerRef,
    backgroundRef,
    imagesLoaded,
    isLoading,
    loadingProgress,
  };
};

export default useHero;
