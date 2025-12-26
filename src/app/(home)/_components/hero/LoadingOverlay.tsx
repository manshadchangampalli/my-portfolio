"use client";

import { useEffect } from "react";

interface LoadingOverlayProps {
    isLoading: boolean;
    loadingProgress?: number;
}

export default function LoadingOverlay({ isLoading, loadingProgress = 0 }: LoadingOverlayProps) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [loadingProgress]);

    if (!isLoading) return null;
    return (
        <div
            className="fixed flex justify-between md:text-4xl sm:text-3xl text-2xl font-orbitron p-6 text-white top-0 z-[9999] left-0 w-full h-dvh bg-black"
            style={{ right: 0, bottom: 0 }}>
            <h2>{loadingProgress}</h2>
            <h2 className="animate-pulse">Loading...</h2>
        </div>
    );
}
