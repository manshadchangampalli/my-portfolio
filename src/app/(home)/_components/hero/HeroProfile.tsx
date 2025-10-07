"use client";

import LiquidGlass from "react-ios-liquid-glass";
import "react-ios-liquid-glass/dist/index.css";

export default function HeroProfile() {
    return (
        <div className="fixed grid items-center justify-center z-20 left-0 top-0 w-full min-h-screen">
            <div
                style={{ transform: "perspective(1000px)" }}
                className="rounded-sm sm:rounded-2xl hero_profile_bar text-white flex items-center sm:w-[80vw] w-[90vw] min-h-[200px] sm:min-h-[300px]">
                <LiquidGlass className="hero_profile_bar_liquid" padding="0px" borderRadius="10px" width="100%" height="100%" blur="2px">
                    <h1 className=" text-xl sm:text-4xl md:text-[72px] px-4 py-8 leading-tight">
                        Hi, I&apos;m Manshad — <br /> solving problems with code.
                    </h1>
                </LiquidGlass>
            </div>
        </div>
    );
}
