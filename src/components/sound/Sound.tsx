"use client";

import { audioManager } from "@/utils/audioManager";
import { Volume2, VolumeX } from "lucide-react";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const STORAGE_KEY = "sound-muted";

const Sound = () => {
    const [isMuted, setIsMuted] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Handle mounting for SSR
    useEffect(() => {
        setMounted(true);
    }, []);

    // Load muted state from localStorage on mount
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedMuted = localStorage.getItem(STORAGE_KEY);
            if (savedMuted !== null) {
                const muted = savedMuted === "true";
                setIsMuted(muted);
                audioManager?.mute(muted);
            }
        }
    }, []);

    // Save muted state to localStorage
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem(STORAGE_KEY, String(isMuted));
        }
    }, [isMuted]);

    const handleMute = () => {
        // Unlock audio on first interaction
        audioManager?.unlock();

        const newMutedState = !isMuted;
        audioManager?.mute(newMutedState);
        setIsMuted(newMutedState);

        // Optional: Play a test sound when unmuting
        if (!newMutedState) {
            // audioManager?.play('/path/to/test-sound.mp3', 0.5);
        }
    };

    // Don't render on server
    if (!mounted) return null;

    return createPortal(
        <div className="fixed cursor-pointer top-5 w-10 h-10 flex items-center justify-center rounded-full z-[9999] text-white bg-white/10 backdrop-blur-sm shadow-lg right-5 transition-colors">
            <button
                onClick={handleMute}
                aria-label={isMuted ? "Unmute" : "Mute"}
                className="w-full h-full flex items-center justify-center">
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
        </div>,
        document.body
    );
};

export default Sound;
