"use client";

import { Cloud, Clouds, OrbitControls, Sparkles, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

interface LoadingOverlayProps {
    isLoading: boolean;
    loadingProgress?: number;
    setLoadingPage: (value: boolean) => void;
}

export default function LoadingOverlay({ isLoading, loadingProgress = 0, setLoadingPage }: LoadingOverlayProps) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);
    return (
        <div
            className="fixed overflow-hidden flex justify-items-end md:text-4xl sm:text-3xl text-2xl font-orbitron p-6 text-white top-0 z-[9999] left-0 w-full h-dvh bg-black"
            style={{ right: 0, bottom: 0 }}>
            <div>
                <h2 className="font-orbitron">{loadingProgress}</h2>
                <h2 className="animate-pulse text-lg font-orbitron"> {loadingProgress === 100 ? "Ready" : "Loading..."}</h2>
            </div>
            <div className="absolute left-0 top-0 w-screen h-dvh ">
                <Canvas>
                    <Sparkles
                        count={100}
                        speed={1}
                        size={80}
                        scale={6}
                        noise={10}
                        color="#06415c"
                    />
                    <OrbitControls enableZoom={false} />
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
}
