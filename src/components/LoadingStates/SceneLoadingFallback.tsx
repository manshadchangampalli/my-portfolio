"use client";

/**
 * Loading fallback components for lazy-loaded 3D scenes
 * Provides visual feedback while heavy 3D components are being loaded
 */

export function ExperienceLoadingFallback() {
    return (
        <div className="w-full h-[min(90vh,700px)] bg-black flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                <p className="text-white/60 text-sm">Loading experience...</p>
            </div>
        </div>
    );
}

export function GalleryLoadingFallback() {
    return (
        <div className="w-screen h-screen bg-black flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                <p className="text-white/60 text-sm">Loading gallery...</p>
            </div>
        </div>
    );
}

/**
 * Minimal loading component for individual 3D models within portals
 * Keeps it lightweight since it's rendered inside the 3D scene
 */
export function ModelLoadingFallback() {
    // Return null for 3D model loading - the portal will handle the visual state
    return null;
}
