import { useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { heroContainerOpacity } from "../_config/hero.config";

const TOTAL_FRAMES = 192;
const currentFrame = (index: number) => `/images/hero/output_${(index + 1).toString().padStart(4, "0")}.jpg`;

export const useHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Memoize render function
  const render = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !imagesRef.current[frameIdx]) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIdx];
    if (!img.complete || !img.naturalWidth) return; // Check if image is actually loaded

    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Aspect-ratio logic
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
    console.log(reversedFrame);
    frameRef.current = reversedFrame;
    render(reversedFrame);

    heroContainerOpacity(animationProgress,gsap);
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Setup Canvas Sizing
    const setCanvasSize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
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
        if (loadedCount === TOTAL_FRAMES) {
          setIsLoading(false);
          setImagesLoaded(true);
          render(frameRef.current);
          setupScrollTrigger();
        }
      };

      img.onload = handleLoad;
      img.onerror = handleLoad; // Still count failed images to prevent hanging
      imagesRef.current[i] = img;
    }

    // ScrollTrigger Sequence Animation
    function setupScrollTrigger() {
      ScrollTrigger.create({
        trigger: ".container",
        start: "top top",
        end: "+=7000px",
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: scrollUpdate,
      });
    }

    // Resize/Redraw Handler
    function handleResize() {
      setCanvasSize();
      render(frameRef.current);
    }
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return { canvasRef, imagesLoaded, isLoading };
};

export default useHero;
