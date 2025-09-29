"use client";

import useHeroSection from "../../_hooks/useHero.hook";
import { ArrowDown } from "lucide-react";

const Hero = () => {
    const { canvasRef, isLoading, loadingError, loadedCount, totalFrames } = useHeroSection();

    return (
        <div
            id="hero"
            className="h-screen w-screen bg-black relative">
            {/* Loading overlay */}
            {isLoading && (
                <div className="absolute inset-0 bg-black z-50 flex items-center justify-center">
                    <div className="text-white text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                        <p className="text-lg">Loading experience...</p>
                        <p className="text-sm text-gray-400 mt-2">
                            {loadedCount} / {totalFrames} images loaded
                        </p>
                    </div>
                </div>
            )}

            {/* Error state */}
            {loadingError && !isLoading && (
                <div className="absolute inset-0 bg-black z-40 flex items-center justify-center">
                    <div className="text-white text-center">
                        <p className="text-lg mb-4">Some images failed to load</p>
                        <p className="text-sm text-gray-400">Scroll to continue</p>
                    </div>
                </div>
            )}

            <div className="bg-black initial-screen absolute top-0 flex justify-center items-end left-0 w-screen h-screen z-30">
                <div className="initial-screen-text perspective-[1000px] text-white text-center">
                    <h1
                        style={{ lineHeight: 1 }}
                        className="text-[100px] font-bold flex items-end gap-1 justify-center">
                        <span>Hell</span>
                        <div className="w-[40px] flex items-center justify-center h-[60px] mb-1 border-2 border-white rounded-full">
                            <ArrowDown className="w-8 h-8 animate-bounce" />
                        </div>
                        <span>oo</span>
                    </h1>
                </div>
            </div>
            <canvas ref={canvasRef} className="z-10"></canvas>
        </div>
    );
};

export default Hero;
