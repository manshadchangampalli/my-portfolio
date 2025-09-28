"use client";

import useHeroSection from "../../_hooks/useHero.hook";
import { ArrowDown } from "lucide-react";

const Hero = () => {
    const { canvasRef } = useHeroSection();

    return ( 
        <div
            id="hero"
            className="h-screen w-screen bg-black">
            <div className="bg-black initial-screen absolute top-0 flex justify-center items-end left-0 w-screen h-screen">
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
            <canvas ref={canvasRef}></canvas>
        </div>
    );
};

export default Hero;
