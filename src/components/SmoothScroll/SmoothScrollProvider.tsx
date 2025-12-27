"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import useDevice from "@/hooks/useDevice";

// Lazy load ReactLenis only when needed
const ReactLenis = dynamic(
    () => import("lenis/react").then((mod) => mod.default),
    {
        ssr: false,
        loading: () => null,
    }
);

interface SmoothScrollProviderProps {
    enableOnMobile?: boolean; // Option to disable on mobile for better performance
    disabled?: boolean; // Disable Lenis entirely (e.g., during loading)
}

export default function SmoothScrollProvider({
    enableOnMobile = false,
    disabled = false
}: SmoothScrollProviderProps) {
    const { isMobile, isClient } = useDevice();
    const [shouldLoadLenis, setShouldLoadLenis] = useState(false);

    useEffect(() => {
        // Don't load Lenis if disabled (e.g., during loading overlay)
        if (disabled) {
            setShouldLoadLenis(false);
            return;
        }

        // Only load Lenis if:
        // 1. We're on the client
        // 2. Either we're not on mobile, or mobile smooth scroll is explicitly enabled
        // 3. User hasn't indicated they prefer reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (isClient && !prefersReducedMotion) {
            // On mobile, only load if explicitly enabled
            if (!isMobile || enableOnMobile) {
                // Delay loading slightly to prioritize critical content
                const timer = setTimeout(() => {
                    setShouldLoadLenis(true);
                }, 100);
                return () => clearTimeout(timer);
            }
        }
    }, [isMobile, isClient, enableOnMobile, disabled]);

    // If we shouldn't load Lenis, don't render anything
    if (!shouldLoadLenis) {
        return null;
    }

    // Load Lenis with optimized settings for better scroll performance
    return (
        <ReactLenis
            root
            options={{
                lerp: isMobile ? 0.1 : 0.08, // Slightly increased for smoother performance
                duration: isMobile ? 1.2 : 1.5, // Increased duration for smoother feel
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: !isMobile, // Disable smooth wheel on mobile for better performance
                wheelMultiplier: 0.8, // Reduced for less aggressive scrolling
                touchMultiplier: isMobile ? 1.2 : 1.5, // Reduced for smoother touch scrolling
                infinite: false,
                prevent: (node) => node.classList.contains("hero__section"),
                // Performance optimizations
                syncTouch: true,
                syncTouchLerp: 0.075,
            }}
        />
    );
}
