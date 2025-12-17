import { useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { heroContainerOpacity } from "../_config/hero.config";

const TOTAL_FRAMES = 192;
const SCROLL_TRIGGER_HEIGHT = 7;
const currentFrame = (index: number) => `/images/hero/output_${(index + 1).toString().padStart(4, "0")}.jpg`;

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const useHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const render = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !imagesRef.current[frameIdx]) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIdx];
    if (!img.complete || !img.naturalWidth) return;

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
  }, []);

  const scrollUpdate = (self: ScrollTrigger) => {
    const progress = self.progress;
    const animationProgress = Math.min(progress / 0.9, 1);
    const targetFrame = Math.round(animationProgress * (TOTAL_FRAMES - 1));
    const reversedFrame = TOTAL_FRAMES - targetFrame - 1;
    frameRef.current = reversedFrame;
    render(reversedFrame);

    // Use requestAnimationFrame for better iOS performance
    requestAnimationFrame(() => {
      heroContainerOpacity(animationProgress, gsap);
    });
  };

  useGSAP(() => {
    // Only run on client side to prevent hydration mismatches
    if (typeof window === "undefined") return;

    // Setup Canvas Sizing
    const setCanvasSize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
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

    // Load Images
    let loadedCount = 0;
    imagesRef.current = new Array(TOTAL_FRAMES);

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new window.Image();
      img.src = currentFrame(i);

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
        scrub: 1,
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
          scrub: 1,
          invalidateOnRefresh: true,
          refreshPriority: -1,
        },
      });
    }

    // Resize/Redraw Handler
    function handleResize() {
      setCanvasSize();
      render(frameRef.current);
      ScrollTrigger.refresh();
    }

    // Handle Safari's dynamic viewport changes
    function handleViewportChange() {
      setCanvasSize();
      render(frameRef.current);
      ScrollTrigger.refresh();
    }

    window.addEventListener("resize", handleResize, { passive: true });

    // Listen for visual viewport changes (Safari URL bar hide/show)
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleViewportChange, { passive: true });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleViewportChange);
      }
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return { canvasRef, imagesLoaded, isLoading, loadingProgress };
};

export default useHero;
