"use client";

import { audioManager } from "@/utils/audioManager";
import { Volume2, VolumeOff } from "lucide-react";
import React, { useState } from "react";
import { createPortal } from "react-dom";

const Sound = () => {
    const [isMuted, setIsMuted] = useState(false);
    const handleMute = () => {
        audioManager?.mute(!isMuted);
        setIsMuted(!isMuted);
    };
    return createPortal(
        <div className="fixed cursor-pointer top-5 w-10 h-10 flex items-center justify-center rounded-full z-[9999] text-black bg-white  left-5">
            <button
                onClick={() => {
                    handleMute();
                }}>
                {isMuted ? <Volume2 size={20} /> : <VolumeOff size={20} />}
            </button>
        </div>,
        document.body
    );
};

export default Sound;
