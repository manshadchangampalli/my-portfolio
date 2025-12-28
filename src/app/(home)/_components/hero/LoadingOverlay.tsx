"use client";

import { Cloud, Clouds, OrbitControls, Sparkles, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import * as THREE from "three";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import useDevice from "@/hooks/useDevice";

interface LoadingOverlayProps {
    isLoading: boolean;
    loadingProgress?: number;
    setLoadingPage: (value: boolean) => void;
}

export default function LoadingOverlay({ isLoading, loadingProgress = 0, setLoadingPage }: LoadingOverlayProps) {
    const { isLg, isMd } = useBreakpoints();
    const { isMobile } = useDevice();
    useEffect(() => {
        // Prevent scrolling on both html and body
        const html = document.documentElement;
        const body = document.body;

        // Store original values and scroll position
        const originalHtmlOverflow = html.style.overflow;
        const originalBodyOverflow = body.style.overflow;
        const originalBodyHeight = body.style.height;
        const originalHtmlHeight = html.style.height;
        const scrollY = window.scrollY;

        // Prevent scrolling
        html.style.overflow = "hidden";
        html.style.height = "100%";
        body.style.overflow = "hidden";
        body.style.height = "100%";

        // Also prevent touch scrolling on mobile by fixing body position
        // Save scroll position to prevent jump when overlay closes
        body.style.position = "fixed";
        body.style.width = "100%";
        body.style.top = `-${scrollY}px`;
        body.style.left = "0";

        return () => {
            // Restore original values
            html.style.overflow = originalHtmlOverflow;
            html.style.height = originalHtmlHeight;
            body.style.overflow = originalBodyOverflow;
            body.style.height = originalBodyHeight;
            body.style.position = "";
            body.style.width = "";
            body.style.top = "";
            body.style.left = "";

            // Restore scroll position
            window.scrollTo(0, scrollY);
        };
    }, []);
    // Use portal to render at root level, outside any scrollable containers
    const overlayContent = (
        <div
            className="fixed overflow-hidden flex justify-items-end md:text-4xl sm:text-3xl text-2xl font-orbitron p-6 text-white top-0 z-[9999] left-0 w-full h-screen bg-black"
            style={{
                right: 0,
                bottom: 0,
                position: "fixed",
                inset: 0,
                width: "100vw",
                height: "100vh",
            }}>
            <div>
                <h2 className="font-orbitron">{loadingProgress}</h2>
                <h2 className="animate-pulse text-lg font-orbitron"> {loadingProgress === 100 ? "Ready" : "Loading..."}</h2>
            </div>
            <div className="absolute left-0 top-0 w-screen h-screen">
                <Canvas
                    dpr={isMobile ? [0.5, 1] : [1, 2]}
                    frameloop="always"
                    gl={{
                        alpha: false,
                        antialias: !isMobile,
                        powerPreference: "high-performance",
                        stencil: false,
                    }}>
                    <Sparkles
                        count={isLg ? 50 : isMd ? 25 : 10}
                        speed={isLg ? 1.5 : isMd ? 1 : 0.4}
                        size={isMobile ? 60 : 90}
                        scale={isLg ? [10, 6, 5] : isMd ? [8, 4, 3] : [4, 6, 2]}
                        noise={isLg ? 1 : isMd ? 0.5 : 0.2}
                        color="#094409"
                    />
                    {!isMobile && <OrbitControls enableZoom={false} />}
                </Canvas>
            </div>
            {!isLoading && (
                <button
                    onClick={() => {
                        setLoadingPage(false);
                        window.scrollTo(0, 0);
                    }}
                    className="bg-white/10 cursor-pointer hover:bg-white/20 transition-colors text-lg backdrop-blur-sm text-white absolute left-1/2 -translate-1/2 top-1/2  px-4 py-2 rounded-md font-orbitron border border-white/20">
                    START
                </button>
            )}
        </div>
    );

    // Render using portal to ensure it's at the root level
    if (typeof window !== "undefined") {
        return createPortal(overlayContent, document.body);
    }

    return overlayContent;
}
