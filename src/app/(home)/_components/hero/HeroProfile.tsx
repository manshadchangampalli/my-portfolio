"use client";

import { cn } from "@/utils/classNames";
import LiquidGlass from "react-ios-liquid-glass";
import "react-ios-liquid-glass/dist/index.css";
import useDevice from "@/hooks/useDevice";

export default function HeroProfile() {
    const { isMobile } = useDevice();
    return (
        <div className="fixed grid items-top p-2 sm:p-6 md:p-8 lg:p-10 justify-end z-20 left-0 top-0 w-full min-h-screen">
            <div
                style={{ transform: "perspective(1000px)" }}
                className="rounded-sm sm:rounded-2xl opacity-0 hero_profile_bar text-white flex items-center w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px]">
                <LiquidGlass
                    className={cn("hero_profile_bar_liquid flex items-center bg-black/10", isMobile && 'bg-white text-black ')}
                    padding="0px"
                    borderRadius="0px"
                    width="100%"
                    height="100%"
                    blur="2px">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 font-poller-one leading-tight">
                        Hi, I&apos;m Manshad — <br /> solving problems with code.
                    </h1>
                </LiquidGlass>
            </div>
        </div>
    );
}
